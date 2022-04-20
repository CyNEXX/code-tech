const loading = (state: any, action: any) => {
    switch (action.type) {
        case 'START_LOADING': {
            return true;
        }
        case 'STOP_LOADING': {
            return false;
        }
        default: return state;
    }
}

export { loading as default }