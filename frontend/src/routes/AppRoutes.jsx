// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom'
import Home from '../Home'
import ButtonPage from '../components/Buttons/ButtonPage'
import ListPage from '../components/Lists/ListPage'
import Setup from '../components/Setup/Setup'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="button" element={<ButtonPage />} />
        <Route path="list" element={<ListPage />} />
        <Route path="setup" element={<Setup />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
