import React from "react";
import {ChatEngine} from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import './App.css';

const App=() =>{
  if(!localStorage.getItem('username'))return<LoginForm/>
  return (
    <ChatEngine 
       height="100vh"
       projectID="
       9f30b817-6162-4608-b511-68d35f8cd7cb"
       userName={localStorage.getItem('username')}
       userSecret={localStorage.getItem('password')}
       renderChatFeed={(chatAppProps)=><ChatFeed{
         ...chatAppProps}
       
      />}
    />)
  
};

export default App;
