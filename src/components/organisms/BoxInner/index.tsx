import styles from './style.module.scss'
import cx from 'classnames'
interface Props {
  children?: React.ReactNode
  className?: string
}
const BoxInner = ({ children, className }: Props) => {
  return <div className={cx(styles['box-inner'], className)}>{children}</div>
}
export default BoxInner
