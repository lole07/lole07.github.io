const menuButton = document.querySelector('.menu-button');
const dropdownContent = document.querySelector('.dropdown-content');
const menuContainer = document.querySelector('.menu-container');
const menuList = document.querySelector(".menu-list");

menuButton.addEventListener('click', () => {
  menuContainer.classList.toggle('hidden');
  menuList.classList.toggle("display-block");
});
