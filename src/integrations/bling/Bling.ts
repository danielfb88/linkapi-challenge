import { BaseIntegration } from "../BaseIntegration";

const { API_KEY_BLING, BASE_URL_BLING } = process.env;

export class Bling extends BaseIntegration {
  /**
   * Create Bling axios client
   *
   * @memberof Pipedrive
   */
  createBlingAxiosClient() {
    return this.createAxiosClient(BASE_URL_BLING!);
  }
}
