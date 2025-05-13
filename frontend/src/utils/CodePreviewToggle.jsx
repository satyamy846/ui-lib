import { Code, Eye } from 'lucide-react';
import React, { useState } from 'react';

const CodePreviewToggle = ({ activeTab, setActiveTab}) => {

  return (
   
      <div className="rounded-lg p-1 flex">
        <button
          onClick={() => setActiveTab('code')}
          className={`flex-1 px-1 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
            activeTab === 'code'
              ? 'text-white shadow-sm'
              : 'text-white hover:text-white-100'
          }`}
        >
         <Code />
        </button>
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex-1 px-1 rounded-md text-sm font-medium transition-all duration-200 cursor-pointer ${
            activeTab === 'preview'
              ? 'text-purple-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <Eye color="white"/>
        </button>
      </div>
 
  );
};

export default CodePreviewToggle;