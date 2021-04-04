import cx from 'classnames'
import {
  MDBBtn,
  MDBCard,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInputGroup,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBModalHeader,
  MDBNavbar,
  MDBNavbarBrand,
  MDBRow,
} from 'mdbreact'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './style.module.scss'

const hamburgerMenuPage = () => {
  const [isOpen, setisOpen] = useState(false)

  const [iconMenu, seticonMenu] = useState('door-closed')

  const toggle = () => setisOpen(!isOpen)

  return (
    <>
      <MDBNavbar
        style={{ marginTop: '20px', boxShadow: 'none' }}
        light
        fixed="top"
        scrolling
      >
        <MDBContainer>
          <MDBNavbarBrand>
            <Link href="/">
              <a
                className={cx(
                  styles.logo_branch,
                  'text-dark text-uppercase font-weight-bold',
                )}
              >
                Designer UI/UX
              </a>
            </Link>
          </MDBNavbarBrand>
          <a
            onClick={() => toggle()}
            onMouseMove={() => seticonMenu('door-open')}
            onMouseLeave={() => seticonMenu('door-closed')}
          >
            <MDBIcon size="2x" icon={iconMenu} />
          </a>
        </MDBContainer>

        <MDBModal
          disableFocusTrap={true}
          autoFocus={true}
          isOpen={isOpen}
          toggle={() => toggle()}
          fullHeight
          position="right"
        >
          <MDBModalHeader toggle={() => toggle()}>Menu</MDBModalHeader>
          <MDBModalBody>
            <MDBContainer>
              <MDBRow center>
                <MDBCol md="11">
                  <MDBInputGroup
                    hint="Find ..."
                    containerClassName="mb-3"
                    append={
                      <MDBBtn
                        color="yellow"
                        className="m-0 px-3 py-2 z-depth-0"
                      >
                        <MDBIcon size="1x" icon="search" />
                      </MDBBtn>
                    }
                  />
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <ul className="nav flex-column ">
                    <li className="nav-item">
                      <Link href="/">
                        <a className="nav-link">Home</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/">
                        <a className="nav-link">Work</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/blog">
                        <a className="nav-link">Blog</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about">
                        <a className="nav-link">About</a>
                      </Link>
                    </li>
                  </ul>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <section className="text-center my-5">
                    <h2 className="h1-responsive font-weight-bold text-center my-5">
                      <Link href="/contact">
                        <a>Contact</a>
                      </Link>
                    </h2>
                    <p className="grey-text text-center w-responsive mx-auto mb-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fugit, error amet numquam iure provident voluptate esse
                      quasi, veritatis totam voluptas nostrum quisquam eum porro
                      a pariatur veniam.
                    </p>
                    <MDBRow>
                      <MDBCol md="12" className=" mb-4">
                        <MDBCard collection className="z-depth-1-half">
                          <div className="view zoom">
                            <img
                              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/5.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="stripe dark">
                              <a href="#!">
                                <p>
                                  Red trousers <MDBIcon icon="angle-right" />
                                </p>
                              </a>
                            </div>
                          </div>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="12" className=" mb-4">
                        <MDBCard collection className="z-depth-1-half">
                          <div className="view zoom">
                            <img
                              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/8.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="stripe dark">
                              <a href="#!">
                                <p>
                                  Sweatshirt <MDBIcon icon="angle-right" />
                                </p>
                              </a>
                            </div>
                          </div>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="12" className=" mb-4">
                        <MDBCard collection className="z-depth-1-half">
                          <div className="view zoom">
                            <img
                              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/9.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="stripe dark">
                              <a href="#!">
                                <p>
                                  Accessories <MDBIcon icon="angle-right" />
                                </p>
                              </a>
                            </div>
                          </div>
                        </MDBCard>
                      </MDBCol>
                      <MDBCol md="12" className=" mb-4">
                        <MDBCard collection className="z-depth-1-half">
                          <div className="view zoom">
                            <img
                              src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/7.jpg"
                              className="img-fluid"
                              alt=""
                            />
                            <div className="stripe dark">
                              <a href="#!">
                                <p>
                                  Sweatshirt <MDBIcon icon="angle-right" />
                                </p>
                              </a>
                            </div>
                          </div>
                        </MDBCard>
                      </MDBCol>
                    </MDBRow>
                  </section>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBModalBody>
          <MDBModalFooter className="text-center">
            <MDBContainer>
              <MDBRow center>
                <MDBCol>
                  <MDBBtn color="black" onClick={() => toggle()}>
                    Close
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBModalFooter>
        </MDBModal>
      </MDBNavbar>
    </>
  )
}

export default hamburgerMenuPage
