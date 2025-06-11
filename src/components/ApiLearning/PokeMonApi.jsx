import "./PokemonApi.css";
import { useEffect, useState } from "react";

export const PokemonApi = () => {
    const [apiData, setApiData] = useState(null);
    const API = "https://pokeapi.co/api/v2/pokemon/squirtle";

    const fetchPokemon = () => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => setApiData(data))
            .catch((error) => console.log("Error fetching Pokémon data:", error));
    };

    useEffect(() => {
        fetchPokemon();
    }, []);

    if (!apiData) {
        return <h2>Loading...</h2>; // Optional loading message
    }

    return (
        <div className="container effect-container">
            <header>
                <h1>Let's Catch Pokémon</h1>
            </header>
            <ul className="card-demo">
                <li className="pokemon-card">
                    <figure>
                        <img
                            src={apiData.sprites?.other?.dream_world?.front_default}
                            alt={apiData.name}
                            className="pokemon-image"
                        />
                    </figure>
                    <h1>{apiData.name}</h1>
                </li>
            </ul>
        </div>
    );
};
