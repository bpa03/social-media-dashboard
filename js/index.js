const themeSwitchButton = document.getElementById('theme-switcher-button');
const themeSwitchMode = themeSwitchButton.querySelector('span');

const isDarkTheme = (str) => str === 'dark';

function switchTheme () {
  const { body } = document;
  const { classList } = themeSwitchMode;
  const theme = body.getAttribute('theme');
  const nextTheme = isDarkTheme(theme) ? 'light' : 'dark';
  
  if (nextTheme === 'dark') {
    classList.add('theme-switcher_dark-mode_true');
    classList.remove('theme-switcher_dark-mode_false');
  } else {
    classList.add('theme-switcher_dark-mode_false');
    classList.remove('theme-switcher_dark-mode_true');
  }
  
  body.setAttribute('theme', nextTheme);
};

window.addEventListener('DOMContentLoaded', () => {
  themeSwitchButton.addEventListener('click', switchTheme);
});

