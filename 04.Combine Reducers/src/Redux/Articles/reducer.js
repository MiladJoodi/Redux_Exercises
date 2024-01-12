import { addArticle, removeArticle } from './actionTypes.js'

export default (state = [], action) => {
    switch (action.type) {
        case addArticle:{
            let newArticle = action.payload
            return [...state, newArticle]
        }
        case removeArticle:{
            const newState = [...state].filter(article=> article.id !== action.id)
            return newState;
        }
        default:{
            return state;
        }
    }
}