import dynamic from 'next/dynamic'
import React from 'react'

const defaultLayout = dynamic(() => import('layouts/default'))

const WorkPage = () => {
  return <h1> Đang phát triển ...</h1>
}

WorkPage.Layout = defaultLayout
export default WorkPage
