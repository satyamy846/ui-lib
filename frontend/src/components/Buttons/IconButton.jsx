import React from 'react';

const IconButton = () => {
  const buttons = [
    { text: 'Download', icon: '⬇️', variant: 'primary' },
    { text: 'Upload', icon: '⬆️', variant: 'success' },
    { text: 'Delete', icon: '🗑️', variant: 'danger' },
    { text: 'Edit', icon: '✏️', variant: 'warning' },
    { text: 'Save', icon: '💾', variant: 'info' },
    { text: 'Share', icon: '📤', variant: 'secondary' }
  ];

  const getButtonClasses = (variant) => {
    const baseClasses = 'inline-flex items-center px-4 py-2 rounded-md font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-sm hover:shadow-md';
    
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
      success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
      warning: 'bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500',
      info: 'bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-cyan-500'
    };

    return `${baseClasses} ${variants[variant]}`;
  };

  return (
    <div className="flex flex-wrap gap-3">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={getButtonClasses(button.variant)}
        >
          <span className="mr-2 text-base">{button.icon}</span>
          {button.text}
        </button>
      ))}
    </div>
  );
};

export default IconButton;