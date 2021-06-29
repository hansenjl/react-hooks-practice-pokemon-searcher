import React from "react";

function Search({handleFilterChange, filter}) {
 
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleFilterChange} value={filter} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
