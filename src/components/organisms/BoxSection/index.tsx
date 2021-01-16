import styles from './style.module.scss'
import cx from 'classnames'
interface Props {
  children?: React.ReactNode
  className?: string
}
const BoxSection = ({ children, className }: Props) => {
  return <div className={cx(styles['box-section'], className)}>{children}</div>
}
export default BoxSection
