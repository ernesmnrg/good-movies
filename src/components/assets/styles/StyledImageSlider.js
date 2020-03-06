// import styled from "styled-components";

// export const StyledImageSlider = styled.div`
//   @keyframes slider {
//     0% {
//       left: 0;
//     }

//     20% {
//       left: 0;
//     }

//     25% {
//       left: -100%;
//     }

//     45% {
//       left: -100%;
//     }

//     50% {
//       left: -200%;
//     }

//     70% {
//       left: -200%;
//     }

//     75% {
//       left: -300%;
//     }

//     95% {
//       left: -300%;
//     }

//     100% {
//       left: -400%;
//     }
//   }

//   #slider {
//     overflow: hidden;
//   }

//   #slider figure img {
//     width: 20%;
//     float: left;
//   }

//   #slider figure {
//     position: relative;
//     width: 500%;
//     height: 100%;
//     margin: 0;
//     left: 0;
//     text-align: left;
//     font-size: 0;
//     animation: 20s slider infinite;
//   }
// `;
//   background: 100%, cover;
//   background-position: center, center;
//   height: 600px;
//   position: relative;
//   width: 100%;
//   animation: animateImageSlider 1s;

//   .image-content {
//     max-width: 1280px;
//     padding: 20px;
//     margin: 0 auto;
//   }

//   .image-text {
//     z-index: 100;
//     max-width: 700px;
//     bottom: 40px;
//     margin-right: 20px;
//     min-height: 100px;
//     color: white;

//     h1 {
//       font-family: "Abel", sans-serif;
//       font-size: 48px;
//       color: white;

//       @media screen and (max-width: 720px) {
//         font-size: 38px;
//         color: white;
//       }
//     }

//     p {
//       font-family: "Abel", sans-serif;
//       font-size: 22px;
//       line-height: 26px;
//       color: white;

//       @media screen and (max-width: 720px) {
//         font-size: 16px;
//         line-height: 20px;
//         color: white;
//       }
//     }

//     @media screen and (max-width: 720px) {
//       max-width: 100%;
//     }
//   }

//   @keyframes animateImageSlider {
//     from {
//       opacity: 0;
//     }
//     to {
//       opacity: 1;
//     }
//   }
// `;

import styled from "styled-components";

export const StyledImageSlider = styled.div`
  background: ${props =>
    `linear-gradient(
      to bottom, rgba(0,0,0,0)
      39%,rgba(0,0,0,0)
      41%,rgba(0,0,0,0.65)
      100%
    ),
    url('${props.image}'), #1c1c1c`};
  background-size: 100%, cover !important;
  background-position: center, center !important;
  width: 100%;
  height: 100vh;
  position: relative;
  animation: animateHeroimage 1s;

  .heroimage-content {
    max-width: 1280px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    img {
      width: 16%;
      height: 50vh;
      padding: 30px;
    }
  }

  .heroimage-text {
    z-index: 100;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    background: rgba(0, 0, 0, 0);
    color: #fff;

    h1 {
      font-family: "Abel", sans-serif;
      font-size: 48px;
      color: #fff;

      @media screen and (max-width: 720px) {
        font-size: 38px;
        color: #fff;
      }
    }

    @media screen and (max-width: 720px) {
      max-width: 100%;
    }
  }

  @keyframes animateHeroimage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
