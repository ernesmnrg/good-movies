import React, { useState, useEffect } from "react";
//import the API
import { API_URL, IMAGE_BASE_URL } from "../config";
//import components
import Header from "./elements/Header";
import ImageSlider from "../components/elements/ImageSlider";
import Grid from "../components/elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import NextButton from "./elements/NextButton";
import Spinner from "./elements/Spinner";
import Footer from "./elements/Footer";
import NoImage from "../components/assets/images/no_image.jpg";
import Movie from "./Movie";
import { StyledImageSlider } from "../components/assets/styles/StyledImageSlider";
// import custom hooknya
import { useHomeFetch } from "./hooks/useHomeFetch";

const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchMovies(`${API_URL}movies`);
    console.log(state);
  }, []);
  useEffect(() => {
    console.log(state);
  }, [state]);

  // error && <div>Something went wrong...</div>;
  //kalo movie nya ga ada return spinner

  const loadMoreMovies = () => {};

  return error ? (
    <div>Something went wrong...</div>
  ) : (
    <>
      <Header />
      <Grid />
      <StyledImageSlider>
        <div className="heroimage-content">
          {state.data.map(movie => (
            <img src={movie.image} alt="best movies" />
          ))}
          <div className="heroimage-text"></div>
        </div>
      </StyledImageSlider>

      <MovieThumb />
      <NextButton />
      {loading && <Spinner />}
      <Footer />
    </>
  );
};

export default Home;
