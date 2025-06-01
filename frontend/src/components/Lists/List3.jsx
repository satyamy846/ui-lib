import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';

const List3 = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: { name: "Sarah Chen", avatar: "👩‍💻", handle: "@sarahdev" },
      content: "Just shipped a new feature! The team worked incredibly hard on this one. 🚀",
      timestamp: "2 hours ago",
      likes: 24,
      comments: 8,
      shares: 3,
      liked: false
    },
    {
      id: 2,
      user: { name: "Alex Rodriguez", avatar: "👨‍🎨", handle: "@alexdesigns" },
      content: "Beautiful sunset from my studio window. Sometimes inspiration comes from the simplest moments. ✨",
      timestamp: "4 hours ago",
      likes: 156,
      comments: 23,
      shares: 12,
      liked: true
    },
    {
      id: 3,
      user: { name: "Maya Patel", avatar: "👩‍🔬", handle: "@mayascience" },
      content: "Excited to share our latest research findings! The future of technology is looking bright. 🔬",
      timestamp: "6 hours ago",
      likes: 89,
      comments: 15,
      shares: 7,
      liked: false
    }
  ]);

  const toggleLike = (id) => {
    setPosts(posts.map(post => 
      post.id === id 
        ? { 
            ...post, 
            liked: !post.liked,
            likes: post.liked ? post.likes - 1 : post.likes + 1
          }
        : post
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-t-3xl p-6 sticky top-0 shadow-sm border-b border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 text-center">Feed</h2>
        </div>
        
        <div className="bg-white">
          {posts.map((post, index) => (
            <div key={post.id} className={`p-6 ${index !== posts.length - 1 ? 'border-b border-gray-100' : ''}`}>
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{post.user.avatar}</div>
                
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-bold text-gray-900">{post.user.name}</h3>
                    <span className="text-gray-500 text-sm">{post.user.handle}</span>
                    <span className="text-gray-400 text-sm">·</span>
                    <span className="text-gray-500 text-sm">{post.timestamp}</span>
                  </div>
                  
                  <p className="text-gray-800 mb-4 leading-relaxed">{post.content}</p>
                  
                  <div className="flex items-center justify-between text-gray-500">
                    <button 
                      className={`flex items-center space-x-2 hover:text-red-500 transition-colors ${
                        post.liked ? 'text-red-500' : ''
                      }`}
                      onClick={() => toggleLike(post.id)}
                    >
                      <Heart className={`w-5 h-5 ${post.liked ? 'fill-current' : ''}`} />
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    
                    <button className="flex items-center space-x-2 hover:text-blue-500 transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm">{post.comments}</span>
                    </button>
                    
                    <button className="flex items-center space-x-2 hover:text-green-500 transition-colors">
                      <Share2 className="w-5 h-5" />
                      <span className="text-sm">{post.shares}</span>
                    </button>
                    
                    <button className="hover:text-yellow-500 transition-colors">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-b-3xl p-6 text-center">
          <button className="text-blue-500 font-semibold hover:text-blue-600 transition-colors">
            Load more posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default List3;