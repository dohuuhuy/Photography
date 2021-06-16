import dynamic from 'next/dynamic'
import React from 'react'

const AboutLayout = dynamic(() => import('layouts/about'))
const About = dynamic(() => import('@components/organisms/About'))

const AboutPage = () => {
  return <About />
}
AboutPage.Layout = AboutLayout
export default AboutPage
