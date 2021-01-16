import styles from './style.module.scss'
import cx from 'classnames'
export interface Props {
  children: React.ReactNode
  className?: string
}
const BoxLeft = ({ children, className }: Props) => {
  return <div className={cx(styles['box-left'], className)}>{children}</div>
}

export default BoxLeft
