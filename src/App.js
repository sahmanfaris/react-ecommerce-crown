import { Switch, Route, Link } from 'react-router-dom'
import Homepage from './pages/homepage/Homepage'
import './App.css'

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/about'>
          <div>about</div>
        </Route>
      </Switch>
    </>
  )
}

export default App
