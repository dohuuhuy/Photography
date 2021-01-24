import { MDBBreadcrumb, MDBBreadcrumbItem, MDBContainer } from 'mdbreact'
import Link from 'next/link'
import { useRouter } from 'next/router'

const BreadcrumbPage = () => {
  const router = useRouter()
  const array_hidden = ['/']
  const { breadcrumb_cate, breadcrumb_subCate } = router?.query
  return array_hidden.includes(router.asPath) ? null : (
    <MDBContainer>
      <MDBBreadcrumb>
        <MDBBreadcrumbItem>
          <Link href="/" shallow>
            <a>Home</a>
          </Link>
        </MDBBreadcrumbItem>
        {breadcrumb_cate ? (
          <MDBBreadcrumbItem>
            <Link
              href={
                breadcrumb_cate[2] === 'page'
                  ? {
                      pathname: `${breadcrumb_cate[1]}`,
                      query: { breadcrumb_cate },
                    }
                  : {
                      pathname: '/[cate]',
                      query: {
                        cate: breadcrumb_cate[1] || '#!',
                        breadcrumb_cate,
                      },
                    }
              }
              as={`/${breadcrumb_cate[1]}`}
            >
              <a>{breadcrumb_cate[0]}</a>
            </Link>
          </MDBBreadcrumbItem>
        ) : null}

        {breadcrumb_cate ? (
          breadcrumb_subCate ? (
            <MDBBreadcrumbItem>
              <Link
                href={{
                  pathname: '/[cate]/[subcate]',
                  query: {
                    cate: breadcrumb_cate[1] || '#!',
                    subcate: breadcrumb_subCate[1] || '#!',
                    breadcrumb_cate,
                    breadcrumb_subCate,
                  },
                }}
                as={`/${breadcrumb_cate[1]}/${breadcrumb_subCate[1]}`}
              >
                <a>{breadcrumb_subCate[0]}</a>
              </Link>
            </MDBBreadcrumbItem>
          ) : null
        ) : null}
      </MDBBreadcrumb>
    </MDBContainer>
  )
}

export default BreadcrumbPage
