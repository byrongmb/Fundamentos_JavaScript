var contador = 0

const estaLLoviendo = () => Math.random() < 0.25

do{
  contador++
} while(!estaLLoviendo())

if(contador === 1){
  console.log(`Fui a ver si estaba lloviendo una vez`)
}else{
  console.log(`Fui a ver si estaba lloviendo ${contador} veces`)
}
