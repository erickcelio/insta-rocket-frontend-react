import { CHANGE_AUTH } from './actionTypes'

const changeAuth = (value) => {
  return {
    type: CHANGE_AUTH,
    value
  }
}

export {
  changeAuth
}
