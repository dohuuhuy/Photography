import Link from 'next/link'
import { useRouter } from 'next/router'

const LINK = ({ children, post }: any) => {
  const router = useRouter()
  const { cate, subcate } = router.query

  return (
    <>
      {subcate ? (
        <Link
          href={{
            pathname: '/[cate]/[subcate]/[post]',
            query: { cate, subcate, post },
          }}
        >
          <a>{children}</a>
        </Link>
      ) : (
        <Link
          href={{
            pathname: '/[cate]/[subcate]/[post]',
            query: { cate, subcate: 'null', post },
          }}
          as={`/${cate}/${post}`}
        >
          <a>{children}</a>
        </Link>
      )}
    </>
  )
}

export default LINK
