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

obtenerPersonaje(1)
    .then((personaje) =>{
        console.log(`El personaje 1, es ${personaje.name}`)
    })
    .catch((id)=>{
        console.log(`Hubo un error al obtener el personaje ${id}`)
    })