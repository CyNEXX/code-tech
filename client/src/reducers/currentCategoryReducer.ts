const category = (state: any, action: any) => {
    switch (action.type) {
        case 'SET_CURRENT_CATEGORY': {
            return action.payload
        }
        default: return state;
    }
}

export { category as default }