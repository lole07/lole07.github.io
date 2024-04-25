const menuButton = document.querySelector('.menu-button');
const dropdownContent = document.querySelector('.dropdown-content');
const menuContainer = document.querySelector('.menu-container');

menuButton.addEventListener('click', () => {
  menuContainer.classList.toggle('hidden');
  var menuList = document.querySelector(".menu-list");
  menuList.classList.toggle("display-block");
});

// Función para cargar modelos 3D cuando son visibles
function loadModel(section) {
    const iframe = section.querySelector('iframe');
    const modelUrl = section.dataset.modelUrl;
    if (iframe && !iframe.src) {
        iframe.src = modelUrl;
    }
}

// Función para pausar los modelos 3D que no están visibles
function pauseModels() {
    const sections = document.querySelectorAll('.parallax');
    sections.forEach(section => {
        const iframe = section.querySelector('iframe');
        if (iframe && section.getBoundingClientRect().bottom < 0 || section.getBoundingClientRect().top > window.innerHeight) {
            iframe.src = iframe.src; // Forzar recarga del iframe para pausar el modelo
        }
    });
}

// Función para manejar el evento de desplazamiento y cargar modelos 3D cuando sean visibles
function handleScroll() {
    const sections = document.querySelectorAll('.parallax');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            loadModel(section);
        }
    });
    pauseModels();
}

// Agregar evento de desplazamiento para cargar modelos 3D cuando sean visibles
window.addEventListener('scroll', handleScroll);
// También cargar modelos 3D cuando la página se carga inicialmente
window.addEventListener('load', handleScroll);
