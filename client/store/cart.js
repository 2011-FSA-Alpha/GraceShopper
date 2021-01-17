import axios from 'axios'

//Action Types
const GET_CART = 'SHOW_ALL_CART'
const DELETE_FROM_CART = 'DELETE_FROM_CART'
const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM'
const ADD_TO_CART = 'ADD_TO_CART'

//Action Creators
const showAllCart = cartItems => ({
  type: GET_CART,
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

export const deleteCartItem = (userId, cartItem) => {
  return async dispatch => {
    try {
      const {data} = await axios.delete(
        `/api/order/cart/${userId}?productId=${cartItem.productId}&orderId=${
          cartItem.orderId
        }`
      )
      dispatch(deleteFromCart(cartItem))
    } catch (error) {
      console.error(error)
    }
  }
}

export const addItemToCart = (userId, cartItem) => {
  return async dispatch => {
    try {
      console.log(cartItem)
      const {data} = await axios.post(`/api/order/cart/${userId}`, cartItem)
      dispatch(addToCart(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const incrementQuantity = (userId, cartItem) => {
  return async dispatch => {
    try {
      const {data} = await axios.put(`/api/order/cart/${userId}`, cartItem)
      dispatch(updateCartItem(cartItem))
    } catch (error) {
      console.error(error)
    }
  }
}

//Initial State
const initialState = {}

//Reducer
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return action.cartItems
    case DELETE_FROM_CART:
      return {
        ...state,
        products: state.products.filter(product => {
          if (product.id !== action.cartItem.productId) {
            return product
          }
        })
      }
    case UPDATE_CART_ITEM:
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.cartItem.productId) {
            product.orderproducts.quantity += action.cartItem.quantity
            return product
          }
          return product
        })
      }
    case ADD_TO_CART:
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.product.productId) {
            product.orderproducts = action.product
            return product
          }
          return product
        })
      }
    default:
      return state
  }
}
