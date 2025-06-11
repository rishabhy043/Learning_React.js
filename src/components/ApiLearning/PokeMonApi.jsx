import { useEffect, useState } from "react"
import "./pokemon.css"

export const PokemonApi = () => {
    const [pokemon, setpokemon] = useState();

    const API = "https://pokeapi.co/api/v2/pokemon/pikachu"

    const fetchPokemon = () => {
        fetch(API)
            .then((res) => res.json)
            .then((data) => setpokemon(data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        fetchPokemon();
    }, [])
    return (<>
        <div className="container effect-container">
            <header>
                <h1> Lets Catch Pokémon</h1>
            </header>
            <ul className="card-demo">
                <li className="pokemon-card">
                    <figure>
                        <img
                            src={pokemon.sprites.other.dream_world.front_default}
                            alt={pokemon.name}
                            className="pokemon-image"
                        />
                    </figure>
                    <h1>{pokemon.name}</h1>
                    <div className="grid-three-cols">
                        <p className="pokemon-info">
                            Height: <span> {pokemon.height} </span>
                        </p>
                        <p className="pokemon-info">
                            Weight: <span> {pokemon.weight}</span>
                        </p>
                        <p className="pokemon-info">
                            speed: <span>{pokemon.stats[5].base_stat}</span>
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </>)
}