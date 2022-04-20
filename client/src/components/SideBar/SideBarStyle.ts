import styled from "styled-components";

export const SideBarStyle = styled.aside`
    display: flex;
    flex-direction: column;
    /* display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 20fr; */
    min-width: 25%;
    max-height: 75%;
    width: calc((48em - 100%) * 1000);
    max-width: 100%;
    color: var(--color-orchid-white);

    &>h1 {
        font-family: var(--font_theme_style_1);
        font-size: 2.5rem;
    }

    &>div>h3:hover {
        text-shadow: var(--shadow-link-text);
    }


    .article-link{
        cursor: default;
    }
`;