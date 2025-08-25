import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
import LoginPage from './components/LoginPage'
import NotFoundPage from './components/NotFoundPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
