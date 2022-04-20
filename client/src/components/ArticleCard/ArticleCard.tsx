import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { ArticleCardStyle, ArticlePhoto, LogoStyle, NewsDetailsStyle } from "./ArticleCardStyle";
import StyledButton, { ButtonDivStyle } from '../../styles/DefaultButtonStyle';
import { useGlobalContext } from "../../context/articleContext";


const ArticleCard: React.FC<ArticleProps> = (props) => {

    const { article } = props;
    const { title, shortDescription, photoUrl, category } = article;
    const { dispatch } = useGlobalContext();

    const ArticlePhotoWithUrl = styled(ArticlePhoto)`
        background-image: url(${photoUrl});
        `;

    let navigate = useNavigate();

    const onClickHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        navigate(`/article/${article._id}`);
    }

    return (
        <ArticleCardStyle>
            {category !== 1 || !photoUrl ? <LogoStyle className='card-photo'>{'<T>'}</LogoStyle> : <ArticlePhotoWithUrl className='card-photo' />}
            <NewsDetailsStyle>
                <h1>{title}</h1>
                <p>{shortDescription}</p>
            </NewsDetailsStyle>
            <ButtonDivStyle>
                <StyledButton type='button' className='read-more-button' onClick={onClickHandler}>{'< read >'}</StyledButton>
            </ButtonDivStyle>
        </ArticleCardStyle>)
}


export { ArticleCard as default }