import { Link_page, Link_cate } from '@components/atoms/Link'
import React from 'react'

interface Props {
  typeLink: string
  href_cate: string
  label_cate: string
  href_category: string
}

export const TypeLink = ({
  href_cate,
  label_cate,
  href_category,
  typeLink,
}: Props) => {
  switch (typeLink) {
    case 'page':
      return <Link_page cate={href_cate}>{label_cate}</Link_page>
    case 'list_general':
      return <Link_cate cate={href_cate}>{label_cate}</Link_cate>

    case 'list_post_cate':
      return <Link_cate cate={href_category}>{label_cate}</Link_cate>
    default:
      return <Link_cate cate={href_cate}>{label_cate}</Link_cate>
  }
}
