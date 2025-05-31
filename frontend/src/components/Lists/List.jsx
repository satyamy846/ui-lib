import React, { useState } from 'react';
import { Check } from 'lucide-react';

const List = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Complete project proposal', completed: false, priority: 'high' },
    { id: 2, text: 'Review design mockups', completed: true, priority: 'medium' },
    { id: 3, text: 'Schedule team meeting', completed: false, priority: 'low' },
    { id: 4, text: 'Update documentation', completed: false, priority: 'medium' },
    { id: 5, text: 'Test new features', completed: true, priority: 'high' }
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-6">
      <div className="max-w-md mx-auto">
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-2xl border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Daily Tasks
          </h2>
          
          <div className="space-y-4">
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`backdrop-blur-sm bg-white/5 rounded-2xl p-4 border border-white/10 transition-all duration-300 hover:bg-white/10 cursor-pointer ${
                  task.completed ? 'opacity-70' : ''
                }`}
                onClick={() => toggleTask(task.id)}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-6 h-6 rounded-full border-2 border-white/30 flex items-center justify-center ${
                    task.completed ? 'bg-green-500 border-green-500' : ''
                  }`}>
                    {task.completed && <Check size={14} className="text-white" />}
                  </div>
                  
                  <div className="flex-1">
                    <p className={`text-white transition-all ${
                      task.completed ? 'line-through opacity-60' : ''
                    }`}>
                      {task.text}
                    </p>
                  </div>
                  
                  <div className={`w-3 h-3 rounded-full ${getPriorityColor(task.priority)}`}></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="text-white/60 text-sm">
              {tasks.filter(t => t.completed).length} of {tasks.length} completed
            </div>
            <div className="w-full bg-white/10 rounded-full h-2 mt-2">
              <div 
                className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(tasks.filter(t => t.completed).length / tasks.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;