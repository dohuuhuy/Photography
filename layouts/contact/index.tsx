import Header from '@components/organisms/Header'
import { MDBContainer } from 'mdbreact'
import React, { ReactNode } from 'react'
import styles from './style.module.scss'

type Props = {
  children?: ReactNode
}

const ContactLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <MDBContainer className={styles.main}>{children}</MDBContainer>
    </>
  )
}

export default ContactLayout
