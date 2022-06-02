export const getArticlesFromAPI = async (articleTypeLabel: string) => {
    const url = `/api/articles/${articleTypeLabel}`;
    let response;
    let body;
    try {
        response = await fetch(url);
        body = await response.json();
        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    } catch (e) { console.log(e) }

}

export const getPopularArticlesFromAPI = async (articleTypeLabel: string) => {

    const url = `/api/popular/${articleTypeLabel}`;
    const response = await fetch(url);
    const body = await response.json();

    if (response.status !== 200) {
        throw Error(body.message)
    }
    return body;

}



export const getArticleFromAPI = async (id: string) => {
    console.log('GET ARTICLE API');
    const response = await fetch(`/api/article/${id}`);
    const body = await response.json();
    if (response.status !== 200) {
        throw Error(body.message)
    }
    return body;

}