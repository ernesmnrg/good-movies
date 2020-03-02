import React from "react";
import { connect } from "react-redux";
import Header from "./components/homepage/Header";
import Footer from "./components/homepage/Footer";
import ImageSlider from "./components/homepage/ImageSlider";
import MainContent from "./components/homepage/MainContent";
// import "./App.css";
// import { getMovies, addMovie, delMovie } from "./store/actions/movie";

const App = () => {
  return (
    <div>
      <Header />
      <ImageSlider />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;

// const App = ({ movies, getMovies, addMovie, delMovie }) => {
//   const [title, setTitle] = React.useState("");

//   React.useEffect(() => {
//     getMovies();
//   }, [getMovies]);

//   const lists = movies.map(item => (
//     <li key={item.id}>
//       {item.title}
//       <button onClick={() => delMovie(item.id)}>delete</button>
//     </li>
//   ));

//   const change = e => {
//     setTitle(e.target.value);
//   };

//   const submit = e => {
//     e.preventDefault();
//     const post = {
//       title
//     };
//     addMovie(post);
//     setTitle("");
//   };

//   return (
//     <div className="App">
//       <form onSubmit={submit}>
//         <input type="text" name="title" placeholder="title" onChange={change} />
//         <button>add</button>
//       </form>
//       {lists}
//     </div>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     movies: state.movieListReducer.movies
//   };
// };

// export default connect(mapStateToProps, { getMovies, addMovie, delMovie })(App);
