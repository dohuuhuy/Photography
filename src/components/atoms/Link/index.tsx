import Link from 'next/link'
import React from 'react'
import { links } from 'src/interfaces/link'

export const Link_cate = ({ className = '', children, cate }: links) => {
  return (
    <Link
      href={{
        pathname: '/[cate]',
        query: { cate },
      }}
    >
      <a className={className}>{children} </a>
    </Link>
  )
}

export const Link_subcate = ({
  className = '',
  children,
  cate,
  subcate,
}: links) => {
  return (
    <Link
      href={{
        pathname: '/[cate]/[subcate]',
        query: { cate, subcate },
      }}
    >
      <a className={className}>{children} </a>
    </Link>
  )
}

export const Link_post = ({
  className = '',
  children,
  cate,
  subcate,
  post,
}: links) => {
  return (
    <Link
      href={{
        pathname: '/[cate]/[subcate]/[post]',
        query: { cate, subcate, post },
      }}
    >
      <a className={className}>{children} </a>
    </Link>
  )
}

export const Link_page = ({ className = '', children, cate = '' }: links) => {
  return (
    <Link href={`/${cate}`}>
      <a className={className}>{children}</a>
    </Link>
  )
}
