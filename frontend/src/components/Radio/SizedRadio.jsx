import React, { useState } from 'react';
import useTheme from '../../hooks/useTheme';

const SizedRadio = () => {
  const [selectedValue, setSelectedValue] = useState('medium');
  // we will provide this custom hook in a seperate page or else you can comment theme related things
  const {theme} = useTheme();

  const sizeClasses = {
    small: 'h-3 w-3',
    medium: 'h-4 w-4',
    large: 'h-5 w-5'
  };

  const labelSizeClasses = {
    small: 'text-xs',
    medium: 'text-sm',
    large: 'text-base'
  };

  const options = [
    { value: 'small', label: 'Small Radio', size: 'small' },
    { value: 'medium', label: 'Medium Radio', size: 'medium' },
    { value: 'large', label: 'Large Radio', size: 'large' }
  ];

  return (
    <div className="space-y-4">
      {options.map((option) => (
        <div key={option.value} className="flex items-center">
          <input
            id={`sized-${option.value}`}
            name="sized-radio"
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={(e) => setSelectedValue(e.target.value)}
            className={`${sizeClasses[option.size]} ${theme === 'dark' ? 'text-white' : 'text-purple-500 focus:ring-purple-500' } border-gray-300`}
          />
          <label 
            htmlFor={`sized-${option.value}`}
            className={`ml-3 block font-medium  cursor-pointer ${labelSizeClasses[option.size]}`}
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default SizedRadio;