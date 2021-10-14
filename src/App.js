import { Switch, Route, Link } from 'react-router-dom'
import Homepage from './pages/homepage/Homepage'
import './App.css'
import ShopPage from './pages/shop/ShopPage'
import Header from './components/header/Header'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/shop'>
          <ShopPage />
        </Route>
        <Route path='/contact'>
          <ShopPage />
        </Route>
      </Switch>
    </>
  )
}

export default App
