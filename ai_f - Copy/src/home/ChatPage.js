import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = { sender: 'user', text: input };

      // Add the user's message to the chat
      const updatedMessages = [...messages, newMessage];

      // Simulate a response from the chatbot
      setTimeout(() => {
        const botMessage = { sender: 'bot', text: "This is a response from the bot." };
        const finalMessages = [...updatedMessages, botMessage];
        setMessages(finalMessages);
      }, 1000);

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
        <div className="absolute top-4 left-4">
          {/* New Chat Button */}
          <button
            onClick={handleNewChat}
            className="p-3 bg-red-500 text-white rounded-lg"
          >
            Start New Chat
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col p-4 pt-16">
        {/* Chat History */}
        <div className="flex flex-col space-y-4 flex-grow overflow-y-auto">
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
        <div className="bg-white p-4 border-t border-gray-200 fixed bottom-0 left-0 right-0">
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