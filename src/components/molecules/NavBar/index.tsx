import styles from './style.module.scss'
import React, { Fragment } from 'react'
import BtnCustom from '@components/atoms/Button'
import Drawer from '@components/molecules/Drawer'
import { Icon } from '@components/icon/Icon'
import cx from 'classnames'
interface Props {
  children?: React.ReactNode
  rightContent?: any
  isMenu?: boolean
  className?: string
  isBtnBack?: boolean
}
interface State {
  isDrawer: boolean
}
class NavBar extends React.Component<Props, State> {
  public static defaultProps = {
    leftContent: 'Back',
    mode: 'blue',
    hideLeft: false,
  }
  constructor(props: Props) {
    super(props)

    this.state = {
      isDrawer: false,
    }
  }
  public render() {
    const { children, rightContent, isMenu, className } = this.props
    const { isDrawer } = this.state

    return (
      <Fragment>
        <div
          className={cx('d-lg-none', styles['sub-header'], className)}
        >
          {isMenu ? (
            <BtnCustom
              className={cx('m-0', styles['btn-bars'])}
              onClick={this.handleToggle}
            >
              <Icon name={'bars'} />
              <span className={styles['text-bars']}>Menu</span>
            </BtnCustom>
          ) : (
            []
          )}
          <div className={styles.header__center}>{children}</div>
          {rightContent ? (
            <div className={styles.header__right}>{rightContent}</div>
          ) : (
            []
          )}
        </div>
        <Drawer isDrawer={isDrawer} />
      </Fragment>
    )
  }

  public handleToggle = () => {
    this.setState({ isDrawer: !this.state.isDrawer })
  }
}

export default NavBar
