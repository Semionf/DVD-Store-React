const moviesDB = [
  {
    id: 1,
    title: "SpiderMan",
    genre: "Action",
    rate: 10,
    stock: 5,
    isLike: false,
  },
  {
    id: 2,
    title: "BatMan",
    genre: "Action",
    rate: 6,
    stock: 10,
    isLike: false,
  },
  {
    id: 3,
    title: "IronMan",
    genre: "Action",
    rate: 5,
    stock: 4,
    isLike: false,
  },
  { id: 4, title: "Hulk", genre: "Action", rate: 10, stock: 2, isLike: false },
  { id: 5, title: "Titanic", genre: "Drama", rate: 3, stock: 4, isLike: false },
  {
    id: 6,
    title: "50 shades of gray",
    genre: "Drama",
    rate: 8,
    stock: 4,
    isLike: false,
  },
  {
    id: 7,
    title: "Simpsons",
    genre: "Comedy",
    rate: 3,
    stock: 4,
    isLike: false,
  },
];

export const getMoviesFromServer = () => {
  return moviesDB;
};
