import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { NotFound } from './404'
import { Balance } from './balance'
import { Bond } from './bond'
import { Delegate } from './delegate'
import { Receive } from './receive'
import { Send } from './send'
import { SignIn } from './sign-in'
import { Unbond } from './unbond'
import { Undelegate } from './undelegate'

export const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <SignIn />
      </Route>
      <Route path="/balance">
        <Balance />
      </Route>
      <Route path="/send">
        <Send />
      </Route>
      <Route path="/receive">
        <Receive />
      </Route>
      <Route path="/bond">
        <Bond />
      </Route>
      <Route path="/unbond">
        <Unbond />
      </Route>
      <Route path="/delegate">
        <Delegate />
      </Route>
      <Route path="/undelegate">
        <Undelegate />
      </Route>
      <Route path="/signin">
        <SignIn />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  </Router>
)