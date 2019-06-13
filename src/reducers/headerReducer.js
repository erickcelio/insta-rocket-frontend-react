import { CHANGE_HEADER, CHANGE_USE_HEADER } from '../actions/actionTypes'

const initialState = {
  useHeader: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_HEADER:
      return { ...state, ...action.value }
    case CHANGE_USE_HEADER:
      return {
        ...state,
        useHeader: action.value
      }
    default:
      return state
  }
}
