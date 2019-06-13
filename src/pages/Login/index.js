import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { disableHeader } from '../../actions/headerActions'

const LoginPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(disableHeader())
  }, [])

  return (
    <div>
      Login
    </div>
  )
}

export default LoginPage
