import {
  MDBContainer,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBInput,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBSideNav,
  MDBSideNavCat,
  MDBSideNavNav,
} from 'mdbreact'
import React from 'react'

interface Props {
  toggleStateA: Boolean
  breakWidth: number
  windowWidth: number
}

class DoubleNavigationPage extends React.Component<{}, Props> {
  constructor(props: any) {
    super(props)
    this.state = {
      toggleStateA: false,
      breakWidth: 1300,
      windowWidth: 0,
    }
  }

  componentDidMount() {
    this.handleResize()
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.handleResize)
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.handleResize)
    }
  }

  handleResize = () =>
    this.setState({
      windowWidth: window.innerWidth,
    })

  handleToggleClickA = () => {
    this.setState({
      toggleStateA: !this.state.toggleStateA,
    })
  }

  render() {
    const navStyle = {
      paddingLeft:
        this.state.windowWidth > this.state.breakWidth ? '210px' : '16px',
    }

    const mainStyle = {
      margin: '0 6%',
      paddingTop: '5.5rem',
      paddingLeft:
        this.state.windowWidth > this.state.breakWidth ? '240px' : '0',
    }

    const specialCaseNavbarStyles = {
      WebkitBoxOrient: 'horizontal',
      flexDirection: 'row',
    }

    return (
      <>
        <div className="fixed-sn light-blue-skin">
          <MDBSideNav
            logo="https://mdbootstrap.com/img/logo/mdb-transparent.png"
            triggerOpening={!!this.state.toggleStateA}
            breakWidth={this.state.breakWidth}
            bg="https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg"
            fixed
          >
            <li>
              <ul className="social">
                <li>
                  <a href="#!">
                    <MDBIcon fab icon="facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <MDBIcon fab icon="pinterest" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <MDBIcon fab icon="google-plus-g" />
                  </a>
                </li>
                <li>
                  <a href="#!">
                    <MDBIcon fab icon="twitter" />
                  </a>
                </li>
              </ul>
            </li>
            <MDBInput
              type="text"
              hint="Search"
              style={{
                color: '#fff',
                padding: '0 10px 8px 30px',
                boxSizing: 'border-box',
              }}
            />
            <MDBSideNavNav>
              <MDBSideNavCat
                name="Submit blog"
                id="submit-blog-cat"
                icon="chevron-right"
              >
                <a>Submit listing</a>
                <a>Registration form</a>
              </MDBSideNavCat>
              <MDBSideNavCat
                iconRegular
                name="Instruction"
                id="instruction-cat"
                icon="hand-pointer"
              >
                <a>For bloggers</a>
                <a>For authors</a>
              </MDBSideNavCat>
              <MDBSideNavCat name="About" id="about-cat" icon="eye">
                <a>Instruction</a>
                <a>Monthly meetings</a>
              </MDBSideNavCat>
              <MDBSideNavCat
                name="Contact me"
                id="contact-me-cat"
                icon="envelope"
              >
                <a>FAQ</a>
                <a>Write a message</a>
              </MDBSideNavCat>
            </MDBSideNavNav>
          </MDBSideNav>
          <MDBNavbar style={navStyle} double expand="md" fixed="top" scrolling>
            <MDBNavbarNav left>
              <MDBNavItem>
                <div
                  onClick={this.handleToggleClickA}
                  key="sideNavToggleA"
                  style={{
                    lineHeight: '32px',
                    marginRight: '1em',
                    verticalAlign: 'middle',
                  }}
                >
                  <MDBIcon icon="bars" color="white" size="2x" />
                </div>
              </MDBNavItem>
              <MDBNavItem
                className="d-none d-md-inline"
                style={{ paddingTop: 5 }}
              >
                Material Design for Bootstrap
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right style={specialCaseNavbarStyles}>
              <MDBNavItem active>
                <a>
                  <MDBIcon icon="envelope" className="d-inline-inline" />{' '}
                  <div className="d-none d-md-inline">Contact</div>
                </a>
              </MDBNavItem>
              <MDBNavItem>
                <a>
                  <MDBIcon far icon="comments" className="d-inline-inline" />{' '}
                  <div className="d-none d-md-inline">Support</div>
                </a>
              </MDBNavItem>
              <MDBNavItem>
                <a>
                  <MDBIcon icon="user" className="d-inline-inline" />{' '}
                  <div className="d-none d-md-inline">Account</div>
                </a>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline">Dropdown</div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu right>
                    <a href="#!">Action</a>
                    <a href="#!">Another Action</a>
                    <a href="#!">Something else here</a>
                    <a href="#!">Something else here</a>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBNavbar>
          <main style={mainStyle}>
            <MDBContainer fluid style={{ height: 2000 }} className="mt-5">
              <h2>
                Advanced Double Navigation with fixed SideNav & fixed Navbar:
              </h2>
              <br />
              <h5>1. Fixed side menu, hidden on small devices.</h5>
              <h5>
                2. Fixed Navbar. It will always stay visible on the top, even
                when you scroll down.
              </h5>
            </MDBContainer>
          </main>
        </div>
      </>
    )
  }
}

export default DoubleNavigationPage
