import { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../../config";

export const useHomeFetch = () => {
  const [state, setState] = useState({ data: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async endpoint => {
    setError(false);
    setLoading(true);

    try {
      const result = await (await fetch(endpoint)).json();

      setState(prev => ({
        // ...prev,
        // data: [...result, datas],
        // imageSlider: prev.imageSlider || result.data[0],
        // currentPage: result.page,
        // totalPages: result.totalPages
      }));
    } catch {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(`${API_URL}movie/favorite/:_id?api_key=${API_KEY}`);
  }, [fetchMovies]);

  return [{ state, loading, error }, fetchMovies];
};
