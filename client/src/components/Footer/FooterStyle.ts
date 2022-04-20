import styled from "styled-components";
import bg from '../../assets/inflicted.png'

export const FooterStyle = styled.footer`
    margin-top: auto;
    display: flex;
    font-family: var(--font_theme_style_1);
    color: var(--color-orchid-white);
    font-size: 1.2rem;
    min-height: 3vh;
    height: 3rem;
    justify-content: space-between;
    flex-direction: row;
    background-image: url(${bg});
    /* -webkit-box-shadow: var(--webkit--green-glow-up);
    box-shadow: var(--green-glow-up); */
    padding: 0 5vw 0 5vw;

    -webkit-box-shadow: 0px 0px 15px 5px rgb(73 255 24 / 0%), 0px 0px 15px 3px rgb(73 255 24 / 34%), 0px 0px 15px 3px rgb(255 255 255 / 60%), 0px 0px 0px 1px #ffffff, 0px 0px 7px 4px rgb(73 255 24 / 84%);
    box-shadow: 180deg, 0px 0px 15px 5px rgb(73 255 24 / 0%), 0px 0px 15px 3px rgb(73 255 24 / 34%), 0px 0px 15px 3px rgb(255 255 255 / 60%), 0px 0px 0px 1px #ffffff, 0px 0px 7px 4px rgb(73 255 24 / 84%);

    &>h4 {
        margin: auto 0 auto auto;
    }
`;