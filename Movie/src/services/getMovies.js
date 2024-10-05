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
export const fetchMoviesList = async () => {
  try {
    // Make a GET request to the /discover/movie endpoint with the API key.
    const response = await axios.get(`${BASE_URL}/discover/movie`, reqBody);

    // Return the list of movies (results array) from the response data.
    return response.data.results;
  } catch (error) {
    // Log and throw an error if the request fails.
    console.error("Error Fetching Movies List", error);
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
