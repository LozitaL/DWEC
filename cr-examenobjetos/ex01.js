
class PokemonNoEncontrado extends Error{
    constructor(message){
        super(message);
        this.PokemonNoEncontrado = "El nombre del pokemon no se encuentra en la pokedex";
        this.NoExistePokemonDeTipo = "El tipo de esos/estos pokemons no se encuentra en la pokedex";
    }
}



fetch("./pokedex.json")
.then(response => {
   return response.json();
})
.then(jsondata => {

    function BuscarPokemon(nombre){
        pokemon = jsondata.find(pokemon => pokemon.name.english === nombre)
            if(!pokemon) throw new PokemonNoEncontrado().PokemonNoEncontrado;
            else return pokemon
        } 
    console.log(BuscarPokemon("Eevee"));

    function MostrarPokemonTipo(tipo){
        //pokemon = jsondata.find(pokemon => pokemon.type[0] === tipo || pokemon.type[1] === tipo);
        let pokemon1 = [];
        jsondata.forEach(pokemons => {
            if(pokemons.type[1] === tipo || pokemons.type[0] ===tipo){
                pokemon1.push(pokemons.name.english);
            }
        });
        if(pokemon1.length === 0) throw new PokemonNoEncontrado().NoExistePokemonDeTipo
        else return pokemon1;
        
    }
    console.log(MostrarPokemonTipo("Poison"));
})
.catch(error => console.error("Error al cargar el archivo:", error));




