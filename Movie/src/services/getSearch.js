import axios from "axios";
import { API_KEY, BASE_URL } from "../constants/enviromentVariables";

export const fetchMultiSearch = async (query) => {
  try {
    if (!query) {
      throw new Error("Search query is required");
    }
    const reqBody = { params: { api_key: API_KEY, query: query } };
    const response = await axios.get(`${BASE_URL}/search/multi`, reqBody);

    // window.location.reload();
    return response.data.results;
  } catch (error) {
    console.error("Error Fetching", error);
    throw error;
  }
};
