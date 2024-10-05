import axios from "axios";
import { BASE_OMDB_URL } from "../constants/enviromentVariables";

export const fetchRatings = async (query) => {
  // Declaring an asynchronous function `fetchRatings` that takes a `query` parameter.
  try {
    const reqBody = { params: { api_key: API_KEY } };
    // Defining the request body. Here, we’re adding the `api_key` as a parameter to the request.

    const response = await axios.get(`${BASE_OMDB_URL}?t${query}`, reqBody);
    // Making a GET request to the OMDB API using axios.
    // `${BASE_OMDB_URL}?t${query}` constructs the API endpoint.
    // It appends the query string `?t=query` to search for a movie by title.

    return response.data.Ratings;
    // Returning the `Ratings` array from the API response.
  } catch (error) {
    console.error("Error Fetching", error);
    // If any error occurs during the API call, it will be caught here, and an error message will be logged.

    throw error;
    // Rethrowing the error to handle it in the calling function if needed.
  }
};
