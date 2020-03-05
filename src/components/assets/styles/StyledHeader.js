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
