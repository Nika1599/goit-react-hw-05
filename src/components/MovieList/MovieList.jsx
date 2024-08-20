import { Link, useLocation } from "react-router-dom";

function MovieList({ movies }) {
  const location = useLocation();

  if (!movies || movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location.pathname }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
