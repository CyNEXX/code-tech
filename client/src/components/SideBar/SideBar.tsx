import React, { useEffect, useState } from "react";
import { SideBarStyle } from "./SideBarStyle";
import { SideBarElement } from "./SideBarElement";
import { getPopularArticlesFromAPI } from "../../api/api";
import { useGlobalContext } from "../../context/articleContext";
import { ContextualLoadingStyle } from '../ContextualLoading/ContextualLoadingStyle';
import { ContextualLoading } from "../ContextualLoading/ContextualLoading";
import NoContent from "../NoContent/NoContent";

export const SideBar: React.FC<{}> = (props) => {

    const [categoryState, setCategoryState] = useState<string | null>();

    const { state } = useGlobalContext();

    const globalCategory = state.category;

    const [wrappedElement, setWrappedElement] = useState<JSX.Element | null>();

    /*     useEffect(() => {
            if(categoryState != globalCategory) {
                setWrappedElement(null);
            }
        }, [globalCategory]);
     */
    useEffect(() => {
        /*        if (categoryState != globalCategory) { */
        getPopularArticlesFromAPI(globalCategory)
            .then(popularArticles => {
                if (!popularArticles) {
                    setWrappedElement(<NoContent message='Nothing so far popular enough to be here' />)
                }
                else if (popularArticles.length > 0) {
                    console.log('SideBar popularArticles', popularArticles);
                    setWrappedElement(
                        <>
                            <h1 className='sidebar-title'>{'<popular>'}</h1>
                            <nav>
                                {popularArticles.map((article: BasicArticle, i: number) => {
                                    return (<SideBarElement key={i} article={article} />)
                                })}
                            </nav>
                        </>
                    );
                }
            })
            .catch(e => { console.log(e) });
        /*     } */
    }, [globalCategory]);

    return (
        <SideBarStyle>
            {!wrappedElement ? (<ContextualLoading />) : wrappedElement}
        </SideBarStyle>
    )
}