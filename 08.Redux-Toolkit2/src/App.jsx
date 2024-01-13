import { Provider } from 'react-redux'
import store from './store'

import Counter from './Counter'
import PostList from './PostList'

function App () {
  return (
    <Provider store={store}>
      <div className='App'>
        <h1>Redux Toolkit</h1>
        <Counter />
        <PostList  />
      </div>
    </Provider>
  )
}

export default App