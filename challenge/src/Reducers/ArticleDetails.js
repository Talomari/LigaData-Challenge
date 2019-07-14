const INIT_STATE = {
    articleDetail:{}
};

export default (state = INIT_STATE, { type, payload }) => {
    switch (type) {
        case 'MORE_DETAILS':
            return { ...state,  articleDetail: payload };
        default:
            return state;
    }
};