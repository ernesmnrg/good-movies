import { useState } from "react";
// import { API_URL, API_KEY } from "../../config";

export const useHomeFetch = () => {
  const [state, setState] = useState({ data: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async endpoint => {
    setError(false);
    setLoading(true);

    try {
      const result = await (await fetch(endpoint)).json();
      console.log(result);
      setState(prev => ({
        ...prev,
        data: [...result.data.docs],
        imageSlider: prev.imageSlider || result.data[0],
        currentPage: result.data.page,
        totalPages: result.data.totalPages
      }));
    } catch {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  //   useEffect(() => {
  //     fetchMovies(`${API_URL}movies`);
  //   }, [fetchMovies]);

  return [{ state, loading, error }, fetchMovies];
};
