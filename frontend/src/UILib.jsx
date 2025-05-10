import { useState } from 'react';
import { Menu, Search, Moon, Sun, Code, Copy, Check, ExternalLink, Github } from 'lucide-react';

export default function UILibrary() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState('buttons');
  
  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  
  const componentsList = [
    { id: 'buttons', name: 'Buttons' },
    { id: 'inputs', name: 'Inputs' },
    { id: 'cards', name: 'Cards' },
    { id: 'alerts', name: 'Alerts' },
    { id: 'modals', name: 'Modals' },
    { id: 'typography', name: 'Typography' },
    { id: 'navigation', name: 'Navigation' },
    { id: 'tables', name: 'Tables' },
    { id: 'dropdowns', name: 'Dropdowns' },
    { id: 'accordions', name: 'Accordions' }
  ];
  
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Header */}
      
      
      <div className="container mx-auto px-4 flex">
        {/* Sidebar - Mobile */}
        {isMenuOpen && (
          <div className={`fixed inset-0 z-20 ${isDarkMode ? 'bg-gray-900 bg-opacity-80' : 'bg-gray-200 bg-opacity-50'} lg:hidden`}>
            <div className={`w-64 h-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-4 overflow-y-auto`}>
              <div className="flex justify-between items-center mb-6">
                <div className="text-xl font-bold">Components</div>
                <button className="p-1" onClick={() => setIsMenuOpen(false)}>
                  ✕
                </button>
              </div>
              <nav>
                {componentsList.map(component => (
                  <button
                    key={component.id}
                    className={`block w-full text-left px-3 py-2 rounded-md mb-1 ${
                      activeComponent === component.id 
                        ? `${isDarkMode ? 'bg-gray-700 text-purple-400' : 'bg-purple-100 text-purple-700'}`
                        : `${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`
                    }`}
                    onClick={() => {
                      setActiveComponent(component.id);
                      setIsMenuOpen(false);
                    }}
                  >
                    {component.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}
      
        {/* Sidebar - Desktop */}
        <aside className={`hidden lg:block w-64 shrink-0 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 sticky top-20 self-start h-screen overflow-y-auto`}>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Components</h3>
            <nav>
              {componentsList.map(component => (
                <button
                  key={component.id}
                  className={`block w-full text-left px-3 py-2 rounded-md mb-1 ${
                    activeComponent === component.id 
                      ? `${isDarkMode ? 'bg-gray-700 text-purple-400' : 'bg-purple-100 text-purple-700'} font-medium`
                      : `${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`
                  }`}
                  onClick={() => setActiveComponent(component.id)}
                >
                  {component.name}
                </button>
              ))}
            </nav>
          </div>
        </aside>
      
        {/* Main Content */}
        <main className="flex-1 py-8 px-4 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Button Components</h1>
            <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              A collection of button components with different styles, sizes and states.
            </p>
          </div>
          
          {/* Component Preview */}
          <div className={`mb-8 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} overflow-hidden`}>
            <div className={`p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex flex-wrap gap-4 p-8 justify-center items-center">
                <button className={`px-4 py-2 rounded-md font-medium ${isDarkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-500 hover:bg-purple-600'} text-white`}>
                  Primary Button
                </button>
                <button className={`px-4 py-2 rounded-md font-medium border ${isDarkMode ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'}`}>
                  Secondary Button
                </button>
                <button className={`px-4 py-2 rounded-md font-medium ${isDarkMode ? 'text-purple-400 hover:bg-gray-700' : 'text-purple-600 hover:bg-purple-50'}`}>
                  Text Button
                </button>
                <button className={`px-4 py-2 rounded-md font-medium ${isDarkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white`}>
                  Success
                </button>
                <button className={`px-4 py-2 rounded-md font-medium ${isDarkMode ? 'bg-red-600 hover:bg-red-700' : 'bg-red-500 hover:bg-red-600'} text-white`}>
                  Danger
                </button>
              </div>
            </div>
            
            <div className={`border-t ${isDarkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'} p-4 flex justify-between items-center`}>
              <div className="flex space-x-2">
                <button className={`px-3 py-1 rounded-md ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} text-sm font-medium flex items-center`}>
                  <ExternalLink size={14} className="mr-1" />
                  Preview
                </button>
                <button className={`px-3 py-1 rounded-md ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} text-sm font-medium flex items-center`}>
                  <Code size={14} className="mr-1" />
                  Code
                </button>
              </div>
              <button 
                className={`px-3 py-1 rounded-md ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} text-sm font-medium flex items-center`}
                onClick={handleCopy}
              >
                {isCopied ? (
                  <>
                    <Check size={14} className="mr-1" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={14} className="mr-1" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>
          
          {/* Code Sample */}
          <div className={`mb-8 rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} overflow-hidden`}>
            <div className={`p-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} flex justify-between items-center border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="font-mono text-sm">Button.tsx</div>
              <button 
                className={`px-3 py-1 rounded-md ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} text-sm font-medium flex items-center`}
                onClick={handleCopy}
              >
                {isCopied ? (
                  <>
                    <Check size={14} className="mr-1" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={14} className="mr-1" />
                    Copy
                  </>
                )}
              </button>
            </div>
            <div className={`p-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} overflow-x-auto`}>
              <pre className={`font-mono text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
{`export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'text' | 'success' | 'danger';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = ({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  disabled = false,
}: ButtonProps) => {
  const baseClasses = 'rounded-md font-medium transition-colors';
  
  const variantClasses = {
    primary: 'bg-purple-500 hover:bg-purple-600 text-white',
    secondary: 'border border-gray-300 hover:bg-gray-100',
    text: 'text-purple-600 hover:bg-purple-50',
    success: 'bg-green-500 hover:bg-green-600 text-white',
    danger: 'bg-red-500 hover:bg-red-600 text-white',
  };
  
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg',
  };
  
  const classes = \`\${baseClasses} \${variantClasses[variant]} \${sizeClasses[size]}\`;
  
  return (
    <button 
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};`}
              </pre>
            </div>
          </div>
          
          {/* Component Usage */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Usage</h2>
            <div className={`rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} overflow-hidden`}>
              <div className={`p-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} overflow-x-auto`}>
                <pre className={`font-mono text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
{`import { Button } from '@your-library/ui';

export default function MyComponent() {
  return (
    <div className="space-x-4">
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="text">Text Button</Button>
      <Button variant="success">Success Button</Button>
      <Button variant="danger">Danger Button</Button>
    </div>
  );
}`}
                </pre>
              </div>
            </div>
          </div>
          
          {/* Props Table */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">Props</h2>
            <div className={`rounded-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} overflow-hidden`}>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className={`${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'} border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <tr>
                      <th className={`px-6 py-3 text-left text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>Name</th>
                      <th className={`px-6 py-3 text-left text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>Type</th>
                      <th className={`px-6 py-3 text-left text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>Default</th>
                      <th className={`px-6 py-3 text-left text-sm font-semibold ${isDarkMode ? 'text-gray-300' : 'text-gray-900'}`}>Description</th>
                    </tr>
                  </thead>
                  <tbody className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} divide-y ${isDarkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium">variant</td>
                      <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        'primary' | 'secondary' | 'text' | 'success' | 'danger'
                      </td>
                      <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        'primary'
                      </td>
                      <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        The visual style of the button
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium">size</td>
                      <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        'small' | 'medium' | 'large'
                      </td>
                      <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        'medium'
                      </td>
                      <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        The size of the button
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium">children</td>
                      <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        React.ReactNode
                      </td>
                      <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        -
                      </td>
                      <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        The content to be displayed inside the button
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium">onClick</td>
                      <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        {'() => void'}
                      </td>
                      <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        undefined
                      </td>
                      <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        Function called when the button is clicked
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-medium">disabled</td>
                      <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        boolean
                      </td>
                      <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        false
                      </td>
                      <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>
                        Whether the button is disabled
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      {/* Footer */}
      <footer className={`mt-12 border-t ${isDarkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'} py-8`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-xl font-bold flex items-center">
                <div className={`h-8 w-8 rounded-md mr-2 ${isDarkMode ? 'bg-purple-600' : 'bg-purple-500'} flex items-center justify-center`}>
                  <span className="text-white font-bold">UI</span>
                </div>
                ComponentLib
              </div>
              <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Beautiful, accessible UI components for your projects</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Documentation</a>
              <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Components</a>
              <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>GitHub</a>
              <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>License</a>
            </div>
          </div>
          <div className={`mt-8 pt-8 border-t ${isDarkMode ? 'border-gray-800 text-gray-400' : 'border-gray-100 text-gray-500'} text-center text-sm`}>
            © {new Date().getFullYear()} ComponentLib. Released under the MIT License.
          </div>
        </div>
      </footer>
    </div>
  );
}