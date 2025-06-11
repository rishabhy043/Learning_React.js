import { useEffect, useState } from "react"
import "./pokemon.css"

export const PokemonApi = () =>{
    const[pokemon, setpokemon]= useState();

    const API = "https://pokeapi.co/api/v2/pokemon/pikachu"

    const fetchPokemon = () =>{
          fetch(API)
        .then((res) => res.json)
        .then((data) => setpokemon(data))
        .catch((error) =>console.log(error))
    }

    useEffect(() => {
      fetchPokemon();
    },[])
    return(<>
    <div className="container effect-container">
        <ul>

        </ul>
    </div>
    </>)
}