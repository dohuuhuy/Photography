import cx from 'classnames'
import { MDBPageItem, MDBPageNav, MDBPagination } from 'mdbreact'
import { useRouter } from 'next/router'
import { get_path } from 'src/controllers/api'
import { LIMIT_PAGE } from 'src/utils/contants'
import styles from './style.module.scss'

interface Props {
  Total?: number
  Page?: number
}

const Pagination = ({ Total }: Props) => {
  const router = useRouter()
  const x = get_path(router.asPath)
  const { page, path }: any = x
  const numPage: number = Math.ceil(Number(Total) / LIMIT_PAGE)
  const PUSH = (num: number) => {
    if (num > numPage || num < 1) {
      return null
    }
    return router.push(`${path}-page-${num}`)
  }

  return Number(Total) <= LIMIT_PAGE ? null : (
    <MDBPagination
      color="blue-grey"
      className={cx(styles['custom-pagi'], ' mb-4')}
    >
      <span
        onClick={() => {
          PUSH(Number(page) - 1)
        }}
      >
        <MDBPageItem>
          <MDBPageNav aria-label="Previous">&laquo;</MDBPageNav>
        </MDBPageItem>
      </span>

      {Array.from(Array(numPage), (_e, i) => {
        return (
          <span
            onClick={() => {
              PUSH(Number(i) + 1)
            }}
            key={i}
          >
            <MDBPageItem active={i + 1 === page}>
              <MDBPageNav>{i + 1}</MDBPageNav>
            </MDBPageItem>
          </span>
        )
      })}

      <span
        onClick={() => {
          PUSH(Number(page) + 1)
        }}
      >
        <MDBPageItem>
          <MDBPageNav aria-label="Previous">&raquo;</MDBPageNav>
        </MDBPageItem>
      </span>
    </MDBPagination>
  )
}

export default Pagination
