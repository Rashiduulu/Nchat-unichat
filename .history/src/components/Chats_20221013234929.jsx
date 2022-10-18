import React, { useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import axios from "axios";

import { useAuth } from "../contexts/AuthContext";

const Chats = () => {
  const history = useHistory();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true)

  const handleLogout = async () => {
    await auth.signOut();

    history.push("/");
  };

  const getFile = async (url) => {
    const response = await fetch(url)
    const data = await response
  }

  useEffect(() => {
    if (!user) {
      history.push("/");

      return;
    }

    axios.get("https://api.chatengine.io/users/me", {
      headers: {
        "project-id": "d41d952c-af44-42f2-bbfd-de8817892134",
        "user-name": user.email,
        "user-secret" : user.uid,
      },
    })
    .then(() => {
      setLoading(false)
    })
      .catch(() => {
        let formdata = new FormData()
        formdata.append('email', user.email)
        formdata.append('username', user.displayName)
        formdata.append('secret', user.uid)

    })
  }, [user, history]);

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Nchat</div>
        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>

      <ChatEngine
        height="calc(100vh - 66px)"
        projectId="
d41d952c-af44-42f2-bbfd-de8817892134"
        userName="."
        userSecret="."
      />
    </div>
  );
};

export default Chats;
