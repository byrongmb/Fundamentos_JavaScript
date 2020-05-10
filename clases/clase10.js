var byron = {
  nombre: 'Byron',
  edad: 22,
  ingeniero: true,
  estudiante: true,
  concinero: false
}


function imprimirSiEsMayorDeEdad(persona) {
  if(persona.edad >= 18){
    console.log(`${persona.nombre} es mayor de edad`);
  }else{
    console.log(`${persona.nombre} es menor de edad`);
  }
}

imprimirSiEsMayorDeEdad(byron);