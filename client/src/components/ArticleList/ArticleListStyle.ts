import styled from "styled-components";

export const ArticleListStyle = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
    grid-template-rows: 1fr;
`;