import { Link_subcate, Link_post } from '@components/atoms/Link'
import React from 'react'
import { links } from 'src/interfaces/link'

export const Link_News = ({ children, cate, subcate, post }: links) => {
  if (!subcate) {
    return (
      <Link_subcate cate={cate} subcate={post}>
        {children}
      </Link_subcate>
    )
  }
  return (
    <Link_post cate={cate} subcate={subcate} post={post}>
      {children}
    </Link_post>
  )
}
