import dynamic from 'next/dynamic'
import React from 'react'
const HomeLayout = dynamic(() => import('layouts/home'))

const HomePage = () => {
  return (
    <>
      <p>Đang phát triển home ...</p>
    </>
  )
}

HomePage.Layout = HomeLayout

export default HomePage
