import React from "react";
import { Container, LoadingFrameStylle } from './LoadingStyle';
import { ReactComponent as LoadingLogoSVG } from './logo.svg';
import styled from "styled-components";
import { LoadingSvgWrapper } from "./LoadingSvgWrapper";

/** This is a logo components that includes a logo (with src provided via import) and a static text
 * 
 * @returns the loading component
 */


const LoadingLogoStyle = styled(LoadingLogoSVG)`

    width: 100%;
    height: 100%;
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


export const Loading: React.FC<{}> = () => {
  return (
    <Container>
      <LoadingFrameStylle>
        <LoadingLogoStyle />
      </LoadingFrameStylle>
      <p>
        loading
      </p>
    </Container>
  )
}