import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getArticlesFromAPI } from '../../api/api';
import ArticleList from '../../components/ArticleList/ArticleList';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import { useGlobalContext } from '../../context/articleContext';
import { ArticleCategories } from '../../models/ArticleCategories';
import NoContent from '../../components/NoContent/NoContent';

const ArticleListPage: React.FC<{}> = (props) => {

    const { dispatch } = useGlobalContext();

    const [currentCategory, setCurrentCategory] = useState<number | null>();

    const [wrappedElement, setWrappedElement] = useState<JSX.Element | null>();

    const location = useLocation();

    useEffect(() => {
        console.log('Should run');

        let categoryFromUrl = location.pathname.split('/')[1];
        if (!categoryFromUrl) {
            categoryFromUrl = 'any';
        }

        setWrappedElement(null);
        getArticlesFromAPI(categoryFromUrl)
            .then((result) => {
                console.log('R: ', result);
                if (!result) {
                    setWrappedElement(<NoContent message='No articles found'/>);
                } else {
                    const articleList = result as BasicArticle[];
                    console.log(articleList);
                    setWrappedElement(<ArticleList articles={articleList} />);
                }

            })
            .catch(e => { console.log(e) });
    }
        , [location]);

    return (
        <>
            <ContentWrapper childComp={wrappedElement} />
        </>
    )
}

export { ArticleListPage as default }