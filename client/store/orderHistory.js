import axios from 'axios'

const GET_ORDER_HISTORY = 'GET_ORDER_HISTORY'

const getOrderHistory = orders => ({
  type: GET_ORDER_HISTORY,
  orders
})

export const fetchOrderHistory = userId => {
  return async dispatch => {
    try {
      const pastOrders = axios.get(`/api/order/history/${userId}`)
      dispatch(getOrderHistory(pastOrders))
    } catch (error) {
      console.error(error)
    }
  }
}

export default function historyReducer(state = [], action) {
  switch (action.type) {
    case GET_ORDER_HISTORY:
      return action.orders
    default:
      return state
  }
}
