import React, { useState } from 'react';
import useTheme from '../../hooks/useTheme';

const BasicRadio = () => {
  const [selectedValue, setSelectedValue] = useState('option1');
  const {theme} = useTheme();

  const options = [
    { value: 'option1', label: 'Option One' },
    { value: 'option2', label: 'Option Two' },
    { value: 'option3', label: 'Option Three' },
    { value: 'option4', label: 'Disabled Option', disabled: true }
  ];

  return (
    <div className="space-y-3">
      {options.map((option) => (
        <div key={option.value} className="flex items-center">
          <input
            id={`basic-${option.value}`}
            name="basic-radio"
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={(e) => setSelectedValue(e.target.value)}
            disabled={option.disabled}
            className={`h-4 w-4 ${theme === 'dark' ? 'text-white' : 'text-purple-500 focus:ring-purple-500' } border-gray-300 disabled:opacity-50 disabled:cursor-no-drop`}
          />
          <label 
            htmlFor={`basic-${option.value}`}
            className={`ml-3 block text-sm font-medium ${option.disabled ? 'text-gray-500 cursor-no-drop' :''} `}
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default BasicRadio;