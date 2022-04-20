import React, { useEffect, useState } from "react";
import { SideBar } from "../SideBar/SideBar";
import { useGlobalContext } from "../../context/articleContext";
import { getPopularArticlesFromAPI } from "../../api/api";
import { Loading } from "../Loading/Loading";
import { ContentWrapperStyle, DynamicContentStyle } from './ContentWrapperStyle';
import { ScrollableSection } from "../ScrollableDiv/ScrollableSection";


/**
 * Contains the Loading, DynamicCOntent and SideBar components
 * @param props the 'Page' element that should be rendered
 * @returns a wrapped component
 */
const ContentWrapper: React.FC<ComponentToWrapProps | null> = (props) => {
    const { childComp } = props;
    const { state, dispatch } = useGlobalContext();
/*     const [currentCategory, setCurrentCategory] = useState<number | null>(null); */

    const { /* isLoading, */ popular } = state;

/*     useEffect(() => {
        console.log('ContentWrapper');
        getPopularArticlesFromAPI()
            .then(popularArticles => {
                if (popularArticles.length > 0) {
                    dispatch({ type: 'POPULATE_POPULAR_ARTICLES', payload: popularArticles });
                }
            })
            .catch(e => { console.log(e) });
    }, []); */

    return (
        <ContentWrapperStyle>
            {(childComp == null) && <Loading />}
            {(childComp != null) && <ScrollableSection childComp={childComp}></ScrollableSection>}
            {<SideBar />}
        </ContentWrapperStyle>

    )
}

export { ContentWrapper as default }

