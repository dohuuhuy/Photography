const AdminLayout = dynamic(() => import('layouts/admin'))
import dynamic from 'next/dynamic'
import React from 'react'

const AdminPage = () => {
  return <h1> Đang phát triển ...</h1>
}

AdminPage.Layout = AdminLayout

export default AdminPage
