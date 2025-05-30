// Função para ir para a seção contato ao finalizar pedido
document.getElementById('btn-finalizar').addEventListener('click', function() {
  // Se quiser, valide se há itens no carrinho antes
  const itensNoCarrinho = document.querySelectorAll('#lista-itens li');
  if (itensNoCarrinho.length === 0) {
    alert('Sua sacola está vazia! Adicione itens antes de finalizar.');
    return;
  }

  // Rola até a seção contato
  document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
});

// Função que envia a mensagem pelo WhatsApp ao enviar o formulário
document.getElementById('form-contato').addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const endereco = document.getElementById('endereco').value.trim();

  if (!nome || !endereco) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Monta o pedido puxando os itens da sacola
  const itensLista = document.querySelectorAll('#lista-itens li');
  if (itensLista.length === 0) {
    alert("Sua sacola está vazia! Adicione produtos antes de finalizar.");
    return;
  }

  let pedido = "Pedido:\n";
  itensLista.forEach((li, i) => {
    pedido += `${i + 1}. ${li.textContent}\n`;
  });

  // Monta a mensagem completa
  const mensagem = encodeURIComponent(`${pedido}\nNome: ${nome}\nEndereço: ${endereco}`);

  const numeroWhatsApp = "5521966810974"; // seu número real aqui

  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

  window.open(urlWhatsApp, '_blank');
});

