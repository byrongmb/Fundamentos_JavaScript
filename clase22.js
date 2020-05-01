function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}
Persona.prototype.soyAlto = () => altura > 1.8

var byron = new Persona('Byron', 'Gamboa', 1.75)

byron.soyAlto()
