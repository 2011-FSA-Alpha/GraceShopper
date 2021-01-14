import axios from 'axios'

const initialState = []

const SET_PRODUCTS = 'SET_PRODUCTS'

export const setProducts = productData => ({
  type: SET_PRODUCTS,
  products: productData
})

export const getProducts = () => {
  return async dispatch => {
    const products = await axios.get('/api/products')
    dispatch(setProducts(products.data))
  }
}

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      state = action.products
      return state
    default:
      return state
  }
}
