import React, {useState}  from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon: {name, hp, sprites: {front, back}}}) {
  const [showFront, setShowFront] = useState(true)
  return (
    <Card>
      <div onClick={()=> setShowFront(f => !f)}>
        <div className="image">
          <img alt={`${name} ${showFront ? 'front' : 'back'}`} src={showFront ? front : back} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
