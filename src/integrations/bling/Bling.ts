import * as js2xmlparser from "js2xmlparser";
import { Context } from "../../Context";
import { BaseIntegration } from "../BaseIntegration";
import { IPedido, IPostPedidoResponse } from "./types";

const { API_KEY_BLING, BASE_URL_BLING } = process.env;

class Bling extends BaseIntegration {
  /**
   * Create Bling axios client
   *
   * @memberof Pipedrive
   */
  createBlingAxiosClient() {
    return this.createAxiosClient(BASE_URL_BLING!);
  }

  /**
   * Create order
   *
   * @returns {Promise<IGetDealsResponse>}
   * @memberof Bling
   */
  async createPedido(pedido: IPedido): Promise<IPostPedidoResponse> {
    const endpoint = `/pedido/json`;

    try {
      const result = await Context.getInstance().integrations.bling.post<IPostPedidoResponse>(
        endpoint,
        { xml: js2xmlparser.parse("pedido", pedido) },
        { params: { apikey: API_KEY_BLING } },
      );

      return result.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}
export default new Bling();
