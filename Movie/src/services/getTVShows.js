import axios from "axios"; // Importing axios for making HTTP requests.
import { API_KEY, BASE_URL } from "../constants/enviromentVariables"; // Importing API key and base URL from environment variables.

/**
 * Common request body for API calls, including the API key in the parameters.
 */
const reqBody = { params: { api_key: API_KEY } };

/**
 * Function to fetch a list of TV shows.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of TV show objects.
 * @throws {Error} Throws an error if the API request fails.
 */
export const fetchTvList = async () => {
  try {
    // Make a GET request to the /discover/tv endpoint to fetch a list of TV shows.
    const response = await axios.get(`${BASE_URL}/discover/tv`, reqBody);

    // Return the 'results' array from the response data.
    return response.data.results;
  } catch (error) {
    // Log the error and throw it so it can be handled by the caller.
    console.error("Error Fetching TV List", error);
    throw error;
  }
};

/**
 * Function to fetch detailed information about a specific TV show.
 *
 * @param {number|string} tv_id - The ID of the TV show to fetch details for.
 * @returns {Promise<Object>} A promise that resolves to a TV show details object.
 * @throws {Error} Throws an error if the API request fails.
 */
export const fetchTvDetails = async (tv_id) => {
  try {
    // Make a GET request to the /tv/{tv_id} endpoint to fetch the details of a specific TV show.
    const response = await axios.get(`${BASE_URL}/tv/${tv_id}`, reqBody);

    // Return the response data, which contains the details of the TV show.
    return response.data;
  } catch (error) {
    // Log the error and throw it so it can be handled by the caller.
    console.error("Error Fetching TV Details", error);
    throw error;
  }
};

/**
 * Function to fetch the cast of a specific TV show.
 *
 * @param {number|string} tv_id - The ID of the TV show to fetch the cast for.
 * @returns {Promise<Object>} A promise that resolves to the credits (cast and crew) of the TV show.
 * @throws {Error} Throws an error if the API request fails.
 */
export const fetchTvCasts = async (tv_id) => {
  try {
    // Make a GET request to the /tv/{tv_id}/credits endpoint to fetch the cast of the TV show.
    const response = await axios.get(
      `${BASE_URL}/tv/${tv_id}/credits`,
      reqBody
    );

    // Return the response data, which contains the cast and crew of the TV show.
    return response.data;
  } catch (error) {
    // Log the error and throw it so it can be handled by the caller.
    console.error("Error Fetching TV Casts", error);
    throw error;
  }
};
