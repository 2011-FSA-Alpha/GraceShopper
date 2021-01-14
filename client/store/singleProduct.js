import axios from 'axios'

//initial state
const initialState = {}

//action type
const SET_PRODUCT = 'SET_PRODUCT'

//action creator
export const setProduct = product => ({type: SET_PRODUCT, product})

//thunk creator
export const fetchProduct = id => {
  return async dispatch => {
    try {
      const res = await axios.get(`/api/products/${id}`)
      const productData = res.data
      dispatch(setProduct(productData))
    } catch (error) {
      console.log('Unable to fetch single product', error)
      console.error(error)
    }
  }
}

//reducer
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return action.product
    default:
      return state
  }
}
