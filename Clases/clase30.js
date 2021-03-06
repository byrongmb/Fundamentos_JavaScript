const API_URL = 'https://rickandmortyapi.com/api/'
const PEOPLE_URL = 'character/:id'
const opts = { crossDomain: true }

const onPeopleResponse = function(person) {
    console.log(`Hola, soy ${person.name}`)  
}

function obtenerPersonaje(id, callback){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url, opts, onPeopleResponse)
    if (callback){
        callback()        
    }
}

obtenerPersonaje(1,function() {
    obtenerPersonaje(2,function() {
        obtenerPersonaje(3,function () {
            obtenerPersonaje(5,function(){
                obtenerPersonaje(6,function (){
                    obtenerPersonaje(7)                    
                })
            })
        })
    })
})