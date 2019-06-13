import { CHANGE_AUTH } from '../actions/actionTypes'

const initialState = {
  authenticated: false,
  token: null,
  name: null,
  email: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return { ...state, ...action.value }
    default:
      return state
  }
}
