import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

export const FormLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  background-color: white;
  margin: 0 auto;
  padding: 0 30px;
  align-items: center;
  border: 1px solid #DDD;
`

export const InstagramLogo = styled.img`
  margin: 20px;
  height: 60px;
`

export const LoginDesc = styled.div`
  font-weight: 600;
  line-height: 20px;
  font-size: 17px;
  margin: 0 40px 10px;
  color: #999;
  text-align: center;
`

export const Separator = styled.div`
  border: .5px solid #DDD;
  width: 100%;
  margin: 10px 0 20px 0;
`

export const ChangeForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  width: 100%;
  max-width: 400px;
  background-color: white;
  padding: 20px;
  border: 1px solid #DDD;
`

export const ChangeFormLink = styled.span`
  color: #3897f0;
  cursor: pointer;
  margin: 0 5px;
`
