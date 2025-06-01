import React from 'react';

const OutlinedButton = () => {
  const buttons = [
    { text: 'Primary Outline', variant: 'primary' },
    { text: 'Secondary Outline', variant: 'secondary' },
    { text: 'Success Outline', variant: 'success' },
    { text: 'Danger Outline', variant: 'danger' },
    { text: 'Warning Outline', variant: 'warning' },
    { text: 'Info Outline', variant: 'info' }
  ];

  const getButtonClasses = (variant) => {
    const baseClasses = 'px-4 py-2 rounded-md font-medium text-sm border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variants = {
      primary: 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
      secondary: 'border-gray-600 text-gray-600 hover:bg-gray-600 hover:text-white focus:ring-gray-500',
      success: 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white focus:ring-green-500',
      danger: 'border-red-600 text-red-600 hover:bg-red-600 hover:text-white focus:ring-red-500',
      warning: 'border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white focus:ring-yellow-500',
      info: 'border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white focus:ring-cyan-500'
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
          {button.text}
        </button>
      ))}
    </div>
  );
};

export default OutlinedButton;