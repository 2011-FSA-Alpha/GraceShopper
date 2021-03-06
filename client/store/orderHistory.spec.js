import {expect} from 'chai'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import {getOrderHistory, fetchOrderHistory} from './orderHistory'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('Order History Store', () => {
  it('should have one action creator', () => {})
})
