import { createStore } from 'redux'
import reducer from './shoes/shoeReducer'

const store = createStore(reducer)

export default store

