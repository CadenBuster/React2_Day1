import { useEffect, useState, FormEvent } from "react";

interface Pokemon {
  id: number;
  name: string;
  img: string;
  abilities: string[];
}

const Pokemon = () => {
  const [pokeName, setPokeName] = useState({
    name: "",
  });

  const [pokeData, setPokeData] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setPokeData(pokeName.name);
  };

  const [pokemon, setPokemon] = useState<Pokemon>({
    id: 0,
    name: "",
    img: "",
    abilities: [],
  });

  useEffect(() => {
    if (pokeData !== "") {
      const getPokemon = async () => {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokeData}`
        );
        const data = await response.json();
        setPokemon({
          id: data.id,
          name: data.name,
          img: data.sprites.front_default,
          abilities: [
            data.abilities[0].ability.name,
            data.abilities[1].ability.name,
          ],
        });
      };
      getPokemon();
    }
  }, [pokeData]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemonForm">Enter a Pokemon</label>
        <input
          id="pokemonForm"
          onChange={(event) => {
            setPokeName({ ...pokeName, name: event.target.value });
          }}
          value={pokeName.name}
        />
        <button type="submit">Search</button>
      </form>

      <div className="pokecard">
        <div className="poketitle">
          <p>{pokemon.name}</p>
          <p>#{pokemon.id}</p>
        </div>
        <img src={pokemon.img} />
        <p>Ability: {pokemon.abilities[0]}</p>
        <p>Abillity: {pokemon.abilities[1]}</p>
      </div>
    </>
  );
};

export default Pokemon;
