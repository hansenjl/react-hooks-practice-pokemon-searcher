import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {

  return (
    <div>
      <h1>Hello From Pokemon Collection</h1>
       <Card.Group itemsPerRow={6}>
        {pokemon.map(p => <PokemonCard key={p.id} pokemon={p}/>)}
      </Card.Group>
    </div>
   
  );
}

export default PokemonCollection;
