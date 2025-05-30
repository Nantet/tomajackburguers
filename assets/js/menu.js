document.addEventListener('DOMContentLoaded', () => {
  const btnMenu = document.getElementById('btn-menu');
  const menuOverlay = document.getElementById('menu-overlay');
  const btnClose = document.getElementById('btn-close');

  btnMenu.addEventListener('click', () => {
    menuOverlay.classList.remove('hidden');
  });

  btnClose.addEventListener('click', () => {
    menuOverlay.classList.add('hidden');
  });

  // Fecha ao clicar em qualquer botão de navegação
  document.querySelectorAll('.menu-nav button').forEach(btn => {
    btn.addEventListener('click', () => {
      menuOverlay.classList.add('hidden');
    });
  });
});
