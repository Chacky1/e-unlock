const {
  AUTH0_DOMAIN,
  AUTH0_AUDIENCE,
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_GRANT_TYPE = "client_credentials",
} = process.env;

const ACCESS_TOKEN_TIME_TO_LIVE = 60 * 60; // 1 hour

class ClientApiLearning {
  public accessToken: string = "";

  public constructor() {
    this.init();
  }

  private init = async () => {
    console.info("Initializing ClientApiLearning...");
    this.accessToken = await this.fetchAccessToken();
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
      next: { revalidate: ACCESS_TOKEN_TIME_TO_LIVE }
    });

    const { access_token } = await response.json();

    return access_token;
  };

  public fetchCategories = async () => {
    const categoriesUrl = new URL("/categories", AUTH0_AUDIENCE);

    const response = await fetch(categoriesUrl, {
      headers: { authorization: `Bearer ${this.accessToken}` },
    });

    const categories = await response.json();

    return categories;
  }

  public fetchCoursesByCategory = async (categoryId: number) => {
    const coursesUrl = new URL(`/categories/${categoryId}/courses`, AUTH0_AUDIENCE);

    const response = await fetch(coursesUrl, {
      headers: { authorization: `Bearer ${this.accessToken}` },
    });

    const courses = await response.json();

    return courses;
  }
}

export const clientApiLearning = new ClientApiLearning();
