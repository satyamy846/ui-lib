import React, { useState } from 'react';

const ButtonRadio = () => {
  const [selectedValue, setSelectedValue] = useState('weekly');

  const options = [
    { value: 'daily', label: 'Daily' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' },
    { value: 'yearly', label: 'Yearly' }
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <div key={option.value}>
          <input
            id={`button-${option.value}`}
            name="button-radio"
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={(e) => setSelectedValue(e.target.value)}
            className="sr-only"
          />
          <label
            htmlFor={`button-${option.value}`}
            className={`inline-flex items-center px-4 py-2 border text-sm font-medium rounded-md cursor-pointer transition-all duration-200 ${
              selectedValue === option.value
                ? 'border-blue-500 bg-blue-500 text-white shadow-sm'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default ButtonRadio;