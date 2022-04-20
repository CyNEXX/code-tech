import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto auto auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
/*     width: 30rem;
    height: 30rem; */
    p {
        text-align: center;
        justify-self: start;
        font-family: var(--font_theme_style_3);
        font-size: 3rem;
        margin-top: 2rem;
        margin-bottom: auto;
        color: #ffffff;
        text-shadow: var(--shadow-link-text);
    }
`;

export const LogoImgStyle = styled.img`
    height: 100%;
    width: 100% ;
    pointer-events: none;
    @media (prefers-reduced-motion: no-preference) {
      animation: App-logo-spin infinite 10s linear;
    }
    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
`;


export const SvgStyle = styled.svg`
    height: 100%;
    width: 100% ;
  circle, path {
    -webkit-box-shadow: var(--green-glow-strong);
    box-shadow: var(--green-glow-strong);
    color: #ffffff;
  }
    pointer-events: none;
    @media (prefers-reduced-motion: no-preference) {
      animation: App-logo-spin infinite 10s linear;
    }
    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
`;

export const LoadingFrameStylle = styled.div`
  background-color: var(--color-dark);
  border-radius: 50%;
  box-shadow: var(--green-glow-strong);
  
  width: 500px;
  height: 500px;
    
/*   width: 20rem;
  height: 20rem */
`;