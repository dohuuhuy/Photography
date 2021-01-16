import BtnCustom from '@components/atoms/Button'
import { Link_page } from '@components/atoms/Link'
import { Icon } from '@components/icon/Icon'
import cx from 'classnames'
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import NavBar from '../NavBar'
import { Menu_Item } from './item/Menu_Item'
import styles from './style.module.scss'
const Menu = () => {
  const { menu } = useSelector((state: { menu: any }) => state.menu)
  const { navigation } = menu

  return (
    <div className={styles.header_menu}>
      <MDBContainer className="p-0">
        <MDBRow>
          <MDBCol md="12">
            <nav
              role="navigation"
              className={cx('d-none d-lg-block', styles.navmenu)}
            >
              <ul className={styles.menubar}>
                <li>
                  <Link_page>Trang chủ</Link_page>
                </li>
                <Menu_Item navigation={navigation} />
              </ul>
            </nav>
            <NavBar
              isMenu={true}
              rightContent={[
                <BtnCustom className="column m-0 mr-3" key="1">
                  <Icon name={'search'} />
                </BtnCustom>,
              ]}
            >
              <Link href="/">
                <a className={styles.logomb}>
                  <img src="/img/logo/logo_white.svg" alt="" />
                </a>
              </Link>
            </NavBar>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default Menu
