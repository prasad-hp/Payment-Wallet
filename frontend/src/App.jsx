import { useState } from 'react'
import './App.css'
import SignUpPage from './pages/SignUpPage'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import TransferPage from './pages/Transfer'
import Dashboard from './pages/Dashboard'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/transfer' element={<TransferPage />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
