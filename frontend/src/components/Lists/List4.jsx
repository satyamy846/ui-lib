import React, { useState } from 'react';
import { Play, Music } from 'lucide-react';

const List4 = () => {
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  
  const playlist = [
    { title: "Midnight Dreams", artist: "Luna Eclipse", duration: "3:24", cover: "🌙" },
    { title: "Electric Waves", artist: "Neon Pulse", duration: "4:12", cover: "⚡" },
    { title: "Ocean Breeze", artist: "Coastal Vibes", duration: "2:58", cover: "🌊" },
    { title: "City Lights", artist: "Urban Soul", duration: "3:45", cover: "🌃" },
    { title: "Forest Path", artist: "Nature Sounds", duration: "5:20", cover: "🌲" }
  ];

  const playTrack = (index) => {
    setCurrentTrack(index);
    setIsPlaying(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black p-6">
      <div className="max-w-md mx-auto">
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50">
          <div className="p-8 text-center border-b border-gray-700/50">
            <h2 className="text-2xl font-bold text-white mb-2">Now Playing</h2>
            <div className="text-6xl mb-4">{playlist[currentTrack].cover}</div>
            <h3 className="text-xl font-semibold text-white mb-1">
              {playlist[currentTrack].title}
            </h3>
            <p className="text-gray-400">{playlist[currentTrack].artist}</p>
            
            <div className="flex items-center justify-center space-x-6 mt-6">
              <button className="text-gray-400 hover:text-white transition-colors">
                <Music className="w-6 h-6" />
              </button>
              <button 
                className="bg-white text-black rounded-full p-4 hover:scale-105 transition-transform"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                <Play className="w-6 h-6" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Music className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <h4 className="text-white font-semibold mb-4">Up Next</h4>
            {playlist.map((track, index) => (
              <div
                key={index}
                className={`flex items-center space-x-4 p-3 rounded-xl cursor-pointer transition-all hover:bg-gray-700/30 ${
                  index === currentTrack ? 'bg-gray-700/50' : ''
                }`}
                onClick={() => playTrack(index)}
              >
                <div className="text-2xl">{track.cover}</div>
                <div className="flex-1">
                  <h5 className="text-white font-medium">{track.title}</h5>
                  <p className="text-gray-400 text-sm">{track.artist}</p>
                </div>
                <span className="text-gray-400 text-sm">{track.duration}</span>
                {index === currentTrack && isPlaying && (
                  <div className="text-green-400">
                    <Play className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List4;