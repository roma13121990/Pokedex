let WebApi = {
    getListOfPokemon() {
        return fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    },

    getEachPokemon(id) {
       return fetch('https://pokeapi.co/api/v2/pokemon/'+id)
    }
}

export default WebApi;