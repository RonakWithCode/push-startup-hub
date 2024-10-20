'use client'

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiCheck, FiInfo, FiStar, FiMenu, FiPlusCircle, FiX, FiTrash2, FiCopy } from 'react-icons/fi';
import { Montserrat, Poppins } from 'next/font/google';
import { GoogleGenerativeAI } from "@google/generative-ai";

const montserrat = Montserrat({ subsets: ['latin'] });
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] });

export default function AINameGeneratorPage() {
  const [formData, setFormData] = useState({
    industry: '',
    keywords: '',
    tone: '',
    length: 'medium',
    targetAudience: '',
    uniqueSellingPoint: '',
    companyValues: '',
    geographicFocus: '',
    description: '',
  });
  const [generatedNames, setGeneratedNames] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [savedChats, setSavedChats] = useState([]);
  const [savedNames, setSavedNames] = useState([]);
  const [currentChatIndex, setCurrentChatIndex] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [chatToDelete, setChatToDelete] = useState(null);

  useEffect(() => {
    const savedChatsData = JSON.parse(localStorage.getItem('savedChats') || '[]');
    const savedNamesData = JSON.parse(localStorage.getItem('savedNames') || '[]');
    setSavedChats(savedChatsData);
    setSavedNames(savedNamesData);
    if (savedChatsData.length > 0) {
      setCurrentChatIndex(0);
      setFormData(savedChatsData[0].formData);
      setGeneratedNames(savedChatsData[0].generatedNames);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsGenerating(true);

    try {
      const prompt = `Generate 5 unique and creative business names based on the following criteria:
        Industry: ${formData.industry}
        Keywords: ${formData.keywords}
        Tone: ${formData.tone}
        Preferred Length: ${formData.length}
        Target Audience: ${formData.targetAudience}
        Unique Selling Point: ${formData.uniqueSellingPoint}
        Company Values: ${formData.companyValues}
        Geographic Focus: ${formData.geographicFocus}
        ${formData.description ? `Company Description: ${formData.description}` : ''}

        Please provide only the names, one per line, without any additional explanation or numbering.`;

      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const generatedText = response.text();

      const names = generatedText.split('\n')
        .filter(name => name.trim() !== '')
        .map(name => ({ name: name.trim(), isSaved: false }));
      const newGeneratedNames = [...names, ...generatedNames];
      setGeneratedNames(newGeneratedNames);

      // Save or update the current chat
      const chatData = {
        formData: { ...formData },
        generatedNames: newGeneratedNames,
        timestamp: new Date().toISOString(),
      };

      let updatedSavedChats;
      if (currentChatIndex !== null) {
        updatedSavedChats = [...savedChats];
        updatedSavedChats[currentChatIndex] = chatData;
      } else {
        updatedSavedChats = [...savedChats, chatData];
        setCurrentChatIndex(updatedSavedChats.length - 1);
      }

      setSavedChats(updatedSavedChats);
      localStorage.setItem('savedChats', JSON.stringify(updatedSavedChats));
    } catch (error) {
      console.error('Error generating names:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSaveName = (nameObj) => {
    const updatedNames = generatedNames.map(n => 
      n.name === nameObj.name ? { ...n, isSaved: !n.isSaved } : n
    );
    setGeneratedNames(updatedNames);
    
    // Update savedNames
    const updatedSavedNames = nameObj.isSaved
      ? savedNames.filter(n => n.name !== nameObj.name)
      : [...savedNames, { ...nameObj, isSaved: true, timestamp: new Date().toISOString() }];
    setSavedNames(updatedSavedNames);
    localStorage.setItem('savedNames', JSON.stringify(updatedSavedNames));

    // Update the current chat in savedChats
    const updatedSavedChats = savedChats.map((chat, index) => 
      index === currentChatIndex ? { ...chat, generatedNames: updatedNames } : chat
    );
    setSavedChats(updatedSavedChats);
    localStorage.setItem('savedChats', JSON.stringify(updatedSavedChats));
  };

  const handleChatSelect = (index) => {
    setCurrentChatIndex(index);
    setFormData(savedChats[index].formData);
    setGeneratedNames(savedChats[index].generatedNames);
    setIsSidebarOpen(false);
  };

  const handleNewChat = () => {
    setCurrentChatIndex(null);
    setFormData({
      industry: '',
      keywords: '',
      tone: '',
      length: 'medium',
      targetAudience: '',
      uniqueSellingPoint: '',
      companyValues: '',
      geographicFocus: '',
      description: '',
    });
    setGeneratedNames([]);
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleDeleteChat = (index) => {
    setChatToDelete(index);
    setShowDeleteConfirmation(true);
  };

  const confirmDeleteChat = () => {
    const updatedChats = savedChats.filter((_, index) => index !== chatToDelete);
    setSavedChats(updatedChats);
    localStorage.setItem('savedChats', JSON.stringify(updatedChats));
    setShowDeleteConfirmation(false);
    if (currentChatIndex === chatToDelete) {
      handleNewChat();
    } else if (currentChatIndex > chatToDelete) {
      setCurrentChatIndex(currentChatIndex - 1);
    }
  };

  const handleCopyName = (name) => {
    navigator.clipboard.writeText(name).then(() => {
      // You could add a temporary "Copied!" message here
      console.log('Name copied to clipboard');
    });
  };

  const handleExportNames = () => {
    const namesText = generatedNames.map(n => n.name).join('\n');
    const blob = new Blob([namesText], { type: 'text/plain' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = 'generated_names.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-gray-900 to-black text-white ${montserrat.className}`}>
      <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] opacity-10"></div>
      <div className="flex relative">
        {/* Sidebar */}
        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3 }}
              className="fixed left-0 top-0 h-full w-full sm:w-80 bg-gray-800 p-4 overflow-y-auto z-50"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className={`${poppins.className} text-xl font-bold`}>Saved Chats</h2>
                <button onClick={toggleSidebar} className="text-gray-400 hover:text-white">
                  <FiX size={24} />
                </button>
              </div>
              <button
                onClick={handleNewChat}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg mb-4 flex items-center justify-center"
              >
                <FiPlusCircle className="mr-2" /> New Chat
              </button>
              <ul className="space-y-2">
                {savedChats.map((chat, index) => (
                  <li 
                    key={index} 
                    className={`bg-gray-700 rounded p-2 cursor-pointer ${currentChatIndex === index ? 'border-2 border-blue-500' : ''}`}
                  >
                    <div className="flex justify-between items-center">
                      <div onClick={() => handleChatSelect(index)}>
                        <p className="font-semibold">{chat.formData.industry || 'Untitled Chat'}</p>
                        <p className="text-xs text-gray-400">{new Date(chat.timestamp).toLocaleString()}</p>
                      </div>
                      <button 
                        onClick={() => handleDeleteChat(index)}
                        className="text-red-400 hover:text-red-600 transition-colors duration-200"
                      >
                        <FiTrash2 size={18} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <h2 className={`${poppins.className} text-xl font-bold mt-8 mb-4`}>Saved Names</h2>
              <ul className="space-y-2">
                {savedNames.map((name, index) => (
                  <li key={index} className="bg-gray-700 rounded p-2">
                    <p className="font-semibold">{name.name}</p>
                    <p className="text-xs text-gray-400">{new Date(name.timestamp).toLocaleString()}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main content */}
        <div className={`flex-1 top-14 container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 transition-all duration-300 ${isSidebarOpen ? 'sm:ml-80' : ''}`}>
          {!isSidebarOpen && (
            <button
              onClick={toggleSidebar}
              className="fixed top-20 left-4 z-50 bg-gray-700 p-2 rounded-full hover:bg-gray-600 transition-colors duration-200"
            >
              <FiMenu size={24} />
            </button>
          )}

          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`${poppins.className}  text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 text-center leading-tight`}
          >
            AI Business Name <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Generator</span>
          </motion.h1>
          
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm rounded-lg p-6 sm:p-8 mb-8 shadow-2xl"
          >
            <div className={`grid grid-cols-1 ${isSidebarOpen ? 'md:grid-cols-1' : 'md:grid-cols-2'} gap-6`}>
              <FormField
                label="Industry"
                name="industry"
                value={formData.industry}
                onChange={handleInputChange}
                placeholder="e.g. Technology, Healthcare, Finance"
                required
              />
              
              <FormField
                label="Keywords (comma-separated)"
                name="keywords"
                value={formData.keywords}
                onChange={handleInputChange}
                placeholder="e.g. innovative, sustainable, global"
                required
              />
              
              <div>
                <label htmlFor="tone" className="block text-gray-300 text-sm font-semibold mb-2">
                  Desired Tone
                </label>
                <select
                  id="tone"
                  name="tone"
                  value={formData.tone}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  required
                >
                  <option value="">Select a tone</option>
                  <option value="professional">Professional</option>
                  <option value="creative">Creative</option>
                  <option value="friendly">Friendly</option>
                  <option value="technical">Technical</option>
                  <option value="luxurious">Luxurious</option>
                  <option value="casual">Casual</option>
                  <option value="persuasive">Persuasive</option>
                  <option value="inspirational">Inspirational</option>
                
                </select>

              </div>
              
              <div>
                <label className="block text-gray-300 text-sm font-semibold mb-2">
                  Preferred Name Length
                </label>
                <div className="flex justify-between bg-gray-800 rounded-lg p-1">
                  {['short', 'medium', 'long'].map((length) => (
                    <label key={length} className="flex-1">
                      <input
                        type="radio"
                        name="length"
                        value={length}
                        checked={formData.length === length}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className={`block text-center py-2 px-4 rounded-md cursor-pointer transition duration-200 ${formData.length === length ? 'bg-blue-600 text-white' : 'text-gray-400 hover:bg-gray-700'}`}>
                        {length.charAt(0).toUpperCase() + length.slice(1)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <FormField
                label="Target Audience"
                name="targetAudience"
                value={formData.targetAudience}
                onChange={handleInputChange}
                placeholder="e.g. Young professionals, Small businesses"
              />

              <FormField
                label="Unique Selling Point"
                name="uniqueSellingPoint"
                value={formData.uniqueSellingPoint}
                onChange={handleInputChange}
                placeholder="e.g. Eco-friendly products, 24/7 customer service"
              />

              <FormField
                label="Company Values"
                name="companyValues"
                value={formData.companyValues}
                onChange={handleInputChange}
                placeholder="e.g. Innovation, Integrity, Sustainability"
              />

              <FormField
                label="Geographic Focus"
                name="geographicFocus"
                value={formData.geographicFocus}
                onChange={handleInputChange}
                placeholder="e.g. Global, North America, Local"
              />

              {/* New description field */}
              <div className="md:col-span-2">
                <label htmlFor="description" className="block text-gray-300 text-sm font-semibold mb-2">
                  Company Description (Optional)
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
                  placeholder="Briefly describe your company and its main offerings..."
                  rows="3"
                />
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Generating...
                  </>
                ) : (
                  <>
                    Generate Names <FiArrowRight className="ml-2" />
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={handleNewChat}
                className="w-full sm:w-auto bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg flex items-center justify-center"
              >
                <FiPlusCircle className="mr-2" /> New Chat
              </button>
            </div>
          </motion.form>
          
          {generatedNames.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className={`${poppins.className} text-2xl font-bold text-white`}>Generated Names</h2>
                <button
                  onClick={handleExportNames}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200"
                >
                  Export Names
                </button>
              </div>
              <ul className="space-y-2">
                {generatedNames.map((nameObj, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition duration-200"
                  >
                    <span className="flex items-center">
                      <FiCheck className="text-green-500 mr-2" />
                      {nameObj.name}
                    </span>
                    <div>
                      <button
                        onClick={() => handleSaveName(nameObj)}
                        className={`transition duration-200 mr-2 ${nameObj.isSaved ? 'text-yellow-400' : 'text-gray-400 hover:text-yellow-400'}`}
                      >
                        <FiStar size={18} fill={nameObj.isSaved ? 'currentColor' : 'none'} />
                      </button>
                      <button 
                        onClick={() => handleCopyName(nameObj.name)}
                        className="text-blue-400 hover:text-blue-300 transition duration-200 mr-2"
                      >
                        <FiCopy size={18} />
                      </button>
                      <button className="text-blue-400 hover:text-blue-300 transition duration-200">
                        <FiInfo size={18} />
                      </button>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Confirm Deletion</h3>
            <p>Are you sure you want to delete this chat?</p>
            <div className="mt-4 flex justify-end space-x-2">
              <button
                onClick={() => setShowDeleteConfirmation(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={confirmDeleteChat}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FormField({ label, name, value, onChange, placeholder, required = false }) {
  return (
    <div>
      <label htmlFor={name} className="block text-gray-300 text-sm font-semibold mb-2">
        {label}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-gray-800 border border-gray-700 rounded py-2 px-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
