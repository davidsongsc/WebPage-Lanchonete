// Exemplo de script que poderia ser usado para adicionar interação à página, como por exemplo, mostrar e esconder o menu ao clicar em um botão

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('expanded');
});

let prevDelta = 0;

let sidebar = document.querySelector(".sidebar");
sidebar.addEventListener("DOMMouseScroll", e => {
    e.preventDefault();
    let delta = e.detail;
    sidebar.scrollTop += delta;
});
