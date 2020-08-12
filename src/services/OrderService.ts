import { Context } from "../Context";
import Bling from "../integrations/bling/Bling";
import Pipedrive from "../integrations/pipedrive/Pipedrive";
import { IDataDeal } from "../integrations/pipedrive/types";

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

      await this.saveDeal(wonDeal);
    }
  }

  /**
   * Save Deal into database
   *
   * @param {IDataDeal} dataDeal
   * @memberof OrderService
   */
  async saveDeal(dataDeal: IDataDeal) {
    await Context.getInstance().db.deals.save({
      amount: dataDeal.weighted_value,
      clientName: dataDeal.person_name,
      title: dataDeal.title,
      userName: dataDeal.user_id.name,
    });
  }
}
export default new OrderService();
