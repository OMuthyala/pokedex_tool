import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Main() {
    const [pokemonCards, setPokemonCards] = useState(null)

    const getAPIData = async () => {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"; 
        const response = await fetch(url);
        const responseJSON = await response.json();

        const responsePokemon = responseJSON.results.map((item) => item);

        const cards = responsePokemon.map((item) => <Card pokemon={item.name} url={item.url}/>)

        setPokemonCards(cards)
    }

    useEffect(() => {
        getAPIData()
    }, [])

    return (
        <div >
            { pokemonCards }
        </div>
    )
}