import React, { useState } from 'react';

const CardRadio = () => {
  const [selectedValue, setSelectedValue] = useState('plan1');

  const options = [
    {
      value: 'plan1',
      title: 'Basic Plan',
      description: 'Perfect for individuals',
      price: '$9/month'
    },
    {
      value: 'plan2',
      title: 'Pro Plan',
      description: 'Great for small teams',
      price: '$29/month'
    },
    {
      value: 'plan3',
      title: 'Enterprise Plan',
      description: 'For large organizations',
      price: '$99/month'
    }
  ];

  return (
    <div className="space-y-4 flex justify-between gap-5">
      {options.map((option) => (
        <div key={option.value} className="relative">
          <input
            id={`card-${option.value}`}
            name="card-radio"
            type="radio"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={(e) => setSelectedValue(e.target.value)}
            className="sr-only"
          />
          <label
            htmlFor={`card-${option.value}`}
            className={`block cursor-pointer rounded-lg border p-4 transition-all duration-200 ${
              selectedValue === option.value
                ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500'
                : 'border-gray-300 bg-white hover:border-gray-400'
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-900">{option.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{option.description}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-900">{option.price}</p>
              </div>
            </div>
            {selectedValue === option.value && (
              <div className="absolute top-4 right-4">
                <div className="h-4 w-4 rounded-full bg-blue-500 flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                </div>
              </div>
            )}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CardRadio;