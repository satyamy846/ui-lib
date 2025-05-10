import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import UILibrary from './UILib'
import ThemeProvider from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
      <AppRoutes />
     </BrowserRouter>
    </ThemeProvider>
    
    // <UILibrary/>
  )
}

export default App
