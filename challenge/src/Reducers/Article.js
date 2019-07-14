const INIT_STATE = {
    ARTICLE: []
}
export default (state = INIT_STATE, { type, payload }) => {
    switch (type) {
        case 'ADD_ARTICLE':
            return { ...state, ARTICLE: [...state.ARTICLE, payload] };
        case 'DELETE_ARTICLE':
            return {
                ...state, ARTICLE: [state.ARTICLE.filter(elem => {
                    return elem.id !== payload
                })]
            }
        default:
            return state
    }
}



