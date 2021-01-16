import Ads from '@components/molecules/Ads'
import CongTacXaHoi from '@components/molecules/CongTacXaHoi'
import VideoAbout from '@components/molecules/VideoAbout'
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
import BoxLeft from '../BoxLeft'
import BoxRight from '../BoxRight'
export interface Props {
  children: any
  className?: string
}
const BoxMain = ({ children }: Props) => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="8">
          <BoxLeft>{children}</BoxLeft>
        </MDBCol>
        <MDBCol md="4">
          <BoxRight>
            <VideoAbout />
            <CongTacXaHoi />
            <Ads src={'/img/imgweb/ads1.jpeg'} />
          </BoxRight>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default BoxMain
