import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import AddJob from './pages/AddJob'
import Home from './pages/Home'
import Login from './pages/Login'
function App() {
  return (
    <>
      <Routes>
        <Route path='/jobs' element={<Home />} />
        <Route path='/jobs/add' element={<AddJob />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
