const {
  AUTH0_DOMAIN,
  AUTH0_AUDIENCE,
  AUTH0_CLIENT_ID,
  AUTH0_CLIENT_SECRET,
  AUTH0_GRANT_TYPE = "client_credentials",
} = process.env;

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
    });

    const { access_token } = await response.json();

    return access_token;
  };
}

const clientApiLearning = new ClientApiLearning();
export default clientApiLearning;
