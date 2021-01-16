import { MDBContainer, MDBSideNav } from 'mdbreact'
import Link from 'next/link'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import styles from './style.module.scss'
export interface Props {
  isDrawer?: boolean
}

const Drawer: FC<Props> = ({ isDrawer }) => {
  const { menu } = useSelector((state: { menu: any }) => state.menu)
  const { navigation } = menu
  // const [isOpen, setisOpen] = useState(Boolean)
  // Router.events.on('routeChangeStart', () => {
  //   setisOpen(!isOpen)
  // })
  return (
    <div className={styles.menu_mobile}>
      <MDBContainer>
        <MDBSideNav
          hidden={true}
          left="true"
          logo=""
          triggerOpening={isDrawer}
          breakWidth={1300}
          showOverlay={true}
          className={styles.bg_menu_mobile}
        >
          {navigation?.map(
            ({
              label: cate_label,
              slug: cate_slug,

              id,
            }: any) => {
              return (
                <li key={id}>
                  <Link
                    href={{
                      pathname: '/[cate]',
                      query: {
                        cate: cate_slug,
                      },
                    }}
                  >
                    {cate_label}
                  </Link>
                </li>
              )
            }
          )}
        </MDBSideNav>
      </MDBContainer>
    </div>
  )
}
export default Drawer
