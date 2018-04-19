import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
import App from './components/App'
import NotFound from './components/NotFound'
import Landing from './components/Landing'
import './css/main.sass'

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
