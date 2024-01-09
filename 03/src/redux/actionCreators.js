import { counterIncrement, counterDecrement } from "./actionTypes"

export const counterIncrementAction = ()=>{
    return{
        type: counterIncrement
    }
}

export const counterDecrementAction = ()=>{
    return{
        type: counterDecrement
    }
}