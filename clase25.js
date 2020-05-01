//ECMAScript es el estandar de lenguaje para JS.
/*aunque vamos a usar la palabra class, no debemos olvidar que todo es un prototipo*/

class Persona{
    //metodo constructor de la clase Persona
    constructor(nombre, apellido, altura) {
        //propiedades    
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    //metodos
    saludar() {console.log(`Hola! soy ${this.nombre}${this.apellido}`)}
    esAlto() { returnthis.altura > ALTURA;}
}
//definimos la constante de altura para comparar
const ALTURA = 1.8;
//usamos la palabra extends para indicar que Desarrollador hereda de Persona
class DesarrolladorextendsPersona{
    //metodo constructor de Desarrollador
 constructor(nombre,apellido,altura,edad) {
     //usamos la palabra super para llamar al constructor de la clase padre, y le pasamos los parametros
     super(nombre,apellido,altura);
     //si quiero agregar propiedades que no estan en el padre, las declaro aca con this.
     this.edad = edad;
}
//pisamos el metodo saludar de Persona.
saludar() {console.log(`Hola, me llamo ${this.nombre}${this.apellido} y soy desarrollador`)};
}