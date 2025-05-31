import { Code, Eye } from 'lucide-react';
import useTheme from '../hooks/useTheme';

const CodePreviewToggle = ({ activeTab, setActiveTab}) => {
const { theme } = useTheme();
  return (
   
      <div className="rounded-lg p-1 flex">
        <button
          onClick={() => setActiveTab('code')}
          className={`flex-1 px-1 rounded-md text-sm font-medium transition-all duration-200 ease-in-out cursor-pointer ${
            activeTab === 'code'
              ? theme === 'dark' ? 'text-purple-600' : 'bg-purple-600 text-white shadow-sm'
              : ''
          }  `}
        >
         <Code />
        </button>
        <button
          onClick={() => setActiveTab('preview')}
          className={`flex-1 px-1 rounded-md text-sm font-medium transition-all duration-200 ease-in-out py-1 cursor-pointer  ${
            activeTab === 'preview'
              ? theme === 'dark' ? 'text-purple-600' : 'bg-purple-600 text-white shadow-sm'
              : 'text-white'
          }  `}
        >
          <Eye className={`${theme === 'dark' ? 'white':'' }`}/>
        </button>
      </div>
 
  );
};

export default CodePreviewToggle;