import React, { useState } from 'react';
import { Zap, Shield, Palette, Globe, ArrowRight } from 'lucide-react';

const List2 = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized performance for instant loading",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Private",
      description: "End-to-end encryption for your data",
      color: "from-green-400 to-blue-500"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Beautiful Design",
      description: "Crafted with attention to every detail",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Available worldwide with local support",
      color: "from-blue-400 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 text-lg">
            Discover what makes our platform special
          </p>
        </div>
        
        <div className="grid gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative flex items-start space-x-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${feature.color} text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-lg group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
                
                <ArrowRight 
                  className={`w-6 h-6 text-gray-400 transform transition-all duration-300 ${
                    hoveredIndex === index ? 'translate-x-2 text-gray-600' : ''
                  }`} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List2;