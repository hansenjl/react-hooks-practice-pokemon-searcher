import React, {useState}  from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon: {id, name, hp, sprites: {back, front}}}) {
  const [showFront, setShowFront] = useState(true)

  const handleClick = (e) => {
    setShowFront(mUV => !mUV) //best practice 
    // setShowFront(!showFront) 
  }

  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          <img alt="oh no!"  src={showFront ? front : back}/>
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
