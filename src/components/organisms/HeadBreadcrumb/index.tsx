import cx from 'classnames'
import styles from './style.module.scss'
import { MDBContainer, MDBRow } from 'mdbreact'
export interface Props {
  children: React.ReactNode
  className?: string
}
const HeadBreadcrumb = ({ children, className }: Props) => {
  return (
    <div className={cx(styles['head-breadcrumb'], className)}>
      <MDBContainer>
        <MDBRow className="p-0">
          <div className={styles['head-breadcrumb__item']}>{children}</div>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default HeadBreadcrumb
