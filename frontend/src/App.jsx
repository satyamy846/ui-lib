import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from './Home'
import Button from './components/Buttons/Button'
import ParentViewEditor from './utils/ParentViewEditor'
import List from './components/Lists/List'
import Setup from './components/Setup/Setup'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} >
          <Route
            path="button"
            element={<ParentViewEditor renderPreview={<Button />}  fileName="Button" folderName="Buttons"/>}
          />
          <Route
            path="list"
            element={<ParentViewEditor renderPreview={<List />} fileName="List" folderName="Lists" />}
          />
          <Route path="setup" element={<Setup/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
