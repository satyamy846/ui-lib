import React from 'react';

const Card1 = () => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
      <img
        className="w-full h-48 object-cover"
        src="https://picsum.photos/200/300"
        alt="Nature"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">Nature's Beauty</h2>
        <p className="text-gray-600 text-base">
          Discover the calming power of nature with this beautiful landscape view.
        </p>
      </div>
    </div>
  );
};

export default Card1;
