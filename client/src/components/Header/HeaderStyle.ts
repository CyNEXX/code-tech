import styled from "styled-components";
import bg from '../../assets/inflicted.png'

export const HeaderWrapperStyle = styled.div`
    display: flex;
 /*    min-height: 3vh; */
    min-height: 5rem;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 5vw 0 5vw;
    background-image: url(${bg});
    position: relative;
    -webkit-box-shadow: var(--green-glow-strong);
    box-shadow: var(--green-glow-strong);
`;

export const HeaderContentStyle = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    min-height: 5rem;
  /*   height: auto; */
`;

export const LogoMainDivStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(241px, 3fr));
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto;
    grid-template-areas: "symbol text text text";

    & h1 {
        justify-self: start;
        font-family: var(--font_theme_style_1);
        font-size: 3rem;
        margin-top: auto;
        margin-bottom: auto;
        color: var(--color-sauvignon);
        text-shadow: var(--shadow-link-text);
    }

    &>div {
        display: flex;
    }

    &>div>div {
        margin: auto auto auto 0;
    }

`;

export const UlStyle = styled.nav`
    margin: 0;
    height: 100%;
    justify-content: space-between;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    align-items: center;

    &>li {
        list-style-type: none;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: end;
        justify-items: stretch;
        position: relative;
    }

    &>li>a {
        font-family: var(--font_theme_style_1);
        color: var(--color-sauvignon) !important;
        font-size: 1.3rem;
        font-weight: bold;
        text-align: end;
        line-height: 5rem;
    }

    &>li>a.active.active-nav-link {
       /*  width: 100%; */
        /* color: var(--color-sauvignon);
        text-shadow: var(--shadow-link-text); */
    }

`
