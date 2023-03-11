import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AddJob from './pages/AddJob'
import EditJob from './pages/EditJob'
import Home from './pages/Home'
import JobDetails from './pages/JobDetails'
import Login from './pages/Login'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/jobs/add' element={<AddJob />} />
        <Route path='/jobs/edit/:editId' element={<EditJob />} />
        <Route path='/jobs/details/:detailsId' element={<JobDetails />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}

export default App
