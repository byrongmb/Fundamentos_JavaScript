var byron ={
  nombre: 'Byron',
  apellido: 'Gamboa',
  edad: 22
}

function cumpelanos(persona) {
  return{
    ... persona,
    edad: persona.edad + 1
  }
}

var byronMasViejo = cumpelanos(byron);
