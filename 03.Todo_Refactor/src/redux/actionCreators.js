import { counterIncrement, counterDecrement, counterRestart } from "./actionTypes"

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

export const counterRestartAction = ()=>{
    return{
        type: counterRestart
    }
}