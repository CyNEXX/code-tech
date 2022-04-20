export const getArticlesFromAPI = async (articleTypeLabel: string) => {
    /* const paramUrl = articleTypeLabel.toLowerCase() */
/*     const urlLabel = paramUrl === 'news' ? 'news' : paramUrl === 'code' ? 'codes' : 'any'; */
    const url = `/api/articles/${articleTypeLabel}`;
    const response = await fetch(url);
    const body = await response.json();

    if (response.status !== 200) {
        throw Error(body.message);
    }
    return body;
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



export const getArticleFromAPI = async (id: number) => {
    const response = await fetch(`/api/article/${id}`);
    const body = await response.json();
    if (response.status !== 200) {
        throw Error(body.message)
    }
    return body;
}