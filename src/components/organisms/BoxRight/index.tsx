import styles from './style.module.scss'
import cx from 'classnames'
export interface Props {
  children: React.ReactNode
  className?: string
}
const BoxRight = ({ children, className }: Props) => {
  return <div className={cx(styles['box-right'], className)}>{children}</div>
}
export default BoxRight
