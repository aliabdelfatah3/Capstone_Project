import axios from "axios";
import { BASE_OMDB_URL } from "../constants/enviromentVariables";

export const fetchRatings = async (query) => {
  try {
    const reqBody = { params: { api_key: API_KEY } };

    const response = await axios.get(`${BASE_OMDB_URL}?t${query}`, reqBody);
    return response.data.Ratings;
  } catch (error) {
    console.error("Error Fetching", error);
    throw error;
  }
};
