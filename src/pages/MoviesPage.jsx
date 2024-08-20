import { useState, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { searchMovies } from "../services/api";
import MovieList from "../components/MovieList/MovieList";

function MoviesPage() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const queryTerm = searchParams.get("query") || "";

  useEffect(() => {
    const fetchMoviesBySearchValue = async () => {
      try {
        if (queryTerm) {
          const data = await searchMovies(queryTerm);
          setMovies(data);
        }
      } catch (err) {
        setError(err.message);
      }
    };
    fetchMoviesBySearchValue();
  }, [queryTerm]);

  const handleSearch = () => {
    setSearchParams({ query: query });
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
      {error && <p>Error: {error}</p>}
      <MovieList movies={movies} location={location} />
    </div>
  );
}

export default MoviesPage;
