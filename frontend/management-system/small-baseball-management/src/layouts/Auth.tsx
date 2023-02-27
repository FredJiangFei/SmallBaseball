import React from 'react'
import { Outlet } from 'react-router-dom'
const Auth: React.FC = ({ children }: any) => {
  return (
    <>
      {children}
      <Outlet />
    </>
  )
}

export default Auth
