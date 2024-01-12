import {addArticle, removeArticle} from './actionTypes.js'

const addArticleAction = (data)=>{
    return {
        type: addArticle,
        payload: data
    }
}
const removeArticleAction = (id)=>{
    return {
        type: removeArticle,
        id
    }
}

export{
    addArticleAction,
    removeArticleAction
}