import React from "react";
import useFetchPokemos from "../hooks/useFetchPokemon";
import PokemCard from "./PokemCard";
import Loader from "./Loader";

export default function PokemonList() {
  const {
    data: pokemons,
    loading,
    error,
  } = useFetchPokemos("https://pokeapi.co/api/v2/pokemon?limit=40");

  if (loading && !pokemons.length) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemCard
          key={pokemon.name}
          name={pokemon.name}
          url={`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`}
        />
      ))}
    </div>
  );
}
