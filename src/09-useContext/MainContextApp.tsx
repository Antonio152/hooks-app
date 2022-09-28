import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { UserProvider } from './context/UserProvider'
import { About } from './pages/About'
import { Home } from './pages/Home'
import { Login } from './pages/Login'

export const MainApp = () => {
  return (
    <UserProvider>
        <h1>Main Context</h1>
        <Navbar/>
        <hr />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='login' element={<Login/>}/>
          {/* <Route path='/*' element={<Home/>}/> */}
          <Route path='/*' element={<Navigate to='/'/>}/>
        </Routes>
    </UserProvider>
  )
}
