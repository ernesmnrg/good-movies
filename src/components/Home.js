import React, { useState, useEffect } from "react";

import {
  API_KEY,
  API_URL,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from "../config";

import Header from "./elements/Header";
import ImageSlider from "./elements/ImageSlider";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import NextButton from "./elements/NextButton";
import Spinner from "./elements/Spinner";
import Footer from "./elements/Footer";

const Home = () => {
  const [state, setState] = useState({ docs: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(state);

  const fetchMovies = async endpoint => {
    setError(false);
    setLoading(true);

    try {
      const result = await (await fetch(endpoint)).json();
      console.log(result);
      setState(prev => ({
        ...prev,
        data: [...result, datas],
        imageSlider: prev.imageSlider || result.results[5],
        currentPage: result.page,
        totalPages: result.totalPages
      }));
    } catch {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(`${API_URL}movie/favorite/:_id?api_key=${API_KEY}`);
  }, []);

  return (
    //or known as react.fragment
    <>
      <Header />
      <ImageSlider />
      <Grid />
      <MovieThumb />
      <NextButton />
      <Spinner />
      <Footer />
    </>
  );
};

export default Home;
