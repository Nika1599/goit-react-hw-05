import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";

function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(setCast);
  }, [movieId]);

  return (
    <ul>
      {cast.map((actor) => (
        <li key={actor.cast_id}>
          {actor.name} as {actor.character}
        </li>
      ))}
    </ul>
  );
}

export default MovieCast;
