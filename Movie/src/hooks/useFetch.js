import { useState, useEffect } from 'react';

/**
 * A custom hook for fetching data from an API function.
 * 
 * @param {Function} fetchFunction - The async function that fetches the data (e.g., from `services/`).
 * @param {Array} dependencies - An array of dependencies to re-trigger the fetch when they change.
 * @returns {Object} An object containing the fetched `data`, `loading` state, and `error` state.
 */
export const useFetch = (fetchFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    const fetchData = async () => {
      try {
        const result = await fetchFunction();
        if (isMounted) {
          setData(result);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || 'An error occurred while fetching data');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false; // Cleanup function to prevent setting state on unmounted components
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return { data, loading, error };
};
