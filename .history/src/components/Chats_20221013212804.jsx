import React, {useR} from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";

import { useAuth } from "../contexts/AuthContext";

const Chats = () => {
  const history = useHistory();
    const { user } = useAuth();
    
    console.log(user)

  const handleLogout = async () => {
    await auth.signOut();

    history.push("/");
  };

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
