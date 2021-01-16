import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import Link from 'next/link'

export default function Error404() {
  return (
    <MDBContainer className="p-0">
      <MDBRow className="text-center">
        <MDBCol>
          <h1 className="text-danger">404 - Không tìm thấy</h1>
          <Link href="/">
            <a>Quay về trang chủ</a>
          </Link>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}
