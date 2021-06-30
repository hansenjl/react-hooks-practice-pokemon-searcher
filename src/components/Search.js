import React from "react";

function Search({search, handleChange, sortValue, handleSortChange }) {
  return (
    <div className="ui search">
      <select value={sortValue} onChange={handleSortChange}>
        <option value="none">Choose what to sort by</option>
        <option value="hphigh">hp high to low</option>
        <option value="hplow">hp low to high</option>
        <option value="nameAZ">name A-Z</option>
        <option value="nameZA">name Z-A</option>
      </select>
      <div className="ui icon input">
        <input className="prompt" value={search} onChange={handleChange} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
