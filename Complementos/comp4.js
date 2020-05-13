function generarSaludo(saludo) {
    return (nombre) => console.log(`Hola ${nombre} ${saludo}`)
}

const saludoMexicano = generarSaludo('güey')

saludoMexicano('byron')