import React from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { FeedPage, NewPage, LoginPage } from './pages'
import Header from './components/Header'

function Routes () {
  const { useHeader } = useSelector(state => state.header)
  return (
    <>
      { useHeader && <Header /> }
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/' exact component={FeedPage} />
        <Route path='/new' component={NewPage} />
      </Switch>
    </>
  )
}

export default Routes
