import axios from 'axios'

const initialState = {
  allUsers: []
}

//action type
const GET_USERS = 'GET_USERS'

//action creator
export const getUsers = users => ({type: GET_USERS, users})

//thunk creator
export const getUsersThunk = () => {
  return async dispatch => {
    try {
      const res = await axios.get('/api/users')
      const usersData = res.data
      dispatch(getUsers(usersData))
    } catch (error) {
      console.log('Unable to get all users', error)
      console.error(error)
    }
  }
}

//reducer
export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {...state, allUsers: action.users}
    default:
      return state
  }
}
