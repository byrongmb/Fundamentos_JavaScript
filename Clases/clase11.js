const MAYORIA_DE_EDAD = 18;

var byron = {
  nombre: 'Byron',
  edad: 22,
  ingeniero: true,
  estudiante: true,
  concinero: false
}


function esMayorDeEdad({edad}) {
  return edad >= MAYORIA_DE_EDAD;  
}


function imprimirSiEsMayorDeEdad(persona) {
  if(esMayorDeEdad){
    console.log(`${persona.nombre} es mayor de edad`);
  }else{
    console.log(`${persona.nombre} es menor de edad`);
  }
}

imprimirSiEsMayorDeEdad(byron);

