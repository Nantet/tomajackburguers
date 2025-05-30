window.addEventListener('DOMContentLoaded', () => {
  const status = document.getElementById('status-horario');
  const agora = new Date();
  const hora = agora.getHours();
  const dia = agora.getDay(); // 0 = domingo, 6 = sábado

  // Aberto das 18h às 23h, de segunda a sábado
  window.aberto = (dia >= 1 && dia <= 6 && hora >= 18 && hora < 23);

  if (window.aberto) {
    status.textContent = 'Aberto das 18h às 23h';
    status.classList.add('aberto');
    status.classList.remove('fechado');
  } else {
    status.textContent = 'Fechado';
    status.classList.add('fechado');
    status.classList.remove('aberto');
  }

  // Desabilita botão finalizar se fechado
  const btnFinalizar = document.getElementById('btn-finalizar');
  if (btnFinalizar) {
    btnFinalizar.disabled = !window.aberto;
    btnFinalizar.title = window.aberto ? '' : 'Estamos fechados no momento.';
  }
});

document.getElementById('btn-finalizar').addEventListener('click', function() {
  if (!window.aberto) {
    alert("Estamos fechados no momento. Você não pode finalizar o pedido.");
    return;
  }
  // Scroll para formulário contato
  document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.form-contato').addEventListener('submit', function(event) {
  event.preventDefault();

  if (!window.aberto) {
    alert("Estamos fechados no momento. Não é possível enviar pedidos.");
    return;
  }

  const nome = document.getElementById('nome').value.trim();
  const endereco = document.getElementById('endereco').value.trim();

  if (!nome || !endereco) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const itensLista = document.querySelectorAll('#lista-itens li');
  if (itensLista.length === 0) {
    alert("Sua sacola está vazia! Adicione produtos antes de finalizar.");
    return;
  }

  let pedido = "Pedido:\n";
  itensLista.forEach((li, i) => {
    pedido += `${i + 1}. ${li.textContent}\n`;
  });

  const mensagem = encodeURIComponent(`${pedido}\nNome: ${nome}\nEndereço: ${endereco}`);
  const numeroWhatsApp = "5521966810974";

  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
  window.open(urlWhatsApp, '_blank');
});
// Adiciona evento de clique no botão de finalizar pedido
// para rolar até a seção de contato e enviar a mensagem
