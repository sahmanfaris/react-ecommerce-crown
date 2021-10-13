import { Switch, Route, Link } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import "./App.css";
import ShopPage from "./pages/shop/ShopPage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
