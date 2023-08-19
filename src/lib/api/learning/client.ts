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

const ACCESS_TOKEN_TIME_TO_LIVE_MARGIN = 300; // 5 minutes

class ClientApiLearning {
  public accessToken: string = "";
  private accessTokenExpiry: number = 0;

  public constructor() {
    this.init();
  }

  private init = async () => {
    console.info("Initializing ClientApiLearning...");
    await this.ensureAccessToken();
  };

  private ensureAccessToken = async () => {
    if (!this.isAccessTokenValid()) {
      await this.fetchAccessToken();
    }
  };

  private isAccessTokenValid = () => {
    return (
      this.accessToken &&
      Date.now() <
        (this.accessTokenExpiry - ACCESS_TOKEN_TIME_TO_LIVE_MARGIN) * 1000
    );
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
    });

    const { access_token, expires_in } = await response.json();

    this.accessToken = access_token;
    this.accessTokenExpiry = Date.now() / 1000 + expires_in;
  };

  public fetchCategories = async (): Promise<Category[]> => {
    await this.ensureAccessToken();
    const categoriesUrl = new URL("/categories", AUTH0_AUDIENCE);

    const response = await fetch(categoriesUrl, {
      headers: { authorization: `Bearer ${this.accessToken}` },
    });

    const categories = await response.json() as Category[];

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

  public fetchCoursesByCategory = async (categoryId: number): Promise<Course[]> => {
    await this.ensureAccessToken();
    const coursesUrl = new URL(
      `/categories/${categoryId}/courses`,
      AUTH0_AUDIENCE
    );

    const response = await fetch(coursesUrl, {
      headers: { authorization: `Bearer ${this.accessToken}` },
    });

    const courses = await response.json() as Course[];

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

  public fetchUser = async (userCode: string): Promise<User | null> => {
    await this.ensureAccessToken();
    const userCoursesUrl = new URL(`/users/${userCode}`, AUTH0_AUDIENCE);

    const response = await fetch(userCoursesUrl, {
      headers: { authorization: `Bearer ${this.accessToken}` },
    });

    const user = await response.json() as User;

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

export const clientApiLearning = new ClientApiLearning();
