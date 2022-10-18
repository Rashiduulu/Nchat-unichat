import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";
import "firebase/app";
import { getAuth, signInWithRedirect } from "firebase/auth";


const Login = () => {
  const login = () => {
    const auth = getAuth();
    signInWithRedirect(auth);
  };

  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to Inichat !</h2>
        <div
          className="login-button google"
          onClick={login()
          }
        >
          <GoogleOutlined /> Sign In with Google
        </div>
        <br /> <br />
        <div
          className="login-button facebook"
      
        >
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
};

export default Login;
