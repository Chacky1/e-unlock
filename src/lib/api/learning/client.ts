import { UserSchema, User } from "./schema/user.schema";
import { CourseSchema, Course } from "./schema/course.schema";
import { CategorySchema, Category } from "./schema/category.schema";
import { OrderSchema, Order } from "./schema/order.schema";
import { LessonSchema, Lesson } from "./schema/lesson.schema";
import { ResourceSchema, Resource } from "./schema/resource.schema";

const {
  AUTH0_DOMAIN,
  AUTH0_AUDIENCE,
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_GRANT_TYPE = "client_credentials",
} = process.env;

const ACCESS_TOKEN_TIME_TO_LIVE = 3600; // 1 hour

class ClientApiLearning {
  public accessToken: string = "";
  private accessTokenExpiry: Date = new Date();

  private ensureAccessToken = async () => {
    if (this.accessToken && new Date() < this.accessTokenExpiry) {
      return;
    }

    await this.fetchAccessToken();
  };

  private fetchAccessToken = async () => {
    const tokenUrl = new URL("oauth/token", AUTH0_DOMAIN);

    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        client_id: AUTH0_CLIENT_ID,
        client_secret: AUTH0_CLIENT_SECRET,
        audience: AUTH0_AUDIENCE,
        grant_type: AUTH0_GRANT_TYPE,
      }),
      next: {
        revalidate: ACCESS_TOKEN_TIME_TO_LIVE,
      },
    });

    const { access_token } = await response.json();

    this.accessToken = access_token;
    this.accessTokenExpiry = new Date(
      Date.now() + ACCESS_TOKEN_TIME_TO_LIVE * 1000
    );
  };

  public fetchCategories = async (): Promise<Category[]> => {
    await this.ensureAccessToken();
    const categoriesUrl = new URL("/categories", AUTH0_AUDIENCE);

    const response = await fetch(categoriesUrl, {
      headers: { authorization: `Bearer ${this.accessToken}` },
    });

    const categories = (await response.json()) as Category[];

    try {
      for (const category of categories) {
        CategorySchema.parse(category);
      }
    } catch (error) {
      console.error(
        "[fetchCategories] Category received does not respect schema, error : ",
        error
      );
      return [];
    }

    return categories;
  };

  public fetchCourseById = async (courseId: number): Promise<Course | null> => {
    await this.ensureAccessToken();
    const courseUrl = new URL(`/courses/${courseId}`, AUTH0_AUDIENCE);

    const response = await fetch(courseUrl, {
      headers: { authorization: `Bearer ${this.accessToken}` },
    });

    const course = (await response.json()) as Course;

    try {
      CourseSchema.parse(course);
    } catch (error) {
      console.error(
        "[fetchCourseById] Course received does not respect schema, error : ",
        error
      );
      return null;
    }

    return course;
  };

  public fetchCoursesByCategory = async (
    categoryId: number
  ): Promise<Course[]> => {
    await this.ensureAccessToken();
    const coursesUrl = new URL(
      `/categories/${categoryId}/courses`,
      AUTH0_AUDIENCE
    );

    const response = await fetch(coursesUrl, {
      headers: { authorization: `Bearer ${this.accessToken}` },
    });

    const courses = (await response.json()) as Course[];

    try {
      for (const course of courses) {
        CourseSchema.parse(course);
      }
    } catch (error) {
      console.error(
        "[fetchCoursesByCategory] Course received does not respect schema, error : ",
        error
      );
      return [];
    }

    return courses;
  };

  public fetchCourseBySlug = async (
    courseSlug: string
  ): Promise<Course | null> => {
    await this.ensureAccessToken();
    const courseUrl = new URL(`/courses?slug=${courseSlug}`, AUTH0_AUDIENCE);

    const response = await fetch(courseUrl, {
      headers: { authorization: `Bearer ${this.accessToken}` },
    });

    const courses = (await response.json()) as Course[];
    const course = courses[0];

    try {
      CourseSchema.parse(course);
    } catch (error) {
      console.error(
        "[fetchCourseBySlug] Course received does not respect schema, error : ",
        error
      );
      return null;
    }

    return course;
  };

  public fetchLessonById = async (lessonId: number): Promise<Lesson | null> => {
    await this.ensureAccessToken();
    const lessonUrl = new URL(`/lessons/${lessonId}`, AUTH0_AUDIENCE);

    const response = await fetch(lessonUrl, {
      headers: { authorization: `Bearer ${this.accessToken}` },
    });

    const lesson = (await response.json()) as Lesson;

    try {
      LessonSchema.parse(lesson);
    } catch (error) {
      console.error(
        "[fetchLessonById] Course received does not respect schema, error : ",
        error
      );
      return null;
    }

    return lesson;
  };

  public fetchUser = async (userCode: string): Promise<User | null> => {
    await this.ensureAccessToken();
    const userCoursesUrl = new URL(`/users/${userCode}`, AUTH0_AUDIENCE);

    const response = await fetch(userCoursesUrl, {
      headers: { authorization: `Bearer ${this.accessToken}` },
    });

    const user = (await response.json()) as User;

    try {
      UserSchema.parse(user);
    } catch (error) {
      console.error(
        "[fetchUser] User received does not respect schema, error : ",
        error
      );
      return null;
    }

    return user;
  };

  public createOrderOrFail = async (
    userCode: string,
    courseId: number,
    status: string
  ): Promise<Order> => {
    console.log("[createOrderOrFail] parameters", userCode, courseId, status);
    await this.ensureAccessToken();
    console.log("[createOrderOrFail] accessToken : ", this.accessToken);
    const ordersUrl = new URL("orders", AUTH0_AUDIENCE);

    const response = await fetch(ordersUrl, {
      method: "POST",
      headers: {
        authorization: `Bearer ${this.accessToken}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ userCode, courseId, status }),
    });

    const order = (await response.json()) as Order;

    try {
      OrderSchema.parse(order);
    } catch (error) {
      console.error(
        "[createOrder] Order received does not respect schema, error : ",
        error
      );
      throw error;
    }

    return order;
  };

  public updateOrderOrFail = async (
    orderId: number,
    status: string
  ): Promise<Order> => {
    await this.ensureAccessToken();
    const ordersUrl = new URL(`/orders/${orderId}`, AUTH0_AUDIENCE);

    const response = await fetch(ordersUrl, {
      method: "PATCH",
      headers: {
        authorization: `Bearer ${this.accessToken}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ status }),
    });

    const order = (await response.json()) as Order;

    try {
      OrderSchema.parse(order);
    } catch (error) {
      console.error(
        "[updateOrder] Order received does not respect schema, error : ",
        error
      );
      throw error;
    }

    return order;
  };

  public fetchResourcesByLessonId = async (
    lessonId: number
  ): Promise<Resource[]> => {
    await this.ensureAccessToken();
    const resourcesUrl = new URL(
      `resources?lessonId=${lessonId}`,
      AUTH0_AUDIENCE
    );

    const response = await fetch(resourcesUrl, {
      headers: { authorization: `Bearer ${this.accessToken}` },
    });

    const resources = (await response.json()) as Resource[];

    try {
      for (const resource of resources) {
        ResourceSchema.parse(resource);
      }
    } catch (error) {
      console.error(
        "[fetchResourcesByLessonId] Resource received does not respect schema, error : ",
        error
      );
      return [];
    }

    return resources;
  };
}

const clientApiLearning = new ClientApiLearning();
export default clientApiLearning;
