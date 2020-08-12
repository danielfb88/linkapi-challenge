import { Context } from "../../Context";
import { BaseIntegration } from "../BaseIntegration";
import { IGetDealsResponse } from "./types";

const { BASE_URL_PIPEDRIVE, API_KEY_PIPEDRIVE } = process.env;

export abstract class Pipedrive extends BaseIntegration {
  /**
   * Create Pipedrive axios client
   *
   * @memberof Pipedrive
   */
  static createPipedriveAxiosClient() {
    return BaseIntegration.createAxiosClient(BASE_URL_PIPEDRIVE!);
  }

  /**
   * Get dll deals
   *
   * @returns {Promise<IGetDealsResponse>}
   * @memberof Pipedrive
   */
  static async getAllDeals(): Promise<IGetDealsResponse> {
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
