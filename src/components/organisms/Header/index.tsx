import MenuModal from '@components/molecules/MenuModal'
import { MDBContainer, MDBIcon, MDBNavbar, MDBNavbarBrand } from 'mdbreact'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './style.module.scss'

const hamburgerMenuPage = () => {
  const [isOpen, setisOpen] = useState(false)
  const toggle = () => setisOpen(!isOpen)

  const [fluid, setfluid] = useState(false)

  function scrollHandler() {
    if (window.scrollY >= 40) {
      setfluid(true)
    } else {
      setfluid(false)
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', scrollHandler)
  }

  return (
    <>
      <MDBNavbar
        expand
        className={fluid ? styles.active : styles.non_active}
        light
        fixed="top"
        scrolling
      >
        <MDBContainer fluid={fluid}>
          <MDBNavbarBrand className={styles.logo_branch}>
            <Link href="/">
              <Image
                src={require('public/images/logo_branch (2).png')}
                width={128}
                height={48}
              />
            </Link>
          </MDBNavbarBrand>

          <MDBIcon size="2x" icon={'home'} onClick={() => toggle()} />
        </MDBContainer>
        {/* phần hiển thị danh sách menu */}
        <MenuModal isOpen={isOpen} toggle={() => toggle()} />
      </MDBNavbar>
    </>
  )
}

export default hamburgerMenuPage
