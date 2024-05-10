import { useEffect, useState } from 'react'
import './App.css'
import SignUpPage from './pages/SignUpPage'
import { Route, Routes, BrowserRouter, redirect, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import TransferPage from './pages/Transfer'
import Dashboard from './pages/Dashboard'
import UserUpdatePage from './pages/UserUpdatePage'

function App() {
  const [isLogged, setIsLogged] = useState(false)

  useEffect(()=>{
    try {
      if(localStorage.getItem("token")){
        setIsLogged(true)
      }else{
        setIsLogged(false)
      }
    } catch (error) {
      console.error(error)
    }
  }, [])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLogged ? <Navigate to = "/dashboard" />: <Navigate to = "/login" />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
        <Route path="/login" element={<LoginPage /> }/>
        <Route path="/signup" element={<SignUpPage /> }/>
        <Route path="/transfer" element={<TransferPage />}/>
        <Route path="/update" element={<UserUpdatePage />}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
