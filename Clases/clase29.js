const API_URL = 'https://rickandmortyapi.com/api/'
const PEOPLE_URL = 'character/:id'
const opts = { crossDomain: true }

const onPeopleResponse = function(person) {
    console.log(`Hola, soy ${person.name}`)  
}

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    $.get(url, opts, onPeopleResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
