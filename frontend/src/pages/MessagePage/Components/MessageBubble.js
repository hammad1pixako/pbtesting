import React from 'react';

const MessageBubble = ({ message, isUser }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} p-2`}>
      <div
        className={`max-w-xs p-3 rounded-lg ${
          isUser ? 'bg-blue-500 text-white' : 'bg-gray-300'
        }`}
      >
        {message}
      </div>
    </div>
  );
};

export default MessageBubble;
