const DIAS_DEL_ANO = 365
const INCREMENTO_DE_PESO = 0.2

var sacha = {
  nombre : 'Sacha',
  edad : 27,
  peso : 75
}




console.log(`Al inicio del año, ${sacha.nombre} tiene ${sacha.peso.toFixed(2)}Kg`)

const aumentarDePeso = persona => persona.peso += INCREMENTO_DE_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_DE_PESO


for (var i = 1; i <= DIAS_DEL_ANO; i++) {
  var ramdom = Math.random();
  if (ramdom <= 0.25) {
    aumentarDePeso(sacha)    
  } else if(ramdom <= 0.5) {
    adelgazar(sacha)
  }
}

console.log(`Al final del año, ${sacha.nombre} tiene ${sacha.peso.toFixed(2)}Kg`)




