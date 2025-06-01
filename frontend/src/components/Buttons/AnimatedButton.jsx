import React from 'react';

const AnimatedButton = () => {
  const buttons = [
    { 
      text: 'Bounce Effect', 
      classes: 'bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:animate-bounce focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
    },
    { 
      text: 'Pulse Effect', 
      classes: 'bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:animate-pulse focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2'
    },
    { 
      text: 'Scale Up', 
      classes: 'bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 shadow-lg hover:shadow-xl'
    },
    { 
      text: 'Slide Right', 
      classes: 'bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:translate-x-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2'
    },
    { 
      text: 'Rotate & Scale', 
      classes: 'bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:rotate-3 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-md hover:shadow-lg'
    },
    { 
      text: 'Glow Effect', 
      classes: 'bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 shadow-lg hover:shadow-yellow-500/50 hover:shadow-xl'
    }
  ];

  return (
    <div className="flex flex-wrap gap-4">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={button.classes}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};

export default AnimatedButton;