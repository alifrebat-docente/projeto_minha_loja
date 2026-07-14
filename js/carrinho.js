//CRIANDO O ARRAY DE ITENS DO CARRIHO
let itensCarrinho = JSON.parse(sessionStorage.getItem("carrinhoSessao")) || []
//const itensCarrinho2 = JSON.parse(sessionStorage.get('carrinhoSessao')) || []

//FUNÇÃO PARA ADCIONAR UM ITEM
const addItem = (objItem) => {
    itensCarrinho.push(objItem)

    sessionStorage.setItem('carrinhoSessao', JSON.stringify(itensCarrinho))
}

//FUNÇÃO PARA LISTAR OS ITENS DO CARRINHO
const listItens = () => {
    const listaItens =  JSON.parse(sessionStorage.getItem('carrinhoSessao')) 

    return listaItens
}


//EXPORTAÇÃO
export { addItem, listItens }