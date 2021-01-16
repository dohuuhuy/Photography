import styles from './style.module.scss'
const LoadingPage = () => {
  return (
    <div className={styles.preloader}>
      <span>Đang tải dữ liệu</span>
    </div>
  )
}

export default LoadingPage
