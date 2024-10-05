import axios from "axios"; 
import { API_KEY, BASE_URL } from "../constants/enviromentVariables"; 

/**
 * Function to perform a multi-search using the API, which searches for movies, TV shows, or people.
 *
 * @param {string} query - The search term entered by the user.
 * @returns {Promise<Array>} - A promise that resolves to an array of search results.
 * @throws {Error} - Throws an error if no search query is provided or if the API request fails.
 */
export const fetchMultiSearch = async (query) => {
  try {
    // If no query is provided, throw an error to ensure the search has a valid input.
    if (!query) {
      throw new Error("Search query is required");
    }

    // Define the request body parameters with the API key and search query.
    const reqBody = { params: { api_key: API_KEY, query: query } };

    // Make a GET request to the multi-search endpoint.
    const response = await axios.get(`${BASE_URL}/search/multi`, reqBody);

    // Return the results array from the API response.
    return response.data.results;
  } catch (error) {
    // Log any errors that occur during the API request.
    console.error("Error Fetching", error);

    // Throw the error so it can be handled in the calling function.
    throw error;
  }
};
