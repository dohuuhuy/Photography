import Breadcrumb from '@components/molecules/Breadcrumb'
import BoxMain from '@components/organisms/BoxMain'
import Footer from '@components/organisms/Footer'
import HeadBreadcrumb from '@components/organisms/HeadBreadcrumb'
import Header from '@components/organisms/Header'
import cx from 'classnames'
import { useRouter } from 'next/dist/client/router'
import React from 'react'
import { array_hidden } from 'src/utils/contants'
import styles from './style.module.scss'
interface Props {
  className?: any
  children: React.ReactNode
}

const AuthTemplate = ({ className, children }: Props) => {
  const router = useRouter()

  return (
    <div className={cx(styles['auth-template'], styles[className])}>
      {/* Begin Header */}
      <Header />

      {/* Begin Breadcrumb */}
      <HeadBreadcrumb>
        <Breadcrumb className="m-0" />
      </HeadBreadcrumb>

      {/* Begin main */}
      <div className={styles['main-page']}>
        {!array_hidden.includes(router.asPath) ? (
          <BoxMain> {children}</BoxMain>
        ) : (
          <>{children} </>
        )}
      </div>

      {/* Begin Footer */}
      <Footer />
    </div>
  )
}
export default AuthTemplate
