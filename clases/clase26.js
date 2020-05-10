class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn){
        var { nombre, apellido } = this
        console.log(`Hola soy ${nombre} ${apellido}`)
        if(fn){
            fn(nombre, apellido, false)
        }
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre,apellido,altura)
    }
    saludar(fn){
        var { nombre, apellido } = this
        console.log(`Hola soy ${nombre} ${apellido} soy Desarrollador`)
        if(fn){
            fn(nombre, apellido, true)
        }
    }
}

function respondeSaludo(nombre, apellido, esDev) {
    console.log(`Buenos dias ${nombre} ${apellido}`)
    if (esDev) {
        console.log(`Wow eres Desarrollador`)       
    }
}



var byron = new Desarrollador('Byron', 'Gamboa', 1.85)
byron.saludar(respondeSaludo)
