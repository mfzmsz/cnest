import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { products } from '../data/products';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'bot' | 'user'; includeLink?: boolean }[]>([
    { text: 'Hello! Welcome to Code Nest. How can I help you today?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { text: input, sender: 'user' }]);
    const lowerInput = input.toLowerCase();
    setInput('');

    // Simple response logic
    setTimeout(() => {
      let response = '';
      let includeLink = false;
      
      if (lowerInput.includes('team') || lowerInput.includes('connect') || lowerInput.includes('contact')) {
        response = 'I\'ll be happy to connect you with our team. You can reach us through our contact page here:';
        includeLink = true;
      } else if (lowerInput.includes('ai') || lowerInput.includes('artificial intelligence')) {
        response = 'We offer various AI solutions including AI Tendering Manager, CRM Manager, HR Manager, and Chatbots. Would you like to learn more about these solutions?';
      } else if (lowerInput.includes('iot') || lowerInput.includes('internet of things')) {
        response = 'Our IoT solutions include Fleet Management, Waste Management, and Smart Cities solutions. Would you like more information?';
      } else if (lowerInput.includes('web') || lowerInput.includes('website')) {
        response = 'We provide full-stack web development solutions including Interactive Web Applications and Asset Management Systems.';
      } else if (lowerInput.includes('help')) {
        response = 'I can help you learn more about our solutions, or connect you with our team. What would you like to know?';
      } else {
        response = 'I\'d be happy to help you learn more about our solutions. You can ask about our AI, IoT, or Web Development services, or I can connect you with our team.';
      }

      setMessages(prev => [...prev, { text: response, sender: 'bot', includeLink }]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      <motion.button
        className="fixed bottom-4 right-4 bg-[#9b87f5] text-white p-4 rounded-full shadow-lg hover:bg-[#8b77e5] transition-colors"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageSquare size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 w-96 bg-white rounded-lg shadow-xl overflow-hidden z-50"
          >
            <div className="bg-gradient-to-r from-[#1A1F2C] to-[#2A2F3C] p-4 flex justify-between items-center">
              <h3 className="text-white font-semibold">Code Nest Assistant</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-[#9b87f5] transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-4 bg-gradient-to-b from-gray-50 to-white">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    message.sender === 'bot' ? 'text-left' : 'text-right'
                  }`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      message.sender === 'bot'
                        ? 'bg-gradient-to-r from-[#1A1F2C] to-[#2A2F3C] text-white'
                        : 'bg-[#9b87f5] text-white'
                    }`}
                  >
                    {message.text}
                    {message.includeLink && (
                      <div className="mt-2">
                        <Link 
                          to="/contact" 
                          className="inline-block px-4 py-2 bg-[#9b87f5] text-white rounded hover:bg-[#8b77e5] transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          Contact Us
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b87f5]"
                />
                <button
                  onClick={handleSend}
                  className="bg-[#9b87f5] text-white p-2 rounded-lg hover:bg-[#8b77e5] transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;