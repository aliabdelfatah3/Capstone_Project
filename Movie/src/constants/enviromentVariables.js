// Exporting the API key from the environment variables.
// 'import.meta.env' is used in Vite to access environment variables.
// 'VITE_API_KEY' is the name of the environment variable that holds the API key.
export const API_KEY = import.meta.env.VITE_API_KEY;

// Exporting the base URL for API requests from the environment variables.
// 'import.meta.env.VITE_BASE_URL' is used to get the base URL, ensuring it can be
// changed for different environments (development, production, etc.).
export const BASE_URL = import.meta.env.VITE_BASE_URL;
