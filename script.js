var itens = [];
document.querySelector('input[type=submit]').addEventListener('click', ()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]').value;
    var precoProduto = document.querySelector('input[name=preco_produto]').value;
    var quantidadeProduto = document.querySelector('input[name=quantidade_produto]').value;

    itens.push({
        nome: nomeProduto,
        preco: precoProduto,
        quantidade: quantidadeProduto
    });

    let listaProdutos = document.querySelector('.listagem-produto');
    let total = 0;
    listaProdutos.innerHTML="";
    itens.map(function(val){
        total+=parseFloat(val.preco*val.quantidade);
        listaProdutos.innerHTML += `
            <div class='listagem-item'>
            <h3>`+val.quantidade+`</h3>
            <h3>`+val.nome+`</h3>
            <h3>R$`+val.preco+`</h3>
            <h3>R$`+(val.quantidade*val.preco).toFixed(2)+`</h3>
            </div>
        `;
    });
    total = total.toFixed(2);
    let elementoTotal = document.querySelector('.soma-produtos h2');
    elementoTotal.innerHTML= 'R$'+total;
});