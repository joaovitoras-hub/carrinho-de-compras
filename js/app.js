let total = 0;

function adicionar(){
    let produto = document.getElementById("produto").value;
    let valorProduto = parseFloat(produto.split("R$")[1]);
    let nomeProduto = produto.split(" - ")[0];
    let quantidade = parseInt(document.getElementById("quantidade").value);

    let subtotal = valorProduto * quantidade;

    // procura se o produto já existe no carrinho
    let listaDeProdutos = document.getElementById("lista-produtos");
    let produtoExistente = document.getElementById("item-" + nomeProduto);

    if(produtoExistente){
        // se já existe, atualiza quantidade e subtotal
        let qtdSpan = produtoExistente.querySelector(".qtd");
        let precoSpan = produtoExistente.querySelector(".preco");

        let qtdAtual = parseInt(qtdSpan.innerText);
        let qtdNova = qtdAtual + quantidade;
        qtdSpan.innerText = qtdNova + "x";

        let subtotalNovo = valorProduto * qtdNova;
        precoSpan.innerText = "R$" + subtotalNovo.toFixed(2).replace(".", ",");
    } else {
        // se não existe, cria um novo section
        listaDeProdutos.innerHTML += `
            <section class="carrinho__produtos__produto" id="item-${nomeProduto}">
                <span class="texto-azul qtd">${quantidade}x</span> 
                ${nomeProduto} 
                <span class="texto-azul preco">R$${subtotal.toFixed(2).replace(".", ",")}</span>
            </section>`;
    }

    // atualizar total do carrinho
    total += subtotal;
    let totalDoCarrinho = document.getElementById("valor-total");
    totalDoCarrinho.innerHTML = `<span class="texto-azul" id="valor-total">R$${total.toFixed(2).replace(".", ",")}</span>`;
}

function limpar(){
    let quantidade = document.getElementById("quantidade");
    quantidade.innerHTML = `<input class="quantidade-input" id="quantidade" type="number" placeholder="100">`

    let carrinho = document.getElementById("lista-produtos");
    carrinho.innerHTML = `<section class="carrinho__produtos__produto">
          
        </section>`;

    let total = document.getElementById("carrinho_total");
    total.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$,00</span>`

}