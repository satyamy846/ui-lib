import React, { useState } from 'react';

const CodePreviewToggle = ({ activeTab, setActiveTab}) => {

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-gray-100 rounded-lg p-1 flex">
        <button
          onClick={() => setActiveTab('code')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
            activeTab === 'code'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Code
        </button>
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
            activeTab === 'preview'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Preview
        </button>
      </div>
    </div>
  );
};

export default CodePreviewToggle;