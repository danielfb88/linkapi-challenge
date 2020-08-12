import { BaseIntegration } from "../BaseIntegration";

const { API_KEY_BLING, BASE_URL_BLING } = process.env;

export abstract class Bling extends BaseIntegration {
  /**
   * Create Bling axios client
   *
   * @memberof Pipedrive
   */
  static createBlingAxiosClient() {
    console.log("API_KEY_BLING :>> ", API_KEY_BLING);
    return this.createAxiosClient(BASE_URL_BLING!);
  }
}
