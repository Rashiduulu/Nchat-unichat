import React from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";

const Chats = () => {
    
    const handleLogout = async () => {
        await auth.signOut()
    }

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Nchat</div>
        <div onClick={handleLogout} className="logout-tab">Logout</div>
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