import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { disableHeader } from '../../actions/headerActions'

import instagramLogo from './../../assets/Instagram.svg'

import {
  LoginContainer,
  FormLogin,
  InstagramLogo,
  LoginDesc,
  Separator,
  ChangeForm,
  ChangeFormLink
} from './components'

const AccountPage = () => {
  const dispatch = useDispatch()

  const [ formType, setFormType ] = useState('register')

  useEffect(() => {
    dispatch(disableHeader())
  }, [])

  const renderFormLogin = () => {
    return (
      <div>
        Login
      </div>
    )
  }

  const renderFormRegister = () => {
    return (
      <div>
        Register
      </div>
    )
  }

  const renderChangeForm = () => {
    return formType === 'login'
      ? (
        <>
          Não tem uma conta?
          <ChangeFormLink onClick={() => setFormType('register')}>
            Cadastre-se
          </ChangeFormLink>
        </>
      )
      : (
        <>
          Tem uma conta?
          <ChangeFormLink onClick={() => setFormType('login')}>
            Conecte-se
          </ChangeFormLink>
        </>
      )
  }

  return (
    <LoginContainer>
      <FormLogin>
        <InstagramLogo src={instagramLogo} />
        <LoginDesc>
          { formType === 'login' ? 'Conecte-se' : 'Cadastre-se' }
          para ver fotos e vídeos dos seus amigos.
        </LoginDesc>
        <Separator />
        {
          formType === 'login'
            ? renderFormLogin()
            : renderFormRegister()
        }
      </FormLogin>
      <ChangeForm>
        { renderChangeForm() }
      </ChangeForm>
    </LoginContainer>
  )
}

export default AccountPage
