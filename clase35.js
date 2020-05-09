const API_URL = 'https://rickandmortyapi.com/api/'
const PEOPLE_URL = 'character/:id'
const opts = { crossDomain: true }


function obtenerPersonaje(id){
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
        $
            .get(url, opts,(data) => resolve(data))
            .fail(() => reject(id))
        }) 
}

const onError = id => {
    console.log(`Hubo un error al obtener el personaje ${id}`)    
}

async function obtenerPersonajes() {
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map(id => obtenerPersonaje(id))
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)        
    } catch (id) {
        onError(id)        
    }   
}

obtenerPersonajes()