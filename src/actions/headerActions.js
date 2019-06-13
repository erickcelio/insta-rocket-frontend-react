import { CHANGE_HEADER, CHANGE_USE_HEADER } from './actionTypes'

const changeHeader = (value) => {
  return {
    type: CHANGE_HEADER,
    value
  }
}

const enableHeader = () => {
  return {
    type: CHANGE_USE_HEADER,
    value: true
  }
}

const disableHeader = () => {
  return {
    type: CHANGE_USE_HEADER,
    value: false
  }
}

export {
  changeHeader,
  enableHeader,
  disableHeader
}
