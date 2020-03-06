import React, { useState, useRef } from "react";
// import { Link } from "@reach/router";
import Logo from "../assets/images/logo.png";
import FontAwesome from "react-fontawesome";
import {
  StyledHeader,
  StyledLogo,
  StyledP,
  StyledSearchBar,
  StyledSearchBarContent
} from "../assets/styles/StyledHeader";

const Header = ({ callback }) => {
  const [state, setState] = useState("");
  const timeOut = useRef(null);

  const doSearch = event => {
    console.log(event.target.value);
    const { value } = event.target;

    clearTimeout(timeOut.current);
    setState(value);

    timeOut.current = setTimeout(() => {
      callback(value);
    }, 500);
  };

  return (
    <StyledHeader>
      <div className="header-content">
        <StyledLogo src={Logo} alt="logo" />
        <StyledSearchBar>
          <StyledSearchBarContent>
            <FontAwesome className="fa-search" name="search" size="2x" />
            <input
              type="text"
              placeholder="search movie"
              onChange={doSearch}
              value={state}
            />
          </StyledSearchBarContent>
        </StyledSearchBar>

        <StyledP alt="login">SIGN in</StyledP>
      </div>
    </StyledHeader>
  );
};

export default Header;
