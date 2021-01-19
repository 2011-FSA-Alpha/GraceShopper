import axios from 'axios'

//initial state
const initialState = {}

//action type
const SET_PRODUCT = 'SET_PRODUCT'
const ADD_PRODUCT = 'ADD_PRODUCT'
const EDIT_PRODUCT = 'EDIT_PRODUCT'
const DELETE_PRODUCT = 'DELETE_PRODUCT'

//action creator
export const setProduct = product => ({type: SET_PRODUCT, product})
export const addProduct = product => ({type: ADD_PRODUCT, product})

const editProduct = product => ({
  type: EDIT_PRODUCT,
  product
})

const deleteProduct = product => ({
  type: DELETE_PRODUCT,
  product
})

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

export const addProductThunk = (id, product) => {
  return async dispatch => {
    try {
      const res = await axios.post(`/api/products/${id}`, product)
      const newProduct = res.data
      dispatch(addProduct(newProduct))
    } catch (error) {
      console.log('Unable to add a new product', error)
      console.error(error)
    }
  }
}

export const adminEditProduct = product => {
  return async dispatch => {
    try {
      console.log(product)
      const {data} = await axios.put(`/api/products/${product.id}`, product)

      dispatch(editProduct(data))
    } catch (error) {
      console.error(error)
    }
  }
}

export const adminDeleteProduct = product => {
  return async dispatch => {
    try {
      await axios.delete(`/api/products/${product.id}`)
      dispatch(deleteProduct(product))
    } catch (error) {
      console.error(error)
    }
  }
}

//reducer
export default function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return action.product
    case ADD_PRODUCT:
      return action.product
    case EDIT_PRODUCT:
      return action.product
    case DELETE_PRODUCT:
      return action.product
    default:
      return state
  }
}
