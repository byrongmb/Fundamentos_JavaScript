const API_URL = 'https://rickandmortyapi.com/api/'
const PEOPLE_URL = 'character/:id'
const opts = { crossDomain: true }


function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url, opts, callback)
    .fail(function(){
            console.log(`Hubo un error en la obtencion de datos`)
    })
}

obtenerPersonaje(1,function(person){
    console.log(`Hola, soy ${person.name}`)

    obtenerPersonaje(2,function(person){
        console.log(`Hola, soy ${person.name}`)  

        obtenerPersonaje(3,function(person){
            console.log(`Hola, soy ${person.name}`)  

            obtenerPersonaje(5,function(person){
                console.log(`Hola, soy ${person.name}`)  

                obtenerPersonaje(6,function(person){
                    console.log(`Hola, soy ${person.name}`)  

                    obtenerPersonaje(7, function(person){
                        console.log(`Hola, soy ${person.name}`)
                        
                    })                    
                })
            })
        })
    })
})