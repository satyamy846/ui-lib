import React from 'react';

const BasicButton = () => {
  const buttons = [
    { text: 'Primary', variant: 'primary' },
    { text: 'Secondary', variant: 'secondary' },
    { text: 'Success', variant: 'success' },
    { text: 'Danger', variant: 'danger' },
    { text: 'Warning', variant: 'warning' },
    { text: 'Disabled', variant: 'primary', disabled: true }
  ];

  const getButtonClasses = (variant, disabled) => {
    const baseClasses = 'px-4 py-2 rounded-md font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    if (disabled) {
      return `${baseClasses} bg-gray-300 text-gray-500 cursor-not-allowed`;
    }

    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500',
      success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
      warning: 'bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500'
    };

    return `${baseClasses} ${variants[variant]}`;
  };

  return (
    <div className="flex flex-wrap gap-3">
      {buttons.map((button, index) => (
        <button
          key={index}
          disabled={button.disabled}
          className={getButtonClasses(button.variant, button.disabled)}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};

export default BasicButton;