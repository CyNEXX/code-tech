import React from "react";
import { Link } from "react-router-dom";

export const SideBarElement: React.FC<ArticleProps> = (props) => {

    const { article } = props;

    return (
        <h3>
            <Link type='button' to={`/article/${article._id}`} className='article-link visit-" + content.id + "'>{article.title}</Link>
        </h3>)
};
