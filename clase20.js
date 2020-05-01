var andres = {
  nombre: "andres",
  apellido: "valbuena",
  edad: 34,
  peso: 76,
  altura: 1.86,
  cantidadDeLibro: 100
}
var oscar = {
  nombre: "oscar",
  apellido: "benavides",
  edad: 25,
  peso: 65,
  altura: 1.71,
  cantidadDeLibro: 182
}

var yolanda = {
  nombre: "yolanda",
  apellido: "gonzalez",
  edad: 52,
  peso: 85,
  altura: 1.56,
  cantidadDeLibro: 150
}

var esperanza = {
  nombre: "esperanza",
  apellido: "rodriguez",
  edad: 51,
  peso: 89,
  altura: 1.86,
  cantidadDeLibro: 200
}
var personas = [andres, oscar, yolanda, esperanza];

const reducer = (acum, { cantidadDeLibro }) => acum + cantidadDeLibro
var totalDeLibros = personas.reduce (reducer,0)

console.log(`En total todos tienen ${totalDeLibros} libros`)