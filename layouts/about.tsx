import Header from '@components/organisms/Header'
import React, { ReactNode } from 'react'
type Props = {
  children?: ReactNode
}

const AboutLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '900px' }} className="w-100">
        {children}
      </main>
    </>
  )
}

export default AboutLayout
