function Persona(nombre, apellido, altura) {
  this.nombre = nombre
  this.apellido = apellido
  this.altura = altura
}
Persona.prototype.soyAlto = function(){
  if(this.altura > 1.8){
    console.log(`Soy alto, mido ${this.altura}`)
  }else{
    console.log(`No soy alto, mido ${this.altura}`)
  }
}
var byron = new Persona('Byron', 'Gamboa', 1.75)

byron.soyAlto()
