import cx from 'classnames'
import { MDBRow, MDBCol } from 'mdbreact'
import Link from 'next/link'
import React from 'react'
import { menu_interface } from 'src/interfaces'
import { list_menu } from 'src/utils/sample-data'
import styles from './style.module.scss'

export const ListMenu = () => (
  <MDBRow>
    <MDBCol md="12">
      <ul className={cx(styles.menu, 'nav flex-column')}>
        {list_menu.map(({ title, slug }: menu_interface, i: number) => {
          return (
            <li className="nav-item nav-link" key={i}>
              <Link href={slug}>{title}</Link>
            </li>
          )
        })}
      </ul>
    </MDBCol>
  </MDBRow>
)
