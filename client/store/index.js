import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import cartReducer from './cart'
import productsReducer from './products'
import singleProduct from './singleProduct'
import {saveState} from '../loadState'
import historyReducer from './orderHistory'
import usersReducer from './users'

const reducer = combineReducers({
  user,
  cart: cartReducer,
  products: productsReducer,
  product: singleProduct,
  orderHistory: historyReducer,
  users: usersReducer
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

store.subscribe(() => {
  saveState(store.getState())
})

export default store
export * from './user'
