import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleFromAPI } from "../../api/api";
import { ArticleView } from "../../components/ArticleView/ArticleView";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";



export const ArticlePage: React.FC<{}> = (props) => {

    const [wrappedElement, setWrappedElement] = useState<JSX.Element | null>();

    const { id } = useParams();

    const [currentID, setCurrentID] = useState<string | undefined>('');

    useEffect(() => {
        console.log('--> ', id + ' VS ', currentID!);
        setWrappedElement(null);
        if (id != currentID) {
            setCurrentID(id);
            getArticleFromAPI(id!)
                .then(article => {
                    if (article != null) {
                        if (article._id != null) {
                            setWrappedElement(<ArticleView article={article} />);

                        }
                    }
                })
                .catch(e => { console.log(e) });
        }
    }, [/* id */]);

    return (
        <>
            <ContentWrapper childComp={wrappedElement} />
        </>
    )
}