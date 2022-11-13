import React from "react";
import "./filterComponent.css";
export const FilterComponent = ({ handleFilter, filter }) => {
  const showFilter = (clicked) => {
    if (clicked === filter) {
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  };

  return (
    <div className="pageContent">
      <div className="sortCheck">
        <ul className="list-group">
          <li className={showFilter("All")} aria-current="true">
            <button
              className="btn--sort"
              onClick={() => {
                handleFilter("All");
              }}
            >
              All
            </button>
          </li>
          <li className={showFilter("Drama")}>
            <button
              className="btn--sort"
              onClick={() => {
                handleFilter("Drama");
              }}
            >
              Drama
            </button>
          </li>
          <li className={showFilter("Action")}>
            <button
              className="btn--sort"
              onClick={() => {
                handleFilter("Action");
              }}
            >
              Action
            </button>
          </li>
          <li className={showFilter("Comedy")}>
            <button
              className="btn--sort"
              onClick={() => {
                handleFilter("Comedy");
              }}
            >
              Comedy
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
