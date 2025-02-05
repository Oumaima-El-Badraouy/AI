import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCloudUploadAlt, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);

  const handleSendMessage = async () => {
    if (input.trim()) {
      const newMessage = { sender: 'user', text: input };
  
      // Add the user's message to the chat
      const updatedMessages = [...messages, newMessage];
  
      setMessages(updatedMessages);
  
      try {
        const response = await fetch('http://localhost:5000/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: input }),
        });
        const data = await response.json();
  
        // Add the bot's response to the chat
        const botMessage = {
          sender: 'bot',
          text: `ChatGPT: ${data.botResponse}\nRAG: ${data.ragResponse}`,
        };
  
        setMessages([...updatedMessages, botMessage]);
      } catch (error) {
        console.error("Error sending message:", error);
      }
  
      setInput(""); // Clear input after sending
    }
  };
  

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      const newMessage = { sender: 'user', text: `Uploaded file: ${uploadedFile.name}` };
      setMessages([...messages, newMessage]);
    }
  };

  const handleNewChat = () => {
    // Save the current chat to history when starting a new chat
    if (messages.length > 0) {
      setChatHistory([
        ...chatHistory,
        { name: messages[0].text, messages: messages }
      ]);
    }

    // Clear current chat and reset state for new chat
    setMessages([]);
    setFile(null); // Clear the uploaded file
    setCurrentChat(null); // Reset the current chat view
  };

  const handleHistoryClick = (chat) => {
    setMessages(chat.messages); // Set the messages of the selected chat
    setCurrentChat(chat); // Set the selected chat as current
  };

  const handleLogout = () => {
    // Handle logout logic here
    console.log("User logged out");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar with Chat History */}
      <div className="w-1/4 bg-gray-800 text-white p-4">
        <div className="text-xl font-semibold mb-4">Chat History</div>
        <div className="space-y-3">
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className="cursor-pointer p-2 rounded-lg hover:bg-gray-700"
              onClick={() => handleHistoryClick(chat)}
            >
              {chat.name}
            </div>
          ))}
        </div>
      

        {/* Profile and Logout Section */}
        <div className="absolute bottom-4 left-4 flex items-center space-x-4">
          {/* Profile Icon */}
          <div className="relative w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
            <FontAwesomeIcon icon={faUserCircle} size="lg" />
          </div>
          <button
            onClick={handleNewChat}
            className="w-3/4 p-2 bg-white text-black rounded-lg"
          >
            Start New Chat
          </button>
          {/* Logout Icon */}
          <button
            onClick={handleLogout}
            className="text-white hover:text-gray-300 flex items-center"
          >
            <strong className='text-gray-200'>Logout</strong><FontAwesomeIcon icon={faSignOutAlt} size="lg" className='ml-2' /> 
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Messages */}
        <div className="flex-grow overflow-y-auto p-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`p-3 rounded-lg max-w-xs text-white ${
                  msg.sender === 'user' ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {file && (
            <div className="flex justify-start">
              <div className="p-3 rounded-lg max-w-xs text-white bg-gray-500">
                <p>Uploaded File: {file.name}</p>
              </div>
            </div>
          )}
        </div>

        {/* Input, File Upload, and Send Message at the bottom */}
        <div className="bg-white p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
            />

            {/* Upload File Button */}
            <label htmlFor="file-upload" className="flex items-center space-x-2 text-blue-500 cursor-pointer">
              <FontAwesomeIcon icon={faCloudUploadAlt} size="lg" />
              <span>Upload</span>
            </label>
            <input
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />

            {/* Send Message Button */}
            <button
              onClick={handleSendMessage}
              className="p-3 bg-blue-500 rounded-full text-white"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;