import { Context } from "../../Context";
import { BaseIntegration } from "../BaseIntegration";
import { IGetDealsResponse } from "./types";

const { BASE_URL_PIPEDRIVE, API_KEY_PIPEDRIVE } = process.env;

class Pipedrive extends BaseIntegration {
  /**
   * Create Pipedrive axios client
   *
   * @memberof Pipedrive
   */
  createPipedriveAxiosClient() {
    return this.createAxiosClient(BASE_URL_PIPEDRIVE!);
  }

  /**
   * Get dll deals
   *
   * @returns {Promise<IGetDealsResponse>}
   * @memberof Pipedrive
   */
  async getAllDeals(): Promise<IGetDealsResponse> {
    const endpoint = `/deals`;

    try {
      const result = await Context.getInstance().integrations.pipedrive.get<IGetDealsResponse>(endpoint, {
        params: { api_token: API_KEY_PIPEDRIVE },
      });

      return result.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
export default new Pipedrive();
