export const AddArticle = (article) =>{
    return {
        type:'ADD_ARTICLE',
        payload:article
    }
}


export const DeleteArticle = (id) =>{
    return {
        type:'DELETE_ARTICLE',
        payload:id
    }
}


export const UpdateArticle = (article) =>{
    return {
        type:'UPDATE_ARTICLE',
        payload:article
    }
}

export const isLoggedIn = (bool) => {
    return {
        type: 'isLoggedIn',
        payload: bool
    };
}

export const setUser = (user) => {
    return {
        type: 'USER',
        payload: user
    };
}


export const ArticleDetails = (article) => {
    return {
        type: 'MORE_DETAILS',
        payload: article
    };
}