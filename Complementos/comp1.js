var jos = {
    nombre:'Josadec',
    apellido:'Pedraza',
    edad: 36
}
const EDAD = 18
//Usando var para declarar variables
functionvar_mayorDeEdad(persona){
  var mensaje //hosting se declara la variable vacia arriba del codigo 
  if(persona.edad >= EDAD){
     mensaje = `${persona.nombre}${persona.apellido} Es Mayor de Edad Tiene: ${persona.edad} años`
  }else{
     mensaje = `${persona.nombre}${persona.apellido} Es Menor de Edad Tiene: ${persona.edad} años`
  }
console.log(mensaje)//termina la variable
}
//Usando let para declarar variables
function let_mayorDeEdad(persona){
  let mensaje_let //en let funciona 
  if(persona.edad >= EDAD){
     mensaje_let = `${persona.nombre}${persona.apellido} Es Mayor de Edad Tiene: ${persona.edad} años`
  }else{
     mensaje_let = `${persona.nombre}${persona.apellido} Es Menor de Edad Tiene: ${persona.edad} años`
  }
  console.log(mensaje_let)
}

//Usando const para declarar variables
function const_mayorDeEdad(persona){
  let mensaje_const
  const MAYORIA_DE_EDAD = 18
  //MAYORIA_DE_EDAD = 21
  if(persona.edad >= MAYORIA_DE_EDAD){
    mensaje_const = `${persona.nombre}${persona.apellido} Es Mayor de Edad Tiene: ${persona.edad} años`
  }else{
    mensaje_const = `${persona.nombre}${persona.apellido} Es Menor de Edad Tiene: ${persona.edad} años`
  }
  console.log(mensaje_const)
}

var_mayorDeEdad(jos)
let_mayorDeEdad(jos)
const_mayorDeEdad(jos)

  for(let i = 0; i < 10; i++){
    console.log(i)
  }
  console.log(`termino el siclo for, el valor de i es ${i}`)



const numeros = [1,2,3,4,5,7] // no se puede hacer modificar el asignar el array a otro valor numeros = [1,2]
numeros.push(8,9,10) //aumentar el Array despues declarado
