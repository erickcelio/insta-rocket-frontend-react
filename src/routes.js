import React from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { FeedPage, NewPage, AccountPage } from './pages'
import Header from './components/Header'

function Routes () {
  const { useHeader } = useSelector(state => state.header)
  return (
    <>
      { useHeader && <Header /> }
      <Switch>
        <Route path='/accounts' component={AccountPage} />
        <Route path='/' exact component={FeedPage} />
        <Route path='/new' component={NewPage} />
      </Switch>
    </>
  )
}

export default Routes
