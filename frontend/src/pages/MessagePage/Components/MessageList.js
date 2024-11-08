import React from 'react';
import MessageBubble from './MessageBubble';

const MessageList = () => {
  const messages = [
    { text: 'Hi!', isUser: false },
    { text: 'Hey, how are you?', isUser: true },
    { text: 'I am good, thanks!', isUser: false },
  ];

  return (
    <div className="flex flex-col p-4 space-y-4 overflow-auto max-h-[500px]">
      {messages.map((msg, index) => (
        <MessageBubble key={index} message={msg.text} isUser={msg.isUser} />
      ))}
    </div>
  );
};

export default MessageList;
