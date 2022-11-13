import React from "react";
import "./tableContent.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
export const TableContent = ({
  moviesArr,
  handleLike,
  deleteMovie,
  filter,
}) => {
  const filterClass = (movieGenre) => {
    if (movieGenre === "All") {
      if (filter === "All" || filter === undefined) {
      }
    }
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {moviesArr &&
            moviesArr.map((m) => {
              return (
                <tr>
                  <th scope="row">{m.id}</th>
                  <td>{m.title}</td>
                  <td>{m.genre}</td>
                  <td>{m.stock}</td>
                  <td>{m.rate}</td>
                  <td>
                    <td className="likeIcon">
                      {m.isLike ? (
                        <div
                          onClick={() => {
                            handleLike(m.id, false);
                          }}
                        >
                          <FavoriteIcon />
                        </div>
                      ) : (
                        <div
                          onClick={() => {
                            handleLike(m.id, true);
                          }}
                        >
                          <FavoriteBorderIcon />
                        </div>
                      )}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                          deleteMovie(m.id);
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
