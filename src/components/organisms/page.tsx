import React from 'react'

interface PageProps {
  title: string
}

const Page: React.FC<PageProps> = ({ title }: PageProps) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default Page
