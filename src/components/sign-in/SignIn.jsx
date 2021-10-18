import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/CustomButton";
import FormInput from "../form-input/FormInput";
import "./SignIn.styles.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          handleChange={(e) => setEmail(e.target.value)}
          value={email}
          id="email"
          required
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          handleChange={(e) => setPassword(e.target.value)}
          value={password}
          id="password"
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
