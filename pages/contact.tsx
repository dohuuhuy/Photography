import React from 'react'
import dynamic from 'next/dynamic'
const Contact = dynamic(() => import('@components/organisms/Contact'))
const ContactLayout = dynamic(() => import('layouts/contact/index'))
const ContactPage = () => {
  return <Contact />
}
ContactPage.Layout = ContactLayout
export default ContactPage
