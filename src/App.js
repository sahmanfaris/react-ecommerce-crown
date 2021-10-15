import { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SignInAndSignUp from "./pages/signin-and-signup/SignInAndSignUp";
import "./App.css";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) =>
      setCurrentUser(user)
    );

    return () => unsubscribe();
  }, []);
  return (
    <>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
        <Route path="/contact">
          <ShopPage />
        </Route>
        <Route path="/signin">
          <SignInAndSignUp />
        </Route>
      </Switch>
    </>
  );
};

export default App;
