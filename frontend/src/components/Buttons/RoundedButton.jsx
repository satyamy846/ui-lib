import React from 'react';

const RoundedButton = () => {
  const buttons = [
    { text: 'Sharp Corners', rounded: 'rounded-none', color: 'bg-gray-600 hover:bg-gray-700' },
    { text: 'Small Rounded', rounded: 'rounded-sm', color: 'bg-blue-600 hover:bg-blue-700' },
    { text: 'Medium Rounded', rounded: 'rounded-md', color: 'bg-green-600 hover:bg-green-700' },
    { text: 'Large Rounded', rounded: 'rounded-lg', color: 'bg-purple-600 hover:bg-purple-700' },
    { text: 'Extra Large', rounded: 'rounded-xl', color: 'bg-pink-600 hover:bg-pink-700' },
    { text: 'Pill Shape', rounded: 'rounded-full', color: 'bg-indigo-600 hover:bg-indigo-700' }
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={`px-6 py-2.5 font-medium text-white text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm hover:shadow-md transform hover:scale-105 ${button.rounded} ${button.color}`}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};

export default RoundedButton;