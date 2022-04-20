import styled from "styled-components";

export const ArticleCardStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 6fr 9fr 1fr;
    gap: 2px;
    justify-items: stretch;
    padding: 10px;
    background-color: var(--color-dark);

    &:hover {
        box-shadow: var(--full-green-glow);
    }
`;

export const LogoStyle = styled.div`
    display: flex;
    font-size: 10rem;
    justify-content: center;
    align-items: center;
    font-family: var(--font_theme_style_1);
    color: #ffffff;
    text-shadow: var(--text-glow);
`;

export const ArticlePhoto = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`;

export const NewsDetailsStyle = styled.div`
    color: var(--color-whitish-green);
    display: flex;
    flex-direction: column;
    justify-content: start;

    &>h1 {
        padding-bottom: 1rem;
        border-style: none none solid none;
        border-color: var(--color-shady-grey);
        border-width: 1px;
        word-break: break-all;
    }

    &>p {
        color: var(--color-light-grey);
    }
`;

