import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ImageSlider from "./components/maincontent/ImageSlider";
import MainContent from "./components/maincontent/MainContent";
import Home from "./components/Home";
// import "./App.css";
// import { getMovies, addMovie, delMovie } from "./store/actions/movie";

const App = () => {
  return (
    <div>
      <Home />
      <Router>
        <Route path="/yeah">
          <Header />
          <ImageSlider />
          <MainContent />
          <Footer />
        </Route>
      </Router>
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
