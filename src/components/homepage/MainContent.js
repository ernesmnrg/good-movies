import React from "react";
import "../../assets/styles/_maincontent.scss";

const MainContent = () => {
  return (
    <div className="container">
      <div>
        <p>Browse by Category</p>
        <Tabs />
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

export default MainContent;
