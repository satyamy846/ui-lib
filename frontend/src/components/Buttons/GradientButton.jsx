import React from 'react';

const GradientButton = () => {
  const buttons = [
    { text: 'Blue Gradient', gradient: 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700' },
    { text: 'Pink Gradient', gradient: 'bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700' },
    { text: 'Green Gradient', gradient: 'bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700' },
    { text: 'Orange Gradient', gradient: 'bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700' },
    { text: 'Purple Gradient', gradient: 'bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700' },
    { text: 'Sunset Gradient', gradient: 'bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 hover:from-yellow-500 hover:via-red-600 hover:to-pink-600' }
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`px-6 py-2.5 rounded-lg font-medium text-white text-sm transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 shadow-lg hover:shadow-xl ${button.gradient}`}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};

export default GradientButton;