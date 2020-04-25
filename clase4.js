var nombre = 'Nelly';
var edad = 22;

function imprimir(nombre, edad) {
    console.log(`${this.nombre} tiene ${this.edad} años`);    
}

imprimir(nombre,edad);