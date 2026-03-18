import axios from "axios";
import { API_KEY, BASE_URL } from "../constants/enviromentVariables";

/**
 * Request body containing query parameters for API requests.
 * The API key is passed as a parameter.
 */
const reqBody = { params: { api_key: API_KEY } };

/**
 * Fetches a list of movies from the API's "discover/movie" endpoint.
 * @returns {Promise<Array>} A promise that resolves to an array of movie objects.
 * @throws {Error} Throws an error if the API request fails.
 */
export const fetchMoviesList = async (page = 1) => {
  try {
    const params = { api_key: API_KEY, page };
    const response = await axios.get(`${BASE_URL}/discover/movie`, { params });
    return response.data;
  } catch (error) {
    console.error("Error Fetching Movies List", error);
    throw error;
  }
};

/**
 * Fetches the daily trending movies from the API's "trending/movie/day" endpoint.
 * @returns {Promise<Array>} A promise that resolves to an array of trending movie objects.
 * @throws {Error} Throws an error if the API request fails.
 */
export const fetchTrendingMovies = async () => {
  try {
    const params = { api_key: API_KEY };
    const response = await axios.get(`${BASE_URL}/trending/movie/day`, { params });
    // Return only the first 5 trending movies for the hero slider
    return response.data;
  } catch (error) {
    console.error("Error Fetching Trending Movies", error);
    throw error;
  }
};

/**
 * Fetches the top rated movies from the API's "movie/top_rated" endpoint.
 */
export const fetchTopRatedMovies = async () => {
  try {
    const params = { api_key: API_KEY };
    const response = await axios.get(`${BASE_URL}/movie/top_rated`, { params });
    return response.data;
  } catch (error) {
    console.error("Error Fetching Top Rated Movies", error);
    throw error;
  }
};

/**
 * Fetches the upcoming movies from the API's "movie/upcoming" endpoint.
 */
export const fetchUpcomingMovies = async () => {
  try {
    const params = { api_key: API_KEY };
    const response = await axios.get(`${BASE_URL}/movie/upcoming`, { params });
    return response.data;
  } catch (error) {
    console.error("Error Fetching Upcoming Movies", error);
    throw error;
  }
};

/**
 * Fetches detailed information for a specific movie by its ID.
 *
 * @param {number|string} movie_id - The ID of the movie to fetch details for.
 * @returns {Promise<Object>} A promise that resolves to a movie object with detailed information.
 * @throws {Error} Throws an error if the API request fails.
 */
export const fetchMoviesDetails = async (movie_id) => {
  try {
    // Make a GET request to the /movie/{movie_id} endpoint with the API key.
    const response = await axios.get(`${BASE_URL}/movie/${movie_id}`, reqBody);

    // Return the movie details from the response data.
    return response.data;
  } catch (error) {
    // Log and throw an error if the request fails.
    console.error(`Error Fetching Movie Details for ID: ${movie_id}`, error);
    throw error;
  }
};

/**
 * Fetches the cast information for a specific movie by its ID.
 *
 * @param {number|string} movie_id - The ID of the movie to fetch cast details for.
 * @returns {Promise<Object>} A promise that resolves to an object containing the movie's cast details.
 * @throws {Error} Throws an error if the API request fails.
 */
export const fetchMovieCasts = async (movie_id) => {
  try {
    // Make a GET request to the /movie/{movie_id}/credits endpoint to retrieve cast details.
    const response = await axios.get(
      `${BASE_URL}/movie/${movie_id}/credits`,
      reqBody
    );

    // Return the movie cast details from the response data.
    return response.data;
  } catch (error) {
    // Log and throw an error if the request fails.
    console.error(
      `Error Fetching Cast Information for Movie ID: ${movie_id}`,
      error
    );
    throw error;
  }
};
