var gregorio = {
   nombre: 'Vides',
   apellido: 'Gregorio',
   edad: 36
 }
 
 var boga = {
   nombre: 'Gonzalez',
   apellido: 'Ricardo',
   edad: 36
 }
 
 function imprimirNombre({ nombre }){
   console.log(nombre.toUpperCase());
 }
 
 imprimirNombre(gregorio);//Funciona
 imprimirNombre({ nombre: 'Pepito' });//Funciona
 imprimirNombre({ nombre: 'sacha', apellido: 'wilde', edad: 25 });//Funciona
 
 //Creo un objeto con la cantidad de atributos que quiera en la asignacion de parametros
 //lo unico que tengo que respetar es que en el objeto vaya el atributo que trabaja dentro
 imprimirNombre({ nombre: 'sonya', apellido: 'wilde', edad: 25, altura: 1.90 });//FUNCIONA!!!
 
 imprimirNombre();//ERROR
 imprimirNombre({ apellido: 'Pepito' });//ERROR