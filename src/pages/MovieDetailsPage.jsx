import { useEffect, useState, useRef } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { requestMovieDetails } from "../services/api";
import MovieCast from "../components/MovieCast/MovieCast";
import MovieReviews from "../components/MovieReviews/MovieReviews";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  // Використовуємо useRef для збереження backLinkLocation
  const backLinkLocationRef = useRef(location.state?.from || "/movies");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await requestMovieDetails(movieId);
        setMovie(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (error) return <div>Error: {error}</div>;
  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <Link to={backLinkLocationRef.current}>⬅ Go back</Link>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <nav>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
