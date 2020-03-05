import React from "react";
import Logo from "../assets/images/logo.png";

import {
  StyledHeader,
  StyledLogo,
  StyledP
} from "../assets/styles/StyledHeader";

const Header = () => (
  <StyledHeader>
    <div className="header-content">
      <StyledLogo src={Logo} alt="logo" />
      <StyledP alt="login">SIGN in</StyledP>
    </div>
  </StyledHeader>
);

export default Header;
