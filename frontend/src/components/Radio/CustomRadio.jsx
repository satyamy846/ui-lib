import React, { useState } from 'react';

const CustomRadio = () => {
  const [selectedValue, setSelectedValue] = useState('custom1');

  const options = [
    { value: 'custom1', label: 'Creative Design', icon: '🎨' },
    { value: 'custom2', label: 'Development', icon: '💻' },
    { value: 'custom3', label: 'Marketing', icon: '📈' },
    { value: 'custom4', label: 'Analytics', icon: '📊' }
  ];

  return (
    <div className="space-y-4 flex justify-between gap-5">
      {options.map((option) => (
        <div key={option.value} className="relative">
          <input
            id={`custom-${option.value}`}
            name="custom-radio"
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={(e) => setSelectedValue(e.target.value)}
            className="sr-only"
          />
          <label
            htmlFor={`custom-${option.value}`}
            className={`flex items-center p-3 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
              selectedValue === option.value
                ? 'border-purple-500 bg-gradient-to-r from-purple-50 to-pink-50 shadow-lg transform scale-105'
                : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-md'
            }`}
          >
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg ${
              selectedValue === option.value ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-400'
            }`}>
              {option.icon}
            </div>
            <span className={`ml-3 font-medium mr-2 ${selectedValue === option.value ? 'text-purple-900' : 'text-gray-700'}`}>
              {option.label}
            </span>
            {selectedValue === option.value && (
              <div className="ml-auto">
                <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            )}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CustomRadio;