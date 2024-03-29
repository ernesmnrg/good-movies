import styled from "styled-components";

export const StyledHeader = styled.div`
  padding: 0 20px;
  box-sizing: border-box;
  background: #1c1c1c;

  .header-content {
    max-width: 1280px;
    padding: 20px 0;
    box-sizing: border-box;
    min-height: 120px;

    @media screen and (max-width: 500px) {
      min-height: 0px;
    }
  }
`;

export const StyledLogo = styled.img`
  width: 100px;
  margin-top: 0px;

  @media screen and (max-width: 500px) {
    width: 150px;
    margin-top: 5px;
  }
`;

export const StyledP = styled.p`
  width: 100px;
  width: 100px;
  margin-top: 0px;
  margin-top: 0px;
  float: right;
  transition-duration: 0.4s;
  color: white;

  :hover {
    background-color: red;
  }

  @media screen and (max-width: 500px) {
    display: inline-block;
    width: 80px;
    margin-top: 0px;
  }
`;

export const StyledSearchBar = styled.div`
  width: 100%;
  height: 105px;
  background: #1c1c1c;
  padding: 25px 20px 0px 20px;
  box-sizing: border-box;
  color: #fff;
`;

export const StyledSearchBarContent = styled.div`
  max-width: 1000px;
  width: 100%;
  height: 55px;
  background: #353535;
  margin: 0 auto;
  border-radius: 40px;
  position: relative;
  color: white;

  .fa-search {
    position: absolute;
    left: 20px;
    top: 12px;
    color: #fff;
    z-index: 1000;
  }

  input {
    font-family: "Abel", sans-serif;
    font-size: 28px;
    position: absolute;
    left: 0px;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: #fff;
    box-sizing: border-box;

    :focus {
      outline: none;
    }

    @media screen and (max-width: 720px) {
      font-size: 28px;
    }
  }
`;
