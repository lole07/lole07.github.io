const index = document.getElementById("inicio");
const aboutMe = document.getElementById("sobre-mi");
const myJob = document.getElementById("mi-trabajo");
const abilities = document.getElementById("habilidades");
const experience = document.getElementById("experiencia");
const contact = document.getElementById("contacto");

const mainMenu = {
    index,
    aboutMe,
    myJob,
    abilities,
    experience,
    contact
};

const switchFunction = (opName) => {
    for(option of Object.keys(mainMenu)){
        if(opName != option){
            mainMenu[option].style.display = "none";
        };
        mainMenu[opName].style.display = "block"
    };
};