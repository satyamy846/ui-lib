import React from 'react';

const SizeButton = () => {
  const buttons = [
    { text: 'Extra Small', size: 'xs' },
    { text: 'Small', size: 'sm' },
    { text: 'Medium', size: 'md' },
    { text: 'Large', size: 'lg' },
    { text: 'Extra Large', size: 'xl' }
  ];

  const getSizeClasses = (size) => {
    const baseClasses = 'bg-blue-600 text-white rounded-md font-medium transition-colors duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';
    
    const sizes = {
      xs: 'px-2 py-1 text-xs',
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-sm',
      lg: 'px-6 py-3 text-base',
      xl: 'px-8 py-4 text-lg'
    };

    return `${baseClasses} ${sizes[size]}`;
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {buttons.map((button, index) => (
        <button
          key={index}
          className={getSizeClasses(button.size)}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};

export default SizeButton;