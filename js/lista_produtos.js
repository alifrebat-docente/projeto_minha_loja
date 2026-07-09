const produtos = [
    {
      id_produto: 1,
      descricao_produto: "Arroz branco 5kg",
      valor_unitario: 28.90,
      unidade: "UN",
      caminho_imagem: "../imagens/arroz_branco.jpg",
      id_secao: 1,
      secao: "Mercearia"
    },
    {
      id_produto: 2,
      descricao_produto: "Feijão Preto 1kg",
      valor_unitario: 8.50,
      unidade: "Kg",
      caminho_imagem: "../imagens/feijao_preto.jpg",
      id_secao: 1,
      secao: "Mercearia"
    },
    {
      id_produto: 3,
      descricao_produto: "Macarrão Espaguete 500g",
      valor_unitario: 4.99,
      unidade: "UN",
      caminho_imagem: "../imagens/macarrao-espaguete-500g.jpg",
      id_secao: 1,
      secao: "Mercearia"
    },
    {
      id_produto: 4,
      descricao_produto: "Açúcar Refinado 1kg",
      valor_unitario: 5.79,
      unidade: "UN",
      caminho_imagem: "../imagens/acucar-refinado-1kg.jpg",
      id_secao: 1,
      secao: "Mercearia"
    },
    {
      id_produto: 5,
      descricao_produto: "Café Torrado e Moído 500g",
      valor_unitario: 17.90,
      unidade: "UN",
      caminho_imagem: "../imagens/cafe-500g.jpg",
      id_secao: 1,
      secao: "Mercearia"
    },
    {
      id_produto: 6,
      descricao_produto: "Óleo de Soja 900ml",
      valor_unitario: 7.49,
      unidade: "UN",
      caminho_imagem: "../imagens/oleo-soja-900ml.jpg",
      id_secao: 1,
      secao: "Mercearia"
    },
    {
      id_produto: 7,
      descricao_produto: "Leite Integral 1L",
      valor_unitario: 5.89,
      unidade: "UN",
      caminho_imagem: "../imagens/leite-integral-1l.jpg",
      id_secao: 2,
      secao: "Laticínios"
    },
    {
      id_produto: 8,
      descricao_produto: "Queijo Mussarela 500g",
      valor_unitario: 24.90,
      unidade: "KG",
      caminho_imagem: "../imagens/mussarela-500g.jpg",
      id_secao: 2,
      secao: "Laticínios"
    },
    {
      id_produto: 9,
      descricao_produto: "Iogurte Natural 170g",
      valor_unitario: 3.99,
      unidade: "UN",
      caminho_imagem: "../imagens/iogurte-natural.jpg",
      id_secao: 2,
      secao: "Laticínios"
    },
    {
      id_produto: 10,
      descricao_produto: "Manteiga com Sal 200g",
      valor_unitario: 11.90,
      unidade: "UN",
      caminho_imagem: "../imagens/manteiga-200g.jpg",
      id_secao: 2,
      secao: "Laticínios"
    },
    {
      id_produto: 11,
      descricao_produto: "Peito de Frango Resfriado",
      valor_unitario: 18.90,
      unidade: "KG",
      caminho_imagem: "../imagens/peito-frango.jpg",
      id_secao: 3,
      secao: "Carnes"
    },
    {
      id_produto: 12,
      descricao_produto: "Carne Bovina Alcatra",
      valor_unitario: 49.90,
      unidade: "KG",
      caminho_imagem: "../imagens/alcatra.jpg",
      id_secao: 3,
      secao: "Carnes"
    },
    {
      id_produto: 13,
      descricao_produto: "Linguiça Toscana",
      valor_unitario: 19.90,
      unidade: "KG",
      caminho_imagem: "../imagens/linguica-toscana.jpg",
      id_secao: 3,
      secao: "Carnes"
    },
    {
      id_produto: 14,
      descricao_produto: "Filé de Tilápia",
      valor_unitario: 39.90,
      unidade: "KG",
      caminho_imagem: "../imagens/file-tilapia.jpg",
      id_secao: 3,
      secao: "Carnes"
    },
    {
      id_produto: 15,
      descricao_produto: "Banana Prata",
      valor_unitario: 6.99,
      unidade: "KG",
      caminho_imagem: "../imagens/banana-prata.jpg",
      id_secao: 4,
      secao: "Hortifruti"
    },
    {
      id_produto: 16,
      descricao_produto: "Maçã Gala",
      valor_unitario: 9.49,
      unidade: "KG",
      caminho_imagem: "../imagens/maca-gala.jpg",
      id_secao: 4,
      secao: "Hortifruti"
    },
    {
      id_produto: 17,
      descricao_produto: "Tomate Italiano",
      valor_unitario: 8.99,
      unidade: "KG",
      caminho_imagem: "../imagens/tomate-italiano.jpg",
      id_secao: 4,
      secao: "Hortifruti"
    },
    {
      id_produto: 18,
      descricao_produto: "Alface Crespa",
      valor_unitario: 3.49,
      unidade: "UN",
      caminho_imagem: "../imagens/alface-crespa.jpg",
      id_secao: 4,
      secao: "Hortifruti"
    },
    {
      id_produto: 19,
      descricao_produto: "Cebola",
      valor_unitario: 5.99,
      unidade: "KG",
      caminho_imagem: "../imagens/cebola.jpg",
      id_secao: 4,
      secao: "Hortifruti"
    },
    {
      id_produto: 20,
      descricao_produto: "Batata Inglesa",
      valor_unitario: 6.49,
      unidade: "KG",
      caminho_imagem: "../imagens/batata-inglesa.jpg",
      id_secao: 4,
      secao: "Hortifruti"
    },
    {
      id_produto: 21,
      descricao_produto: "Refrigerante Cola 2L",
      valor_unitario: 9.99,
      unidade: "UN",
      caminho_imagem: "../imagens/refrigerante-cola-2l.jpg",
      id_secao: 5,
      secao: "Bebidas"
    },
    {
      id_produto: 22,
      descricao_produto: "Suco de Laranja 1L",
      valor_unitario: 8.49,
      unidade: "UN",
      caminho_imagem: "../imagens/suco-laranja-1l.jpg",
      id_secao: 5,
      secao: "Bebidas"
    },
    {
      id_produto: 23,
      descricao_produto: "Água Mineral 1,5L",
      valor_unitario: 3.29,
      unidade: "UN",
      caminho_imagem: "../imagens/agua-mineral-15l.jpg",
      id_secao: 5,
      secao: "Bebidas"
    },
    {
      id_produto: 24,
      descricao_produto: "Achocolatado em Pó 400g",
      valor_unitario: 8.99,
      unidade: "UN",
      caminho_imagem: "../imagens/achocolatado-400g.jpg",
      id_secao: 5,
      secao: "Bebidas"
    },
    {
      id_produto: 25,
      descricao_produto: "Biscoito Recheado Chocolate",
      valor_unitario: 3.49,
      unidade: "UN",
      caminho_imagem: "../imagens/biscoito-recheado.jpg",
      id_secao: 6,
      secao: "Bomboniere"
    },
    {
      id_produto: 26,
      descricao_produto: "Chocolate ao Leite 90g",
      valor_unitario: 6.49,
      unidade: "UN",
      caminho_imagem: "../imagens/chocolate-90g.jpg",
      id_secao: 6,
      secao: "Bomboniere"
    },
    {
      id_produto: 27,
      descricao_produto: "Balas Sortidas 600g",
      valor_unitario: 12.90,
      unidade: "UN",
      caminho_imagem: "../imagens/balas-sortidas.jpg",
      id_secao: 6,
      secao: "Bomboniere"
    },
    {
      id_produto: 28,
      descricao_produto: "Papel Higiênico 12 Rolos",
      valor_unitario: 24.90,
      unidade: "UN",
      caminho_imagem: "../imagens/papel-higienico-12.jpg",
      id_secao: 7,
      secao: "Limpeza"
    },
    {
      id_produto: 29,
      descricao_produto: "Detergente Líquido 500ml",
      valor_unitario: 2.99,
      unidade: "UN",
      caminho_imagem: "../imagens/detergente-500ml.jpg",
      id_secao: 7,
      secao: "Limpeza"
    },
    {
      id_produto: 30,
      descricao_produto: "Sabão em Pó 1,6kg",
      valor_unitario: 18.90,
      unidade: "UN",
      caminho_imagem: "../imagens/sabao-po.jpg",
      id_secao: 7,
      secao: "Limpeza"
    },
    {
      id_produto: 31,
      descricao_produto: "Água Sanitária 2L",
      valor_unitario: 6.49,
      unidade: "UN",
      caminho_imagem: "../imagens/agua-sanitaria.jpg",
      id_secao: 7,
      secao: "Limpeza"
    },
    {
      id_produto: 32,
      descricao_produto: "Esponja Multiuso",
      valor_unitario: 2.49,
      unidade: "UN",
      caminho_imagem: "../imagens/esponja.jpg",
      id_secao: 7,
      secao: "Limpeza"
    },
    {
      id_produto: 33,
      descricao_produto: "Shampoo 400ml",
      valor_unitario: 18.90,
      unidade: "UN",
      caminho_imagem: "../imagens/shampoo.jpg",
      id_secao: 8,
      secao: "Higiene"
    },
    {
      id_produto: 34,
      descricao_produto: "Condicionador 400ml",
      valor_unitario: 19.90,
      unidade: "UN",
      caminho_imagem: "../imagens/condicionador.jpg",
      id_secao: 8,
      secao: "Higiene"
    },
    {
      id_produto: 35,
      descricao_produto: "Sabonete 90g",
      valor_unitario: 2.79,
      unidade: "UN",
      caminho_imagem: "../imagens/sabonete.jpg",
      id_secao: 8,
      secao: "Higiene"
    },
    {
      id_produto: 36,
      descricao_produto: "Creme Dental 90g",
      valor_unitario: 5.99,
      unidade: "UN",
      caminho_imagem: "../imagens/creme-dental.jpg",
      id_secao: 8,
      secao: "Higiene"
    },
    {
      id_produto: 37,
      descricao_produto: "Escova Dental Macia",
      valor_unitario: 7.49,
      unidade: "UN",
      caminho_imagem: "../imagens/escova-dental.jpg",
      id_secao: 8,
      secao: "Higiene"
    },
    {
      id_produto: 38,
      descricao_produto: "Fralda Descartável M 30 Unidades",
      valor_unitario: 49.90,
      unidade: "UN",
      caminho_imagem: "../imagens/fralda-m.jpg",
      id_secao: 9,
      secao: "Bebê"
    },
    {
      id_produto: 39,
      descricao_produto: "Lenço Umedecido 100 Unidades",
      valor_unitario: 12.90,
      unidade: "UN",
      caminho_imagem: "../imagens/lenco-umedecido.jpg",
      id_secao: 9,
      secao: "Bebê"
    },
    {
      id_produto: 40,
      descricao_produto: "Ração para Cães 10kg",
      valor_unitario: 129.90,
      unidade: "UN",
      caminho_imagem: "../imagens/racao-caes-10kg.jpg",
      id_secao: 10,
      secao: "Pet"
    }
  ];

  export{produtos}