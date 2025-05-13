import { Code, Eye } from 'lucide-react';
import React, { useState } from 'react';

const CodePreviewToggle = ({ activeTab, setActiveTab}) => {

  return (
   
      <div className="bg-gray-200 rounded-lg p-1 flex">
        <button
          onClick={() => setActiveTab('code')}
          className={`flex-1 py-2 px-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
            activeTab === 'code'
              ? 'bg-white text-purple-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
         <Code />
        </button>
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex-1 py-2 px-2 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
            activeTab === 'preview'
              ? 'bg-white text-purple-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Eye />
        </button>
      </div>
 
  );
};

export default CodePreviewToggle;