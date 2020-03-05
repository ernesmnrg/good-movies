import styled from "styled-components";

export const StyledImageSlider = styled.div`
  background: 100%, cover;
  background-position: center, center;
  height: 600px;
  position: relative;
  width: 100%;
  animation: animateImageSlider 1s;

  .image-content {
    max-width: 1280px;
    padding: 20px;
    margin: 0 auto;
  }

  .image-text {
    z-index: 100;
    max-width: 700px;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    color: white;

    h1 {
      font-family: "Abel", sans-serif;
      font-size: 48px;
      color: white;

      @media screen and (max-width: 720px) {
        font-size: 38px;
        color: white;
      }
    }

    p {
      font-family: "Abel", sans-serif;
      font-size: 22px;
      line-height: 26px;
      color: white;

      @media screen and (max-width: 720px) {
        font-size: 16px;
        line-height: 20px;
        color: white;
      }
    }

    @media screen and (max-width: 720px) {
      max-width: 100%;
    }
  }

  @keyframes animateImageSlider {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
