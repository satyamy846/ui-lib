import React, { useState } from 'react';

const ColoredRadio = () => {
  const [selectedValue, setSelectedValue] = useState('blue');

  const colorClasses = {
    blue: 'text-blue-600 focus:ring-blue-500',
    green: 'text-green-600 focus:ring-green-500',
    red: 'text-red-600 focus:ring-red-500',
    purple: 'text-purple-600 focus:ring-purple-500',
    pink: 'text-pink-600 focus:ring-pink-500',
    yellow: 'text-yellow-600 focus:ring-yellow-500'
  };

  const options = [
    { value: 'blue', label: 'Blue Theme', color: 'blue' },
    { value: 'green', label: 'Green Theme', color: 'green' },
    { value: 'red', label: 'Red Theme', color: 'red' },
    // { value: 'purple', label: 'Purple Theme', color: 'purple' },
    // { value: 'pink', label: 'Pink Theme', color: 'pink' },
    // { value: 'yellow', label: 'Yellow Theme', color: 'yellow' }
  ];

  return (
    <div className="space-y-3">
      {options.map((option) => (
        <div key={option.value} className="flex items-center">
          <input
            id={`colored-${option.value}`}
            name="colored-radio"
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={(e) => setSelectedValue(e.target.value)}
            className={`h-4 w-4 border-gray-300 ${colorClasses[option.color]}`}
          />
          <label 
            htmlFor={`colored-${option.value}`}
            className="ml-3 block text-sm font-medium text-gray-900 cursor-pointer"
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ColoredRadio;