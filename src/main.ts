const estiloNombre = "font-weight:bold; font-size:14px; color:green";

interface Grupo {
    nombre: string;
    añoNacimiento: number;
    activo: boolean;
    genero: string;
};

const grupoA : Grupo = {
    nombre: "%cThe Beatles",
    añoNacimiento: 1960,
    activo: true,
    genero: "🎵 Pop Rock",
};

const grupoB : Grupo = {
    nombre: "%cQueen",
    añoNacimiento: 1970,
    activo: false,
    genero: "🎸 Rock",
};

const grupoC : Grupo = {
    nombre: "%cAC DC",
    añoNacimiento: 1973,
    activo: true,
    genero:"🤘 Hard Rock",
};

const grupoD : Grupo = {
    nombre: "%cLudwig van Beethoven",
    añoNacimiento: 1770,
    activo: false,
    genero: "🎼 Clásica",
};

const grupoE : Grupo = {
    nombre: "%cThe Rolling Stones",
    añoNacimiento: 1962,
    activo: true,
    genero: "🎸 Rock",
};

console.log(grupoA.nombre, estiloNombre, grupoA.añoNacimiento, grupoA.activo, grupoA.genero);

console.log(grupoB.nombre, estiloNombre, grupoB.añoNacimiento, grupoB.activo, grupoB.genero);

console.log(grupoC.nombre, estiloNombre, grupoC.añoNacimiento, grupoC.activo, grupoC.genero);

console.log(grupoD.nombre, estiloNombre, grupoD.añoNacimiento, grupoD.activo, grupoD.genero);

console.log(grupoE.nombre, estiloNombre, grupoE.añoNacimiento, grupoE.activo, grupoE.genero);