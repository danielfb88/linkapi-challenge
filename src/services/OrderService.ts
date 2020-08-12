import Bling from "../integrations/bling/Bling";

class OrderService {
  /**
   * Import orders from Pipedrive to Bling and persist into mongoDB Atlas
   *
   * @memberof OrderService
   */
  async importOrdersToBlingAndPersist() {
    // const wonDealsData = (await Pipedrive.getDealsByStatus("won")).data;

    const blingResult = await Bling.createPedido({
      cliente: {
        bairro: "ascdef",
        cep: "ascdef",
        cidade: "ascdef",
        complemento: "ascdef",
        cpf_cnpj: "ascdef",
        email: "ascdef",
        endereco: "ascdef",
        fone: "ascdef",
        ie_rg: "ascdef",
        nome: "ascdef",
        numero: "ascdef",
        tipoPessoa: "ascdef",
        uf: "ascdef",
      },
      itens: [
        {
          item: {
            codigo: "ascdef",
            descricao: "ascdef",
            qtde: "ascdef",
            un: "ascdef",
            vlr_unit: "ascdef",
          },
          obs: { obs_internas: "ascdef" },
          parcelas: [
            {
              parcela: {
                data: "ascdef",
                obs: "ascdef",
                vlr: "ascdef",
              },
            },
          ],
          vlr_desconto: "0",
          vlr_frete: "0",
        },
      ],
      transporte: {
        dados_etiqueta: {
          bairro: "ascdef",
          cep: "ascdef",
          complemento: "ascdef",
          endereco: "ascdef",
          municipio: "ascdef",
          nome: "ascdef",
          numero: "ascdef",
          uf: "ascdef",
        },
        servico_correios: "ascdef",
        tipo_frete: "ascdef",
        transportadora: "ascdef",
        volumes: [
          {
            volume: {
              codigoRastreamento: "ascdef",
              servico: "ascdef",
            },
          },
        ],
      },
    });

    console.log("blingResult :>> ", blingResult);
  }
}
export default new OrderService();
