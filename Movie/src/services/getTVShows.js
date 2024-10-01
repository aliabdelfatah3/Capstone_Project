import axios from "axios";
import { API_KEY, BASE_URL } from "../constants/enviromentVariables";

const reqBody = { params: { api_key: API_KEY } };
export const fetchTvList = async () => {
  try {

    const response = await axios.get(`${BASE_URL}/discover/tv`, reqBody);

    return response.data.results;
  } catch (error) {
    console.error("Error Fetching", error);
    throw error;
  }
};
export const fetchTvDetails = async (tv_id) => {
  try {
    const response = await axios.get(`${BASE_URL}/tv/${tv_id}`, reqBody);
    return response.data;
  } catch (error) {
    console.error("Error Fetching", error);
    throw error;
  }
};

export const fetchTvCasts = async (tv_id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/tv/${tv_id}/credits`,
      reqBody
    );
    return response.data;
  } catch (error) {
    console.error("Error Fetching", error);
    throw error;
  }
};
