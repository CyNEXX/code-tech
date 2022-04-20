import { createGlobalStyle } from "styled-components";
import softwareTesterFont from '../fonts/software_tester/software_tester_7.ttf';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');

    @font-face {
        font-family: "software_tester";
        src: local('software_tester'), url(${softwareTesterFont}) format('truetype');
    }

    :root {
        --font_theme_style_1: software_tester;
        --font_theme_style_2: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        --font_theme_style_3: 'Montserrat', sans-serif;

        --color-green-bright: #49FF18;
        
        --color_darkish_blue: #424446;
        --color-dark: rgb(33, 37, 41);
        --color-sauvignon: rgb(246, 239, 233);
        --color-orchid-white: rgb(240, 240, 214);
        --color-whitish-green: #f2fff7;
        --color-shady-grey: #373d3c;
        --color-light-grey: #d9e6de;
        --shadow-link-text: 0 0 5px #fff, 0 0 10px #fff, 0 0 30px var(--color-green-bright), 0 0 55px var(--color-green-bright),
        1px 1px 1px rgba(206, 89, 55, 0);
        
        
        --text-glow: 0 0 5px #fff, 0 0 10px #fff, 0 0 30px var(--color-green-bright), 0 0 55px var(--color-green-bright), 1px 1px 1px rgba(206, 89, 55, 0);
        --green-glow-strong: 0px 0px 15px 5px rgba(73, 255, 24, 0), 0px 0px 15px 3px rgba(73, 255, 24, 0.34),
        0px 0px 15px 3px rgba(255, 255, 255, 0.6), 0px 0px 0px 1px #ffffff, 0px 0px 7px 4px rgba(73, 255, 24, 0.84);

        --shadow-inset-small: inset 0px 0px 6px 0px var(--color-green-bright), inset 0px 0px 3px 0px rgba(204, 255, 221, 0.5),
        inset 0px 0px 6px 0px #ffffff, inset 0px 0px 3px 0px #ffffff;

        --webkit-shadow-inset-strong: inset 0px 0px 15px 5px rgb(73 255 24 / 0%), inset 0px 0px 15px 3px rgb(73 255 24 / 34%),
        0px 0px 15px 3px rgb(255 255 255 / 60%), inset 0px 0px 0px 1px #ffffff,
        inset 0px 0px 7px 4px rgb(73 255 24 / 84%);

        --shadow-inset-strong: inset 0px 0px 15px 5px rgb(73 255 24 / 0%), inset 0px 0px 15px 3px rgb(73 255 24 / 34%),
        inset 0px 0px 15px 3px rgb(255 255 255 / 60%), inset 0px 0px 0px 1px #ffffff,
        inset 0px 0px 7px 4px rgb(73 255 24 / 84%);

        --webkit--green-glow-up: 0px 0px 15px 5px rgb(73 255 24 / 0%), 0px 0px 15px 3px rgb(73 255 24 / 34%), 0px 0px 15px 3px rgb(255 255 255 / 60%), 0px 0px 0px 1px #ffffff, 0px 0px 7px 4px rgb(73 255 24 / 84%);
        --green-glow-up: 180deg, 0px 0px 15px 5px rgb(73 255 24 / 0%), 0px 0px 15px 3px rgb(73 255 24 / 34%), 0px 0px 15px 3px rgb(255 255 255 / 60%), 0px 0px 0px 1px #ffffff, 0px 0px 7px 4px rgb(73 255 24 / 84%);

        --full-green-glow: 0px 0px 15px 5px rgb(73 255 24 / 0%), 0px 0px 15px 3px rgb(73 255 24 / 34%), 0px 0px 15px 3px rgb(255 255 255 / 60%), 0px 0px 0px 1px #ffffff, 0px 0px 7px 4px rgb(73 255 24 / 84%);

        
        


        --square-root-of-three: 1.73;
        --contextual-loading-height: 80px; 
        --contextual-loading-subelement-height: 40px;
        --contextual-loading-subelement-width: 40px;
        --contextual-loading-border-radius: 50%;

        --contextual-loading-half-edge: calc(var(--contextual-loading-height) / var(--square-root-of-three));

        --contextual-loading-newoffset-x: calc(var(--contextual-loading-subelement-height) / 2);
        --contextual-loading-newoffset-y: calc(calc(var(--contextual-loading-subelement-height) / 2) + calc(calc(var(--contextual-loading-height) / 3) * 2));

        --contextual-loading-new-left-before: calc(var(--contextual-loading-half-edge) * -1);
        --contextual-loading-new-left-after: calc(var(--contextual-loading-half-edge));

    }

    

    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        font-family: Helvetica;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        white-space: pre-wrap;
    }

    a {
        text-decoration: none;
        vertical-align: middle;
        color: var(--color-orchid-white);
        font-family: var(--font_theme_style_3);
    }

    a:visited {
        color: inherit !important;
    }

    a:hover, a.active.active-nav-link  {
        color: var(--color-sauvignon);
        text-shadow: var(--shadow-link-text);
    }

    #root {
        display: flex;
        flex-direction: column;
        grid-template-columns: 1fr;
        margin-left: auto;
        margin-right: auto;
        padding: 0;
        position: relative;
        background-color: var(--color_darkish_blue);
        height: 100vh;
        width: 100vw;
    }

    .button {
        font-family: software_tester;
        font-size: 1.3rem;
        background-color: var(--color_darkish_blue);

        margin-bottom: auto;
        margin-top: auto;
        padding: 0.25rem 1rem 0.25rem 1rem;
        
    }

    .button:hover {
        color: var(--color-orchid-white);
        -webkit-box-shadow: var(--shadow-inset-small);
        box-shadow: var(--shadow-inset-small);

        text-shadow: none;
    }

    .card-photo {
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }

        /* width */
    &::-webkit-scrollbar {
        width: 5px;
        background: var(--color_darkish_blue);
        
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: var(--color_darkish_blue);
        /* background: var(--color-dark); */
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: #888;
        background: var(--color-dark);
        
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: #555;
    }

`;