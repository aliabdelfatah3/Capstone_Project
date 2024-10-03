import axios from "axios";
import { API_KEY, BASE_URL } from "../constants/enviromentVariables";

const reqBody = { params: { api_key: API_KEY } };
export const fetchMoviesList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/discover/movie`, reqBody);

    return response.data.results;
  } catch (error) {
    console.error("Error Fetching", error);
    throw error;
  }
};
export const fetchMoviesDetails = async (movie_id) => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${movie_id}`, reqBody);
    return response.data;
  } catch (error) {
    console.error("Error Fetching", error);
    throw error;
  }
};

export const fetchMovieCasts = async (movie_id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${movie_id}/credits`,
      reqBody
    );
    return response.data;
  } catch (error) {
    console.error("Error Fetching", error);
    throw error;
  }
};
