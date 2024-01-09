import { counterIncrement, counterDecrement } from "./actionTypes"

const reducer = (state=0, action)=>{
    switch(action.type){
        case counterIncrement:{
            return state + 1
        }
        case counterDecrement:{
            return state - 1
        }
        default:{
            return state
        }
    }
}
export default reducer;