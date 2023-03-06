const menuButton = document.querySelector('.menu-button');
const dropdownContent = document.querySelector('.dropdown-content');
const menuContainer = document.querySelector('.menu-container');

menuButton.addEventListener('click', () => {
  menuContainer.classList.toggle('hidden');
  var menuList = document.querySelector(".menu-list");
  menuList.classList.toggle("display-block");
});
