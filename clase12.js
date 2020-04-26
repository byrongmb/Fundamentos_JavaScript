const MAYORIA_DE_EDAD = 18;

var byron = {
  nombre: 'Byron',
  edad: 10,
  ingeniero: true,
  estudiante: true,
  concinero: false
}


function esMayorDeEdad({edad}) {
  return edad >= MAYORIA_DE_EDAD;  
}

const esMenorDeEdad = ({edad}) => edad < MAYORIA_DE_EDAD;

function imprimirSiEsMenorDeEdad(persona) {
  if(esMenorDeEdad(persona)){
    console.log(`${persona.nombre} es menor de edad`);
  }else{
    console.log(`${persona.nombre} es mayor de edad`);
  }  
}


function imprimirSiEsMayorDeEdad(persona) {
  if(esMayorDeEdad){
    console.log(`${persona.nombre} es mayor de edad`);
  }else{
    console.log(`${persona.nombre} es menor de edad`);
  }
}

//imprimirSiEsMayorDeEdad(byron);
imprimirSiEsMenorDeEdad(byron);

