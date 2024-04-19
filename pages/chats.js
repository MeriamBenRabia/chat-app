import React, { useState, useEffect, useContext }from "react";

import { Context } from "../context";

import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);

const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Chats() {
  const {username, secret, userType} = useContext(Context);
  const [showChat, setShowChat] = useState(false);
const router = useRouter();

useEffect(() => {
  if(typeof document !== null) {
    setShowChat(true);
  }
});


useEffect(() => {
  if(username.lenght === 0 || secret.length === 0 || !userType) router.push("/");
})


if(!showChat) return <div/>

  return <div className="background">
    <div className="shadow">
      <ChatEngine
        height='calc(100vh - 100px)'
        projectID='eadf76a8-7fe6-4c99-8b73-491bee6c35d5'
        userName={username + " - " + userType}
        userSecret={secret}

      />
    </div>
  </div>;
}
