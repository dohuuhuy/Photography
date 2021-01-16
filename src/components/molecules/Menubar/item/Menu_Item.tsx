import React from 'react'
import { Menu_SubItem } from '../subitem/Menu_SubItem'

import styles from './../style.module.scss'
import { TypeLink } from './TypeLink'
interface Props {
  navigation: []
}
export const Menu_Item = ({ navigation }: Props) => {
  return (
    <>
      {navigation &&
        navigation.map(
          ({
            label: label_cate,
            slug: href_cate,
            navSubItem,
            typeLink,
            category,
            id,
          }: any) => {
            const x = navSubItem
              ? navSubItem.length < 7
                ? styles.hasSubmenu
                : styles.active
              : styles.hasSubmenu
            const y = navSubItem.length ? '' : 'd-none'
            return (
              <li key={id} className={x}>
                <TypeLink
                  href_cate={href_cate}
                  href_category={category?.slug}
                  label_cate={label_cate}
                  typeLink={typeLink}
                />
                <div className={`${styles.submenu} ${styles.megamenu} ${y}`}>
                  <Menu_SubItem sub_Cate={navSubItem} href_cate={href_cate} />
                </div>
              </li>
            )
          }
        )}
    </>
  )
}
