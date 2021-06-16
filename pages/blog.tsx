import dynamic from 'next/dynamic'
import React from 'react'

const defaultLayout = dynamic(() => import('layouts/default'))
const Blog = dynamic(() => import('@components/organisms/Blog'))

const BlogPage = () => {
  return <Blog />
}

BlogPage.Layout = defaultLayout
export default BlogPage
