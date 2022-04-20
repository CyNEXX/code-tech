import React, { useEffect } from "react";
import { useGlobalContext } from "../../context/articleContext";
import { Article } from "../../models/article";
/* import { ArticleTypes } from "../../models/ArticleTypes"; */
import ArticleCard from "../ArticleCard/ArticleCard";
import { ArticleListStyle } from "./ArticleListStyle";

interface ArticleListProps {
    articles: BasicArticle[]/* ,
    articleType: ArticleTypes */
}

const ArticleList: React.FC<ArticleListProps> = (props) => {

/*     const { state, dispatch } = useGlobalContext(); */
    const { articles } = props;

    return (
        <ArticleListStyle>
            {articles.map((article: any, i: number) => { return <ArticleCard article={article} key={i} /> })}
        </ArticleListStyle>
    )
}

export default ArticleList;