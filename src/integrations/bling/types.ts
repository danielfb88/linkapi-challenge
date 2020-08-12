export type StatusDeal = "won" | "open" | "lost" | "deleted" | "all_not_deleted";

export interface IPostPedidoResponse {
  retorno: {
    pedidos: Array<{
      pedido: {
        numero: string;
        idPedido: number;
        codigos_rastreamento: {
          codigo_rastreamento: string;
        };
        volumes: Array<{
          volume: {
            servico: string;
            codigoRastreamento: string;
          };
        }>;
      };
    }>;
  };
}

export interface IPedido {
  cliente: {
    nome: string;
    tipoPessoa: string;
    endereco: string;
    cpf_cnpj: string;
    ie_rg: string;
    numero: string;
    complemento: string;
    bairro: string;
    cep: string;
    cidade: string;
    uf: string;
    fone: string;
    email: string;
  };
  transporte: {
    transportadora: string;
    tipo_frete: string;
    servico_correios: string;
    dados_etiqueta: {
      nome: string;
      endereco: string;
      numero: string;
      complemento: string;
      municipio: string;
      uf: string;
      cep: string;
      bairro: string;
    };
    volumes: Array<{
      volume: {
        servico: string;
        codigoRastreamento: string;
      };
    }>;
  };
  itens: Array<{
    item: {
      codigo: string;
      descricao: string;
      un: string;
      qtde: string;
      vlr_unit: string;
    };
    parcelas: Array<{
      parcela: {
        data: string;
        vlr: string;
        obs: string;
      };
    }>;
    vlr_frete: string;
    vlr_desconto: string;
    obs: {
      obs_internas: string;
    };
  }>;
}
