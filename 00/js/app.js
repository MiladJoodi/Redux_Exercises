const decBtn = document.getElementById('.dec')
const resetBtn = document.getElementById('.reset')
const incBtn = document.getElementById('.inc')
const numberElem = document.getElementById('#num')

//Declare Counter Reducer
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': {
            return state + 1
        }
        case 'DECREMENT': {
            return state - 1
        }
        case 'SET_ZERO': {
            // return 0
            return store - store
        }
        default: {
            return state
        }
    }
}

const store = Redux.createStore(counterReducer)

//Handle Events
decBtn.addEventListener('click', () => {

})
resetBtn.addEventListener('click', () => {

})
incBtn.addEventListener('click', () => {

})
