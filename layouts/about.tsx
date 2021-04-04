import Header from '@components/organisms/Header'
import React, { ReactNode } from 'react'
type Props = {
  children?: ReactNode
}

const AboutLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="w-100 vh-100">{children}</main>
    </>
  )
}

export default AboutLayout
