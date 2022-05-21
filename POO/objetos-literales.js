// const persona = {
//     nombre: "Fran",
//     apellido: "Drube",
//     edad: 29,

//     nombreCompleto(){
//         return `${this.nombre} ${this.apellido}`
//     },

//     direccion: {
//         zip: 5000,
//         calle: "Independencia",
//         numero: 916
//     },
// }

// console.log(persona.nombreCompleto());


class Persona{

    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;

    }
    imprimir(){
        console.log(this.nombre,this.edad);
    }
}

const Persona1 = new Persona("Francisco", 29);
const Persona2 = new Persona("asd", 24);

console.log(Persona1);
console.log(Persona2);
Persona1.imprimir();
Persona2.imprimir();