const byron = {
    nombre : 'byron',
    apellido : 'gamboa',
    edad : 21
}


// const cumpleaños = (persona) => persona.edad++   

const cumpleaños = persona => ({
    ...persona,
    edad: persona.edad + 1
})