import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")

  const handleFilterChange = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(r => r.json())
    .then(data => setPokemon(data))
    // return () => {
    //   cleanup
    // }
  }, [])

  const addPokemon = (newPokemon) => {
    const dataToSend = {...newPokemon, sprites: {front: newPokemon.frontUrl, back: newPokemon.backUrl}}
    delete dataToSend.frontUrl
    delete dataToSend.backUrl
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }, 
      body: JSON.stringify(dataToSend)
    }

    fetch('http://localhost:3001/pokemon', configObj)
    .then(r => r.json())
    .then(data => setPokemon(p => [...p, data])) 
  }

  const filterPokemon = () => {
    return pokemon.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon} />
      <br />
      <Search handleFilterChange={handleFilterChange} filter={search}/>
      <br />
      <PokemonCollection pokemon={filterPokemon()} />
    </Container>
  );
}

export default PokemonPage;
