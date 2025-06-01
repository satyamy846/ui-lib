import React, { useState } from 'react';
import { Search, Mail, Phone, MessageCircle } from 'lucide-react';

const List6 = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const contacts = [
    {
      id: 1,
      name: "Emma Thompson",
      role: "Product Manager",
      email: "emma@company.com",
      phone: "+1 (555) 123-4567",
      avatar: "👩‍💼",
      status: "online"
    },
    {
      id: 2,
      name: "James Wilson",
      role: "Senior Developer",
      email: "james@company.com",
      phone: "+1 (555) 234-5678",
      avatar: "👨‍💻",
      status: "away"
    },
    {
      id: 3,
      name: "Sophie Chen",
      role: "UX Designer",
      email: "sophie@company.com",
      phone: "+1 (555) 345-6789",
      avatar: "👩‍🎨",
      status: "online"
    },
    {
      id: 4,
      name: "Michael Brown",
      role: "Marketing Lead",
      email: "michael@company.com",
      phone: "+1 (555) 456-7890",
      avatar: "👨‍💼",
      status: "offline"
    }
  ];

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch(status) {
      case 'online': return 'bg-green-500';
      case 'away': return 'bg-yellow-500';
      case 'offline': return 'bg-gray-400';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Team Directory</h2>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
          
          <div className="divide-y divide-gray-200">
            {filteredContacts.map((contact) => (
              <div key={contact.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="text-3xl">{contact.avatar}</div>
                    <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${getStatusColor(contact.status)}`}></div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{contact.name}</h3>
                    <p className="text-gray-600">{contact.role}</p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Mail className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                      <Phone className="w-5 h-5" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="mt-3 ml-16 space-y-1">
                  <div className="flex items-center text-sm text-gray-500">
                    <Mail className="w-4 h-4 mr-2" />
                    {contact.email}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Phone className="w-4 h-4 mr-2" />
                    {contact.phone}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredContacts.length === 0 && (
            <div className="p-12 text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No contacts found</h3>
              <p className="text-gray-500">Try adjusting your search terms</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default List6;