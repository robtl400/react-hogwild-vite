import React from "react";

function FilterSort({ filterGreased, onFilterChange, sortBy, onSortChange }) {
  return (
    <div className="ui form" style={{ margin: "20px" }}>
      <div className="fields">
        <div className="field">
          <div className="ui checkbox">
            <input
              type="checkbox"
              id="greased-filter"
              checked={filterGreased}
              onChange={(e) => onFilterChange(e.target.checked)}
            />
            <label htmlFor="greased-filter">Greased Pigs Only?</label>
          </div>
        </div>
        <div className="field">
          <label htmlFor="sort-select">Sort by:</label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
          >
            <option value="">None</option>
            <option value="name">Name</option>
            <option value="weight">Weight</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FilterSort;
