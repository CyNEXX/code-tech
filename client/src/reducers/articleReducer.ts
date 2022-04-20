const currentArticle = (state: any, action: any) => {
    switch (action.type) {
        /*         case 'GET_CURRENT_ARTICLE': {
                    return { ...action.payload };
                } */
        case 'SET_ARTICLE': {
            return { ...state, article: { ...action.payload } }
        }
        case 'SET_ARTICLE_ID': {
            return { ...state, articleID: action.payload }
        }
        default: return state;



    }
}

export { currentArticle as default }