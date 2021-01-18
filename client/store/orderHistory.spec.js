import {expect} from 'chai'
import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
import {getOrderHistory, fetchOrderHistory} from './orderHistory'
import mockAxios from '../mock-axios'

const middlewares = [thunkMiddleware]
const mockStore = configureMockStore(middlewares)

describe('Order History Store', () => {
  it('should have one action creator', () => {})
})
