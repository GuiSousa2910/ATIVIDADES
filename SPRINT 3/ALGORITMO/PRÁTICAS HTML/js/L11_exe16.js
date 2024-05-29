var listaNome = [];
var listaPreco = [];
var soma = 0;

function cadastrar() {
    var produto = input_produto.value;
    var preco = Number(input_compra.value);
    soma += preco;

    listaNome.push(produto);
    listaPreco.push(preco);
}

function relatar() {
    var produto = input_produto.value;
    var preco = Number(input_compra.value);
    var contador = 0;

    var menorPreco = listaNome[0];
    var maiorPreco = listaNome[0];

    divMensagem.innerHTML = `Total Produtos: ${listaNome.length}<br><br>`;

    for (var i = 0; i < listaNome.length; i++) {
        contador++;

        if (listaPreco[i] < listaPreco[0]) {
            menorPreco = listaNome[i];
        }

        else if (listaPreco[i] > listaPreco[0]) {
            maiorPreco = listaNome[i];
        }

        divMensagem.innerHTML += `
            Produto ${contador}: ${listaNome[i]} <br>
            Preço de compra: R$${listaPreco[i]}. Vender por R$${listaPreco[i] * 1.25}<br>
            `;

        var media = ((listaPreco[i] * 1.25) / listaPreco.length);
    }

    divMensagem.innerHTML += `
        <br> Produto mais caro: ${maiorPreco}
        <br> Produto mais barato: ${menorPreco}
        <br> A soma dos produtos é: ${soma}
        <br> A media da venda dos produtos é: ${media}`;
}