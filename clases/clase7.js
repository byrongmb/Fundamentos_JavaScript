var byron ={
  nombre: 'Byron',
  apellido: 'Gamboa',
  edad: 22
}

function imprimir({nombre,edad}) {
  console.log(`Hola, me llamo ${nombre} y tengo ${edad} años`);  
}

imprimir(byron);