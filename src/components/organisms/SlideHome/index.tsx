import Carousel from '@components/molecules/Carousel'
import BoxSection from '@components/organisms/BoxSection'
import cx from 'classnames'
import { withRouter } from 'next/router'
import { hidden_page } from 'src/utils/contants'
import styles from './style.module.scss'
const SlideHome = ({ router }: any) => {
  return !hidden_page.includes(router.asPath) ? null : (
    <BoxSection className={cx(styles.slideHome, ' p-0')}>
      <Carousel className={'slide-carosel-desktop'} />
    </BoxSection>
  )
}

export default withRouter(SlideHome)
