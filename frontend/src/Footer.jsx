import useTheme from "./hooks/useTheme";


const Footer = () => {
    const {theme, toogleTheme} = useTheme();
    return (
        <footer className={`mt-12 border-t ${theme === 'dark' ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'} py-8`}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-xl font-bold flex items-center">
                <div className={`h-8 w-8 rounded-md mr-2 ${theme === 'dark' ? 'bg-purple-600' : 'bg-purple-500'} flex items-center justify-center`}>
                  <span className="text-white font-bold">CS</span>
                </div>
                ComponentStack
              </div>
              <p className={`mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Build faster with prebuilt UI elements and copy-paste-ready code.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Documentation</a>
              <a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>Components</a>
              <a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>GitHub</a>
              <a href="#" className={`${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>License</a>
            </div>
          </div>
          <div className={`mt-8 pt-8 border-t ${theme === 'dark' ? 'border-gray-800 text-gray-400' : 'border-gray-100 text-gray-500'} text-center text-sm`}>
            © {new Date().getFullYear()} ComponentLib. Released under the MIT License.
          </div>
        </div>
      </footer>
    )
}


export default Footer;