import {Route, Switch} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route  path='/about' component={About}/>
    </Switch>
  )
}

export default App
