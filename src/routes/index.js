import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ROUTER_PATHS from 'constants/router'
import Home from 'pages/Home'
import Profile from 'pages/Profile'

const Routes = () => (
  <Switch>
    <Route exact path={ROUTER_PATHS.HOME} component={Home} />
    <Route path={ROUTER_PATHS.PROFILE} component={Profile} />
  </Switch>
)

export default Routes
