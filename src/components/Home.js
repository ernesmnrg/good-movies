import React, { useState, useEffect } from "react";
//import the API
import {
  API_KEY,
  API_URL,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from "../config";
//import components
import Header from "./elements/Header";
import ImageSlider from "./elements/ImageSlider";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import NextButton from "./elements/NextButton";
import Spinner from "./elements/Spinner";
import Footer from "./elements/Footer";
// import custom hooknya
import { useHomeFetch } from "./hooks/useHomeFetch";
import NoImage from "../components/assets/images/no_image.jpg";

const Home = () => {
  const [
    {
      state: { movies, currentPage, totalPages, ImageSlider },
      loading,
      error
    },
    fetchMovies
  ] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState("");

  if (error) return <div>Something went wrong...</div>;
  //kalo movie nya ga ada return spinner

  return (
    <>
      <Header />
      <ImageSlider />
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {movies.map(movie => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
      <MovieThumb />
      <NextButton />
      <Spinner />
      <Footer />
    </>
  );
};

export default Home;
