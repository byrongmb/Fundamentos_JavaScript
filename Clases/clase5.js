var nombre = 'Nelly';

function imprimirNombreEnMayuscula(nombre) {
   console.log(`${this.nombre.toLocaleUpperCase()}`)
}

imprimirNombreEnMayuscula(nombre);