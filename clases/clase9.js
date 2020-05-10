var byron = {
  nombre : 'Byron'
}

//Son objectos distintos
var otraPersona = {
  ... byron
}

//Ambos hacen referencia al mismo espacio en memoria
var otraPersona2 = byron;