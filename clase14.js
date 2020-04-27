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
const comeMucho = () => Math.random() < 0.3
const haceEjercicio = () => Math.random() < 0.4


const META = sacha.peso - 3
var dias = 0;

while (sacha.peso > META) {
  if(comeMucho()){
    aumentarDePeso(sacha)
  }else if(haceEjercicio){
    adelgazar(sacha)
  }
  dias++
}

console.log(`Han pasado ${dias} para que ${sacha.nombre} adelgace 3kg`)




