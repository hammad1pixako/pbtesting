// src/App.js
import React from 'react';
import ChatHeader from './Components/ChatHeader';
import MessageList from './Components/MessageList';
import MessageInput from './Components/MessageInput';

const App = () => {
  return (
    <div className="h-screen flex flex-col">
      <ChatHeader />
      <MessageList />
      <MessageInput />
    </div>
  );
};

export default App;
