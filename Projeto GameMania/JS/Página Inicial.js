//Criar as funções para manipular o carrinho (adicionar, remover, confirmar)
window.onload = function carrinho(){
    var carrinho = document.getElementById('Carrinho');
    exibirCarrinho(carrinho);
}
function addCarrinho(nome, preco, quantidade, posicao){ //parâmetros
    //localStorage (armazenamento do navegador)
    //não é adequado para senhas (não é seguro)
    //localStorage = permanente
    //sessionStorage = válido por uma sessão
    localStorage.setItem("nome"+posicao, nome); // chave: nome1: valor: Macarrão
    localStorage.setItem("preco"+posicao, preco); // chave: preco1: 1,99   
    localStorage.setItem("quantidade"+posicao, quantidade);
    alert("Produto adicionado ao carrinho!");
}
function exibirCarrinho(carrinho){
    //Ler os dados do localStorage.getItem("nome"+posicao) -> for(repetição)
    //Mostrar os dados dos produtos na página carrinho.html
    //for() -> repetir para todos os itens do localStorage
     //produto adicionado no carrinho
     for(var i=1; i <=100; i++)
     if(localStorage.getItem('nome'+i) != null) {
    carrinho.innerHTML +="<div id='addCC'><b>Produto Adicionado: </b>"+" "+localStorage.getItem('nome'+i)+
                        "<div class='addC'><b>Valor do Produto:</b>"+" "+"R$"+localStorage.getItem('preco'+i)+
                        "<div class='addC'><b>Quantidade: <span class='qtdProd'></b>"+" "+localStorage.getItem('quantidade'+i)+
                        "<div class='addC'><b>Valor Total: R$ </b>"+calculaTotal()+"<br>"+
                        "<br><input type='button' value='Excluir' onclick='excluirItem("+i+")'></div>";
}
}
function moedaParaFloat(valor){
    let textoLimpo = valor.replace("R$", "").replace("," , ".");
    return parseFloat(textoLimpo);
}
function floatParaMoeda(valor){
    let valorFormatado = (valor < 1 ? "0": "") + Math.floor(valor*100);
    valorFormatado = "R$ " + valorFormatado;
    return valorFormatado.substr(0, valorFormatado.length-2) + "," + valorFormatado.substr(-2);
}
function retornaTotal(){
    let valorTotal = document.getElementsByClassName("valor");
    return moedaParaFloat(valorTotal.innerHTML);
}
function escreveTotal(value){
    let valorTotal = document.getElementsByClassName("valor");
    valorTotal.innerHTML = floatParaMoeda(value);
}
function calculaTotal(){
    var prod = document.getElementsByClassName("game-list");
    var totalProd = 0;
    for(var pos = 0; pos < prod.length; pos++){
        var priceElements = prod[pos].getElementsByClassName("valor");
        var priceText = priceElements[0].innerHTML;
        var price = moedaParaFloat(priceText);
        var qtdElements = prod[pos].getElementsByClassName("qtd");
        var qtdText = qtdElements[0].value;
        var quantidade = moedaParaFloat(qtdText);
        var subTotal = quantidade * price;
        totalProd += subTotal;
    }
    return totalProd;
}
function excluirItem(posicao, nome, preco, quantidade) {
    localStorage.removeItem("nome" + posicao, nome);
    localStorage.removeItem("preco" + posicao, preco);
    localStorage.removeItem("quantidade" + posicao, quantidade);
}

