import {addProduct, removeProduct} from './actionTypes.js'

const addProductAction = (data)=>{
    return {
        type: addProduct,
        payload: data
    }
}
const removeProductAction = (id)=>{
    return {
        type: removeProduct,
        id
    }
}

export{
    addProductAction,
    removeProductAction
}