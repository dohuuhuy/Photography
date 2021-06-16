import dynamic from 'next/dynamic'
import React from 'react'

const LoginLayout = dynamic(() => import('layouts/login'))
const SignUp = dynamic(() => import('@components/organisms/SignUp'))

const RegisterPage = () => {
  return <SignUp />
}

RegisterPage.Layout = LoginLayout
export default RegisterPage
