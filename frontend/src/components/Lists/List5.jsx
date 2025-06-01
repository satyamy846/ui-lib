import React, { useState } from 'react';
import { Heart, Star, ShoppingCart } from 'lucide-react';

const List5 = () => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 299,
      rating: 4.5,
      image: "🎧",
      category: "Electronics",
      inStock: true
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 399,
      rating: 4.8,
      image: "⌚",
      category: "Wearables",
      inStock: true
    },
    {
      id: 3,
      name: "Coffee Maker",
      price: 159,
      rating: 4.3,
      image: "☕",
      category: "Appliances",
      inStock: false
    },
    {
      id: 4,
      name: "Camera Lens",
      price: 799,
      rating: 4.9,
      image: "📸",
      category: "Photography",
      inStock: true
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const toggleFavorite = (productId) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <div className="flex items-center space-x-4">
            <button className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{product.image}</div>
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className={`p-2 rounded-full transition-colors ${
                    favorites.includes(product.id) 
                      ? 'text-red-500 bg-red-50' 
                      : 'text-gray-400 hover:text-red-500'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${favorites.includes(product.id) ? 'fill-current' : ''}`} />
                </button>
              </div>
              
              <div className="mb-4">
                <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
              
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">({product.rating})</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-gray-900">
                  ${product.price}
                </div>
                
                <button
                  onClick={() => addToCart(product)}
                  disabled={!product.inStock}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    product.inStock
                      ? 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105'
                      : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  }`}
                >
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List5;