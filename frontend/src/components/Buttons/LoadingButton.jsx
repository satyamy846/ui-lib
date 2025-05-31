import React, { useState } from 'react';

const LoadingButton = () => {
  const [loadingStates, setLoadingStates] = useState({});

  const buttons = [
    { id: 'spinner', text: 'Spinner Loading', variant: 'primary' },
    { id: 'dots', text: 'Dots Loading', variant: 'success' },
    { id: 'progress', text: 'Progress Loading', variant: 'info' },
    { id: 'pulse', text: 'Pulse Loading', variant: 'warning' }
  ];

  const handleClick = (buttonId) => {
    setLoadingStates(prev => ({ ...prev, [buttonId]: true }));
    
    // Simulate API call
    setTimeout(() => {
      setLoadingStates(prev => ({ ...prev, [buttonId]: false }));
    }, 3000);
  };

  const getButtonClasses = (variant, isLoading) => {
    const baseClasses = 'inline-flex items-center px-6 py-2 rounded-md font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 min-w-[140px] justify-center';
    
    if (isLoading) {
      return `${baseClasses} bg-gray-400 text-white cursor-not-allowed`;
    }

    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
      info: 'bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-cyan-500',
      warning: 'bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500'
    };

    return `${baseClasses} ${variants[variant]}`;
  };

  const renderLoadingIcon = (buttonId) => {
    const isLoading = loadingStates[buttonId];
    
    if (!isLoading) return null;

    switch (buttonId) {
      case 'spinner':
        return (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        );
      case 'dots':
        return (
          <div className="flex space-x-1 mr-2">
            <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-1 h-1 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        );
      case 'progress':
        return (
          <div className="w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        );
      case 'pulse':
        return (
          <div className="w-2 h-2 mr-2 bg-white rounded-full animate-pulse"></div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      {buttons.map((button) => {
        const isLoading = loadingStates[button.id];
        return (
          <button
            key={button.id}
            onClick={() => handleClick(button.id)}
            disabled={isLoading}
            className={getButtonClasses(button.variant, isLoading)}
          >
            {renderLoadingIcon(button.id)}
            {isLoading ? 'Loading...' : button.text}
          </button>
        );
      })}
    </div>
  );
};

export default LoadingButton;