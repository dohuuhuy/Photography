import Link from 'next/link'
import styles from './style.module.scss'
import cx from 'classnames'
import Image from 'next/image'
import { MDBCol, MDBRow } from 'mdbreact'
interface Props {
  src?: string
  className?: any
}
const Ads = ({ src = '', className }: Props) => {
  return (
    <MDBRow>
      <MDBCol>
        <div className={cx(styles.ads, className)}>
          <Link href="/">
            <a>
              <Image src={src} alt="" layout="fill" objectFit="contain" />
            </a>
          </Link>
        </div>
      </MDBCol>
    </MDBRow>
  )
}

export default Ads
