import React, { Component } from 'react'
import createBrowserHistory from 'history/createBrowserHistory'
import {
  Router,
  Route,
  Switch,
} from 'react-router-dom'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'
import Mine from './components/mine'
import Find from './components/find'
import Home from './components/home'
import Sale from './components/sale'
import Forge from './components/forge'
import Market from './components/market'
import Witness from './components/witness'

class App extends Component {
  render() {
    const history = createBrowserHistory()
    return (
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route path="/mine" component={Mine} />
            <Route path="/find" component={Find} />
            <Route path="/forge" component={Forge} />
            <Route path="/market" component={Market} />
            <Route path="/sale/:id" component={Sale} />
            <Route path="/witness/:id" component={Witness} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App
