import React from "react"
import Login from "./Login"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
// import { AuthProvider } from "../contexts/AuthContext"

// import Chats from "./Chats"
import { }"firebase/app";
import { auth } from "../firebase";
import firebase from "firebase/app";

function App() {
  return (
    <div style={{ fontFamily: 'Avenir' }}>
      <div onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleOutlined())}>Hello</div>
      <Router>
        {/* <AuthProvider> */}
          <Switch>
            {/* <Route path="/chats" component={Chats} /> */}
            <Route path="/" component={Login} /> 
          </Switch>
        {/* </AuthProvider> */}
      </Router>
    </div>
  ) 
}

export default App
