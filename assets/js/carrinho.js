document.addEventListener('DOMContentLoaded', () => {
  const listaItens = document.getElementById('lista-itens');
  const totalElem = document.getElementById('total');
  const carrinhoElem = document.getElementById('carrinho');
  const botaoFinalizar = document.getElementById('botao-finalizar');

  let carrinho = [];

  function atualizarCarrinho() {
    listaItens.innerHTML = '';
    let total = 0;

    if (carrinho.length === 0) {
      carrinhoElem.style.display = 'none';
      botaoFinalizar.style.display = 'none';
      return;
    }

    carrinhoElem.style.display = 'block';
    botaoFinalizar.style.display = 'block';

    carrinho.forEach((item, index) => {
      total += item.preco;

      const li = document.createElement('li');
      li.classList.add('item-carrinho');

      const nomeSpan = document.createElement('span');
      nomeSpan.textContent = item.nome;
      nomeSpan.classList.add('nome-item');

      const precoSpan = document.createElement('span');
      precoSpan.textContent = `R$ ${item.preco.toFixed(2).replace('.', ',')}`;
      precoSpan.classList.add('preco-item');

      const btnRemover = document.createElement('button');
      btnRemover.textContent = '✖';
      btnRemover.classList.add('remover-btn');
      btnRemover.onclick = () => {
        carrinho.splice(index, 1);
        atualizarCarrinho();
      };

      li.appendChild(nomeSpan);
      li.appendChild(precoSpan);
      li.appendChild(btnRemover);

      listaItens.appendChild(li);
    });

    totalElem.textContent = total.toFixed(2).replace('.', ',');
  }

  window.adicionarNoCarrinho = function (nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();
  }
});
