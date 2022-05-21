// class Persona{

//     constructor(nombre,edad){
//         this.nombre = nombre;
//         this.edad = edad;

//     }
//     detallePersona(){
//         console.log(`Nombre: ${this.nombre}\n Edad: ${this.edad}`);

//     }
// }


// class Empleado extends Persona{
// sueldo;
//     constructor(nombre, edad, sueldo){
//         super(nombre,edad);
//         this.sueldo = sueldo;
//     }
// }

// const emp = new Empleado("francisco",32,500);
// console.log(emp);


//METODO DE ENCAPSULADO PARA PROPIEDAD PRIVADA

class Persona{

    #nombre;
    #edad;
    constructor(nombre,edad){
        this.#nombre = nombre;
        this.#edad = edad;
        this.#metodoPrivado;
    }

    set setNombre (nombre){
        this.#nombre = nombre;
    }

    get getNombre(){
        return this.#nombre;
    }

    set setEdad (edad){
        this.#nombre = edad;
    }

    get getEdad(){
        return this.#edad;
    }

    #metodoPrivado(){
        console.log("Soy privado");
    }
}

const perso21 = new Persona("Juan", 45);

console.log(perso21.getNombre);

perso21.setNombre = "Ludovico";

console.log(perso21.getNombre);


