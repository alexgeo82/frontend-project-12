import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
import LoginForm from './components/LoginForm'
import NotFoundPage from './components/NotFoundPage'
import ProtectedComponent from './components/ProtectedComponent'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedComponent>
              <MainPage />
            </ProtectedComponent>
          }
        />
        <Route path='/login' element={<LoginForm />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
