import React, { useState, useEffect } from 'react';

const TextToSpeech = () => {
  // State to hold the text input
  const [text, setText] = useState('');
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);

  // Get available voices when the component mounts
  useEffect(() => {
    // Ensure voices are loaded
    const handleVoicesChanged = () => {
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);
      if (availableVoices.length > 0) {
        setSelectedVoice(availableVoices[0]); // Set default voice
      }
    };

    // Initial voices load
    handleVoicesChanged();

    // Listen for changes in available voices (e.g., after system voices load)
    speechSynthesis.onvoiceschanged = handleVoicesChanged;

    return () => {
      // Cleanup event listener on unmount
      speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  // Function to handle text-to-speech conversion
  const speakText = () => {
    if (text.trim() === '') {
      alert('Please enter some text!');
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
      console.log(utterance)

    }
    utterance.rate = 1; // Speed of speech
    utterance.pitch = 1; // Pitch of speech
    utterance.volume = 1; // Volume level (0 to 1)

    // Speak the text
    speechSynthesis.speak(utterance);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Text-to-Speech Converter</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="5"
        cols="40"
        placeholder="Enter text here..."
        style={{ width: '100%', fontSize: '16px' }}
      ></textarea>
      <br />
      <button
        onClick={speakText}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        Speak
      </button>

      <br /><br />
      <label>
        Select Voice:
        <select
          value={selectedVoice?.name || ''}
          onChange={(e) => {
            const voice = voices.find((v) => v.name === e.target.value);
            setSelectedVoice(voice);
          }}
          style={{ padding: '5px' }}
        >
          {voices.map((voice) => (
            <option key={voice.name} value={voice.name}>
              {voice.name} ({voice.lang})
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default TextToSpeech;




// src/ResetPassword.js
// import React, { useState } from 'react';

// const Test = () => {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [token] = useState(new URLSearchParams(window.location.search).get('token'));

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       alert("Passwords don't match.");
//       return;
//     }

//     try {
//       const response = await fetch('/api/reset-password', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ token, password }),
//       });

//       if (response.ok) {
//         alert('Password has been reset successfully.');
//       } else {
//         alert('Error resetting password. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error resetting password. Please try again.');
//     }
//   };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-blue-500">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//         <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Reset Your Password</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="password">
//               New Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="shadow-md appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Enter your new password"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="confirm-password">
//               Confirm Password
//             </label>
//             <input
//               type="password"
//               id="confirm-password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               required
//               className="shadow-md appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Confirm your new password"
//             />
//           </div>
//           <div className="flex items-center justify-between mb-4">
//             <button
//               type="submit"
//               className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out"
//             >
//               Reset Password
//             </button>
//           </div>
//         </form>
//         <p className="mt-4 text-center text-gray-600 text-sm">
//           Remembered your password? <a href="#" className="text-indigo-600 hover:underline">Log In</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Test;
