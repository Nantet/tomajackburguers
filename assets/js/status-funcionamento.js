window.addEventListener('DOMContentLoaded', () => {
  const status = document.getElementById('status-horario');
  const agora = new Date();
  const hora = agora.getHours();
  const dia = agora.getDay(); // 0 = domingo, 6 = sábado

  // Horário de funcionamento: das 18h às 23h (inclusive)
  // Aberto apenas de segunda a sábado (dias 1 a 6)
  if (dia >= 1 && dia <= 6 && hora >= 18 && hora < 23) {
    status.textContent = 'Aberto das 18h às 23h';
    status.classList.add('aberto');
    status.classList.remove('fechado');
  } else {
    status.textContent = 'Fechado';
    status.classList.add('fechado');
    status.classList.remove('aberto');
  }
});
