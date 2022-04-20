import styled from "styled-components";

export const ArticleViewStyle = styled.article`

/*     height: 100%; */

    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit, minmax(25vh, 1fr));
    background-color: var(--color-dark);
    gap: 10px;
    padding: 1rem;
    -webkit-box-shadow: var(--webkit--green-glow-up);
    box-shadow: var(--full-green-glow);
`;

export const TopicImage = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    font-size: 20rem;
    justify-content: center;
    align-items: center;
    font-family: var(--font_theme_style_1);
    color: #ffffff;
    text-shadow: var(--text-glow);
`;

export const NewsDetailsStyle = styled.div`
    color: var(--color-whitish-green);
    display: flex;
    flex-direction: column;
    justify-content: start;

    &>h1, .topic-title {
        padding-bottom: 1rem;
        border-style: none none solid none;
        border-color: var(--color-shady-grey);
        border-width: 1px;
    }

    .topic-description {
        font-style: italic;
    }

    .topic-title {
        font-size: 2rem;
    }

`;

export const CodeStyle = styled.div`
    padding: 3rem;
    font-family: var(--font_theme_style_2);
    background-color: var(--color_darkish_blue);
    -webkit-box-shadow: var(--webkit-shadow-inset-strong);
    box-shadow: var(--shadow-inset-strong);
`;

