import React, { useState } from "react";
import { compare } from "./../helpers/helper";
import { TableContent } from "./../components/tableContent";
import { getMoviesFromServer } from "./../services/moviesServices";
import { FilterComponent } from "./List/filterComponent";
import "./moviesContainer.css";
export const MoviesContainer = (props) => {
  let moviesFromDB = getMoviesFromServer();

  const [movies, setMovies] = useState(
    moviesFromDB.sort((a, b) => compare(a, b))
  );
  const [filter, setFilter] = useState("All");
  const handleDelete = (id) => {
    let newData = movies.filter((m) => m.id !== id);
    newData = newData.sort((a, b) => compare(a, b));
    setMovies(newData);
  };
  const handleIsLike = (id, isLike) => {
    //get movie by id
    let movie = movies.find((m) => m.id === id);
    //check if movie exist not equal to null or undefined
    if (movie) {
      //change the status of isLike
      movie.isLike = isLike;
    }

    let moviesArrayWithoutTheEditedOne = movies.filter((m) => m.id !== id);

    let newData = [...moviesArrayWithoutTheEditedOne, movie].sort((a, b) =>
      compare(a, b)
    );
    setMovies(newData);
  };
  const handleFilter = (chosenFilter) => {
    if (chosenFilter === "All") {
      setMovies(moviesFromDB);
    } else {
      setMovies(moviesFromDB.filter((m) => m.genre === chosenFilter));
    }
    setFilter(chosenFilter);
  };

  return (
    <div>
      <h1>The list has {movies.length} movies</h1>
      <div className="container">
        <FilterComponent
          handleFilter={handleFilter}
          filter={filter}
        ></FilterComponent>
        <TableContent
          moviesArr={movies}
          handleLike={handleIsLike}
          deleteMovie={handleDelete}
          handleFilter={setFilter}
        ></TableContent>
      </div>
    </div>
  );
};
