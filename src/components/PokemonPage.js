import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")
  const [sortValue, setSortValue] = useState("none")

  const handleSortChange = (e) => {
    setSortValue(e.target.value)
    // YOU CANNOT ACTUALLY DO THE SORT HERE!!!!
  }

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
  if (search === "" && sortValue === "none"){
    return pokemon 
  }
  // first need to filter 
  const filteredPokemon = pokemon.filter(p => p.name.includes(search.toLowerCase()))
  // use the result to sort 
  if(sortValue === "hplow"){
    return filteredPokemon.sort((pokemonA,pokemonB) => {
      return pokemonA.hp - pokemonB.hp;
    })
  } else if(sortValue === "hphigh"){
    return filteredPokemon.sort((pokemonA,pokemonB) => {
      return pokemonB.hp - pokemonA.hp;
    })
  } else if(sortValue === "nameAZ"){
    return filteredPokemon.sort((pokemonA,pokemonB) => {
      return pokemonA.name <= pokemonB.name ? -1 : 1;
    })
  }else if(sortValue === "nameZA"){
    return filteredPokemon.sort((pokemonA,pokemonB) => {
      return pokemonB.name <= pokemonA.name ? -1 : 1;
    })
  } else {
    return filteredPokemon
  }
  
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
      <Search search={search} handleChange={handleChange} sortValue={sortValue} handleSortChange={handleSortChange}/>
      <br />
      <PokemonCollection pokemon={displayedPokemon()} />
    </Container>
  );
}

export default PokemonPage;
