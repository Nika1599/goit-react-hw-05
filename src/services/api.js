import axios from "axios";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MjkyMzBhOWU3NGM5ZTc1MTJkNTliNzVkYzM0ZWY5YyIsIm5iZiI6MTcyNDAwMDEwOS41MDUwOTksInN1YiI6IjY2YzIyNWY4ZTUwNTA5NDZkMTFhOGNlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z9kryRK2ydVdI8NUUkbA8CZfJeaSUzSKqh0ZkbBQ09w ";

const BASE_URL = "https://api.themoviedb.org/3";

const headers = {
  Authorization: `Bearer ${API_TOKEN}`,
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
    headers,
  });
  return response.data.results;
};
