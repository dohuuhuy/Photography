import { MDBCol, MDBRow } from 'mdbreact'
import styles from './style.module.scss'
const VideoAbout = () => {
  return (
    <MDBRow>
      <MDBCol>
        <div className={styles.box_gioithieu}>
          <div className={styles.title_box_category}>
            <h4 className={styles.title_video}>
              <span>Video giới thiệu</span>
            </h4>
          </div>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              src="https://www.youtube.com/embed/QKCJyjatqI0"
              allowFullScreen={true}
            />
          </div>
        </div>
      </MDBCol>
    </MDBRow>
  )
}
export default VideoAbout
