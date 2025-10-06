import React, { useEffect } from 'react'
import { redirect } from 'react-router'

const ProtectedComponent = ({ children }) => {
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      redirect('/login')
    }
  }, [])

  return <>{children}</>
}

export default ProtectedComponent
