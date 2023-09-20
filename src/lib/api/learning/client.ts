import { UserSchema, User } from "./schema/user.schema";
import { CourseSchema, Course } from "./schema/course.schema";
import { CategorySchema, Category } from "./schema/category.schema";

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
    this.accessTokenExpiry = new Date(Date.now() + ACCESS_TOKEN_TIME_TO_LIVE * 1000);
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
}

const clientApiLearning = new ClientApiLearning();
export default clientApiLearning;
