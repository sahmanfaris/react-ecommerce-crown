import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { onAuthStateChanged } from "@firebase/auth";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import Header from "./components/header/Header";
import SignInAndSignUp from "./pages/signin-and-signup/SignInAndSignUp";
import "./App.css";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { onSnapshot } from "firebase/firestore";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, (doc) => {
          setCurrentUser({ id: doc.id, ...doc.data() });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => unsubscribe();
  }, []);
  return (
    <>
      <Header />
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
