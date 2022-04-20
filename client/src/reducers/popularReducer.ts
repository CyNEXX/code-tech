const articles = (state: any, action: any) => {
    switch (action.type) {
        case 'POPULATE_POPULAR_ARTICLES': {
            const newState = action.payload.map((a: any) => { return { ...a } });
            return action.payload.map((a: any) => { return { ...a } });
        }
        default: return state;
    }
}

export { articles as default }