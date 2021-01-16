import FormContact from '@components/molecules/FormContact'
import { MDBCol, MDBContainer, MDBRow } from 'mdbreact'
const ContactPage = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol sm="12">
          <div className="map-container">
            <div
              className="embed-responsive embed-responsive-16by9"
              style={{
                maxHeight: '400px',
                marginBottom: '30px',
                marginTop: '30px',
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.5014795224847!2d106.66321841480088!3d10.772850992323974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edcd98b3925%3A0x22773e1bfba7ad84!2zODQgVGjDoG5oIFRow6FpLCBQaMaw4budbmcgMTIsIFF14bqtbiAxMCwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2shk!4v1609810195007!5m2!1svi!2shk"
                width="600"
                height="450"
                aria-hidden="false"
              ></iframe>
            </div>
          </div>
          <FormContact />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default ContactPage
