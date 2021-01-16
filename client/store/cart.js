import axios from 'axios'

//Action Types
const SHOW_ALL_CART = 'SHOW_ALL_CART'
const DELETE_FROM_CART = 'DELETE_FROM_CART'
const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM'
const ADD_TO_CART = 'ADD_TO_CART'

//Action Creators
const showAllCart = cartItems => ({
  type: SHOW_ALL_CART,
  cartItems
})

const deleteFromCart = cartItem => ({
  type: DELETE_FROM_CART,
  cartItem
})

const updateCartItem = cartItem => ({
  type: UPDATE_CART_ITEM,
  cartItem
})

const addToCart = product => ({
  type: ADD_TO_CART,
  product
})

//Thunks
export const showCart = userId => {
  return async dispatch => {
    try {
      const {data} = await axios.get(`/api/order/cart/${userId}`)
      dispatch(showAllCart(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const deleteCartItem = (userId, requestInfo) => {
  return async dispatch => {
    try {
      const {data} = await axios.delete(
        `/api/order/cart/${userId}?productId=${requestInfo.productId}&orderId=${
          requestInfo.orderId
        }`
      )
      dispatch(showCart(userId))
    } catch (error) {
      console.error(error)
    }
  }
}

export const updateCartQuantity = cartItem => {
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/cart/${cartItem.id}`, cartItem)
      dispatch(updateCartItem(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const addItemToCart = (userId, orderInfo) => {
  return async dispatch => {
    try {
      const {data} = await axios.post(`/api/order/cart/${userId}`, orderInfo)
      dispatch(addToCart(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const incrementQuantity = (userId, orderInfo) => {
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/order/cart/${userId}`, orderInfo)
      dispatch(showCart(userId))
    } catch (error) {
      console.error(error)
    }
  }
}

//Initial State
const initialState = []

//Reducer
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_ALL_CART:
      return action.cartItems
    case DELETE_FROM_CART:
      return state.filter(cartItem => cartItem.id !== action.cartItem.id)
    case UPDATE_CART_ITEM:
      return state.map(
        cartItem =>
          cartItem.id === action.cartItem.id ? action.cartItem : cartItem
      )
    case ADD_TO_CART:
      return [...state, action.product]

    default:
      return state
  }
}
