import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")

 useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(r => r.json())
    .then(data => setPokemon(data))

 }, [])

 const handleChange = (e) =>{
   // update the setSearch
   setSearch(e.target.value)
 }

 const displayedPokemon = () => {
  if (search === ""){
    return pokemon 
  }
   return pokemon.filter(p => p.name.includes(search.toLowerCase()))
 }

 const addNewPokemon = (pokemonData) => {
   const dataToSend = {...pokemonData, sprites: {front: pokemonData.frontUrl, back: pokemonData.backUrl}}
   delete dataToSend.frontUrl
   delete dataToSend.backUrl

   const configObj = {
     method: 'POST',
     headers: {
       "Content-Type": "application/json"
     },
     body: JSON.stringify(dataToSend)
   }

   fetch('http://localhost:3001/pokemon', configObj)
   .then(r => r.json())
    .then(data => setPokemon(mUV => [...mUV, data]))

 }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPokemon={addNewPokemon}/>
      <br />
      <Search search={search} handleChange={handleChange}/>
      <br />
      <PokemonCollection pokemon={displayedPokemon()} />
    </Container>
  );
}

export default PokemonPage;
