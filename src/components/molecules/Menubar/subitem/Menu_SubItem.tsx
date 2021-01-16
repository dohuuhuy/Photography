import React from 'react'
import { TypeSubLink } from './TypeSubLink'

interface Props {
  sub_Cate?: []
  href_cate?: string
  href_subcategory?: string
}

export const Menu_SubItem = ({ sub_Cate, href_cate }: Props) => {
  return (
    <ul>
      {sub_Cate?.map(({ id, label, slug: href_subcate, typeLink }: any) => {
        return (
          <li key={id}>
            <TypeSubLink
              href_cate={href_cate}
              href_subcate={href_subcate}
              label_subCate={label}
              typeLink={typeLink}
            />
          </li>
        )
      })}
    </ul>
  )
}
