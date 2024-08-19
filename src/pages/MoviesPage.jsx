import { useState } from "react";
import { useLocation } from "react-router-dom";
import { searchMovies } from "../services/api";
import MovieList from "../components/MovieList/MovieList";

function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const handleSearch = () => {
    searchMovies(query).then(setMovies);
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
      />
      <button onClick={handleSearch}>Search</button>
      <MovieList movies={movies} location={location} />
    </div>
  );
}

export default MoviesPage;
