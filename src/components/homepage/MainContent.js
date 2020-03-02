import React from "react";
import "../../assets/styles/_maincontent.scss";

const MainContent = () => {
  return (
    <div className="container">
      <div>
        <p>Browse by Category</p>
        <Tabs />
        <Movies />
      </div>
    </div>
  );
};

const Tabs = () => {
  return (
    <ul className="options">
      <li className="active">All</li>
      <li>Anime</li>
      <li>Action</li>
      <li>Adventure</li>
      <li>Science Fiction</li>
      <li>Comedy</li>
    </ul>
  );
};

const Movies = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="movies-grid">
            <div className="movies-image">
              <a href="">
                <img src={require("../../assets/images/movies/movies1.jpeg")} />
              </a>
              <span className="movies-content">
                <h3 className="title">
                  <a href="">Spirited Away</a>
                </h3>
                <h4 classNane="category">
                  <a href="">Fantasy Anime</a>
                </h4>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
