import React, { useState } from 'react';

const MessageInput = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  return (
    <div className="flex items-center p-4 border-t-2 border-gray-300">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 p-2 border rounded-lg"
        placeholder="Type a message..."
      />
      <button
        onClick={handleSend}
        className="ml-2 p-2 bg-blue-600 text-white rounded-lg"
      >
        Send
      </button>
    </div>
  );
};

export default MessageInput;
