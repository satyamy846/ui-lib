import React, { useState } from 'react';

const FloatingButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const mainButton = {
    icon: '➕',
    className: 'w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 transform hover:scale-110'
  };

  const actionButtons = [
    { icon: '💬', label: 'Chat', color: 'bg-green-500 hover:bg-green-600' },
    { icon: '📧', label: 'Email', color: 'bg-red-500 hover:bg-red-600' },
    { icon: '📞', label: 'Call', color: 'bg-purple-500 hover:bg-purple-600' },
    { icon: '📍', label: 'Location', color: 'bg-yellow-500 hover:bg-yellow-600' }
  ];

  const handleMainClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleActionClick = (label) => {
    setIsExpanded(false);
  };

  return (
    <div className="relative">
      
      {/* Floating Action Buttons Container */}
      <div className="relative z-50">
        {/* Action Buttons */}
        <div className={`absolute bottom-16 right-0 flex flex-col space-y-3 transition-all duration-300 ${
          isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}>
          {actionButtons.map((button, index) => (
            <div
              key={index}
              className={`flex items-center transition-all duration-300 ${
                isExpanded ? 'animate-bounce' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded mr-3 opacity-90">
                {button.label}
              </span>
              <button
                onClick={() => handleActionClick(button.label)}
                className={`w-12 h-12 ${button.color} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-opacity-50 transform hover:scale-110 flex items-center justify-center text-lg`}
              >
                {button.icon}
              </button>
            </div>
          ))}
        </div>

        {/* Main FAB */}
        <button
          onClick={handleMainClick}
          className={`${mainButton.className} flex items-center justify-center text-xl ${
            isExpanded ? 'rotate-45' : 'rotate-0'
          }`}
        >
          {mainButton.icon}
        </button>
      </div>

      {/* Additional standalone floating buttons */}
      <div className="mt-8 flex gap-4">
        <button className="w-12 h-12 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-pink-500 focus:ring-opacity-50 transform hover:scale-110 flex items-center justify-center">
          ❤️
        </button>
        <button className="w-12 h-12 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transform hover:scale-110 flex items-center justify-center">
          🔔
        </button>
        <button className="w-12 h-12 bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-teal-500 focus:ring-opacity-50 transform hover:scale-110 flex items-center justify-center">
          ⚙️
        </button>
      </div>
    </div>
  );
};

export default FloatingButton;