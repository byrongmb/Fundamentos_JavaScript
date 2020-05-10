function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}
Persona.prototype.soyAlto = () => this.altura > 1.8

//this en las arrow fuction es window
var byron = new Persona('Byron', 'Gamboa', 1.75)

byron.soyAlto()
