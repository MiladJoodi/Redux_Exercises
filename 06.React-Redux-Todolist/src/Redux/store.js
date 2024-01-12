import { legacy_createStore } from 'redux';
import reducers from "./reducer"

import todosReducer from './store/Todos'

const store = legacy_createStore(todosReducer);

export default store;