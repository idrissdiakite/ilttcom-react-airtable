import React, { useState, useEffect } from "react";
import Signin from "../components/Connexion/Signin";
import Connected from "../components/Connexion/Connected";
import { firebase } from "./../utils/firebaseConfig";
import "firebase/compat/auth";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
  firebase.auth().onAuthStateChanged((user) => {
      // permet de vérifier que la variable user contient quelque chose
    setIsSignedIn(!!user);
    // console.log(user)
  });
}, []);

  if (isSignedIn === true) {
    return (
      <span className="login-container">
      <Connected />
      </span>
    );
  } 
  
  else {
    return (
      <span className="login-container">
      <Signin />
      </span>
    );
  }
};

export default Login;
