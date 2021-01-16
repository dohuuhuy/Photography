import { Link_subcate } from '@components/atoms/Link'
import React from 'react'

interface Props {
  href_cate?: string
  href_subcate?: string
  label_subCate?: string
  href_subcategory?: any
  typeLink?: any
}

export const TypeSubLink = ({
  href_cate,
  href_subcate,
  label_subCate,
  typeLink,
}: Props) => {
  switch (typeLink) {
    default:
      return (
        <Link_subcate cate={href_cate} subcate={href_subcate}>
          {label_subCate}
        </Link_subcate>
      )
  }
}
