/*No existe la herencia como tal en JS, si podemos aplicar una herencia prototipal.
todos los prototipos son hijos del prototipo object, por lo que si nosotros creamos un prototipo que no reconoce
un metodo o atributo, va a ir a buscar a su prototipo padre o superior, y asi hasta que encuentre o no 
lo que le pedimos.*/

//esta es la funcion para crear un prototipo de clase persona
function persona(nombre, apellido, altura) {
    //this hace referencia al atributo que se creara en el momento de llamar a la funcion, y le paso como valor lo que recibo como parametro
    //propiedades    
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
    //metodo saludar
    this.saludar = function() {console.log(`Hola! soy ${this.nombre}${this.apellido}`)}
    
}
//añadimos un metodo mas al objeto mediante prototype
persona.prototype.esAlto = function() {
   
    if (VALIDARALTURA(this)) {
        console.log(`${this.nombre} es alto`);

    } else {
        console.log(`${this.nombre} NO es alto`);
    }
}
//definimos la constante de altura para comparar
const ALTURA = 1.8;
//definimos la funcion de validacion para la altura
const VALIDARALTURA = persona => persona.altura > 1.8;
//creamos las personas
var cristian = new persona("Cristian","Bonomo",1.7);
var julian = new persona("Julian","Perez",1.9);
//llamamos al metodo


//vamos a crear un nuevo subtipo de persona, un desarrollador

function heredaDe(prototipoHijo, prototipoPadre) {
    //creamos una funcion vacia, para luego asignarle el valor de prototipo del padre
var fn = function(){};
fn.prototype = prototipoPadre.prototype;
//asignamos al hijo el prototipo de la fn vacia (que antes le asignamos el valor de prototype del padre)
prototipoHijo.prototype = new fn;
//asignamos al prototipo hijo el constructor correspondiente a el mismo, sino todavia va a apuntar al 
//constructor del prototipo padre
prototipoHijo.prototype.constructor = prototipoHijo;
}

function desarrollador(nombre,apellido,altura) {
    this.nombre = nombre;
    this.apellido = apellido;   
    this.altura = altura;
}
heredaDe(desarrollador,persona);

desarrollador.prototype.saludar = function() {
    console.log(`Hola, me llamo ${this.nombre}${this.apellido} y soy desarrollador`);
}