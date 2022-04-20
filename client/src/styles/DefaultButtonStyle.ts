import styled from "styled-components";

/* import { Link } from "react-router-dom"; */

const Button = styled.a`
        font-family: var(--font_theme_style_1);
        font-size: 1.3rem;
        background-color: var(--color_darkish_blue);

        margin-bottom: auto;
        margin-top: auto;
        padding: 0.25rem 1rem 0.25rem 1rem;
        cursor: default;

        &:hover {
            color: var(--color-orchid-white);
            -webkit-box-shadow: var(--shadow-inset-small);
            box-shadow: var(--shadow-inset-small);

            text-shadow: none;
        }
`;

export const ButtonDivStyle = styled.div`
    display: flex;
`;

export { Button as default }