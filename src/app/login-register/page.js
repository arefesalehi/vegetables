'use client'

import Login from '@/components/templates/login-register/login/Login'
import Register from '@/components/templates/login-register/register/Register'
import { authTypes } from '@/utils/constant'
import { useState } from 'react'

const page = () => {
  const [authType, setAuthType] = useState(authTypes.LOGIN)

  const showRegisterForm = () => {
    setAuthType(authTypes.REGISTER)
  }

  const showLoginForm = () => {
    setAuthType(authTypes.LOGIN)
  }

  return (
    <>
      {authType === authTypes.LOGIN ? (
        <Login showRegisterForm={showRegisterForm} />
      ) : (
        <Register showLoginForm={showLoginForm} />
      )}

    </>
  )
}

export default page
