import { addProduct, removeProduct } from './actionTypes.js'

export default (state = [], action) => {
    switch (action.type) {
        case addProduct:{
            let newProduct = action.payload
            return [...state, newProduct]
        }
        case removeProduct:{
            const newState = [...state].filter(product=> product.id !== action.id)
            return newState;
        }
        default:{
            return state;
        }
    }
}