function toggleDropdown() {
    const dropdown = document.querySelector(".dropdown-content");
    const menuButton = document.querySelector(".menu-button");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
        menuButton.classList.remove("active");
    } else {
        dropdown.style.display = "block";
        menuButton.classList.add("active");
    }
}

// Agregar un evento de clic a cada enlace del menú desplegable
var links = document.querySelectorAll('.dropdown-content a');
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', toggleDropdown);
}