const button = document.getElementById('theme-switcher');
button.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});