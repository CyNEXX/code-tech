import React from "react";
import { useNavigate } from "react-router-dom";
import { ArticleViewStyle, CodeStyle, NewsDetailsStyle, TopicImage } from './ArticleViewStyle';

import styled from "styled-components";
import StyledButton, { ButtonDivStyle } from '../../styles/DefaultButtonStyle';

export const ArticleView: React.FC<ArticleProps> = (props) => {

    const { article } = props;

    const { category, photoUrl, title, shortDescription, longDescription, createdAt, views, code } = article;

    const navigate = useNavigate();

    const backButtonHandler = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate(-1);
    };

    const TopicPhoto = styled(TopicImage)`
        background-image: url(" + ${photoUrl} + ");
    `;

    return (<ArticleViewStyle className="news-card">
        <TopicImage>
            {category !== 1 || !photoUrl ?
                (<>{'<T>'}</>) :
                (<TopicPhoto />)}
        </TopicImage>
        <NewsDetailsStyle>
            <p className='topic-title'>{title}</p>
            <p className='topic-description'>{shortDescription}</p>
            <p className='topic-long-description'>{longDescription}</p>
            {code && (<CodeStyle>{code}</CodeStyle>)}
        </NewsDetailsStyle>

        <ButtonDivStyle>
            <StyledButton type='button' className='return-home' onClick={backButtonHandler}>{`< back >`}</StyledButton>
        </ButtonDivStyle>

    </ArticleViewStyle >)
}