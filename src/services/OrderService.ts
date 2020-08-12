import Bling from "../integrations/bling/Bling";
import Pipedrive from "../integrations/pipedrive/Pipedrive";

class OrderService {
  /**
   * Import orders from Pipedrive to Bling and persist into mongoDB Atlas
   *
   * @memberof OrderService
   */
  async importOrdersToBlingAndPersist() {
    const wonDealsData = (await Pipedrive.getDealsByStatus("won")).data;

    for (const wonDeal of wonDealsData) {
      await Bling.createPedido({
        cliente: {
          email: wonDeal.person_id.email[0].value,
          endereco: wonDeal.org_id.address,
          fone: wonDeal.person_id.phone[0].value,
          nome: wonDeal.person_id.name,
        },
        itens: [
          {
            item: {
              codigo: wonDeal.stage_id.toString(),
              descricao: wonDeal.title,
              vlr_unit: wonDeal.value.toString(),
            },
          },
        ],
        vendedor: wonDeal.user_id.name,
      });
    }
  }
}
export default new OrderService();
