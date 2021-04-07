import dynamic from 'next/dynamic'
import React from 'react'

const SideNavPage = dynamic(import('@components/organisms/SideNav'), {
  ssr: false,
})

const AdminLayout = ({ children }: any) => {
  return (
    <>
      <SideNavPage>{children}</SideNavPage>
    </>
  )
}

export default AdminLayout
