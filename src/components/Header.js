import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './Header.css'

import logo from '../assets/logo.svg'
import camera from '../assets/camera.svg'

class HeaderComponent extends Component {
  async componentDidMount () {
    await this.authenticatedUser()
  }

  async authenticatedUser () {
    const { auth, history } = this.props
    console.log(auth)
    const { authenticated } = auth
    if (!authenticated) {
      const token = window.localStorage.getItem('token')
      if (token) {
        console.log(token)
      }
      history.push('/accounts')
    }
  }

  render () {
    return (
      <header id='main-header'>
        <div className='header-content'>
          <Link to='/'>
            <img src={logo} alt='InstaRocket' />
          </Link>
          <Link to='/new'>
            <img src={camera} alt='Enviar Publicação' />
          </Link>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (state) => {
  const { auth } = state
  return { auth }
}

HeaderComponent.propTypes = {
  auth: PropTypes.object,
  history: PropTypes.object
}

export default withRouter(connect(mapStateToProps)(HeaderComponent))
