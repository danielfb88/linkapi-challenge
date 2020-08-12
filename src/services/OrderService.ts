import { IPedido } from "../integrations/bling/types";
import Pipedrive from "../integrations/pipedrive/Pipedrive";

class OrderService {
  async importOrdersToBlingAndPersist() {
    const dealsResponse = await Pipedrive.getAllDeals();

    const blingPedidos = {
      cliente: {},
    } as IPedido;

    console.log("result :>> ", dealsResponse);
  }
}
export default new OrderService();
