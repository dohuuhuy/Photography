import dynamic from 'next/dynamic'
import React from 'react'

const LoginLayout = dynamic(() => import('layouts/login'))
const SignIn = dynamic(() => import('@components/organisms/SignIn'))

const LoginPage = () => {
  return <SignIn />
}

LoginPage.Layout = LoginLayout

export default LoginPage
