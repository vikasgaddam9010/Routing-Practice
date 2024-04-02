import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

import {Route, Switch} from 'react-router-dom'

const App = () => (
  <div className="bg-container">
    <Header />
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/contact" component={Contact}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </div>
)

export default App
