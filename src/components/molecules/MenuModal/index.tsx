import {
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInputGroup,
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBModalFooter,
} from 'mdbreact'
import Link from 'next/link'
import React from 'react'
import { list_menu } from 'src/utils/sample-data'
import styles from './style.module.scss'
import cx from 'classnames'
import Image from 'next/image'

interface menu_interface {
  title: string
  slug: string
}
interface Props {
  isOpen: boolean
  toggle(): void
}

const MenuModal = ({ isOpen, toggle }: Props) => {
  return (
    <MDBModal
      disableFocusTrap={true}
      autoFocus={true}
      isOpen={isOpen}
      toggle={() => toggle()}
      fullHeight
      position="right"
    >
      <MDBModalHeader toggle={() => toggle()}>
        <Image
          src={require('public/images/logon-2.png')}
          width={256}
          height={87}
        />
      </MDBModalHeader>
      <MDBModalBody>
        <MDBContainer>
          <MDBRow center>
            <MDBCol md="11">
              <MDBInputGroup
                hint="Find ..."
                containerClassName="mb-3"
                append={
                  <MDBBtn color="yellow" className="m-0 px-3 py-2 z-depth-0">
                    <MDBIcon size="1x" icon="search" />
                  </MDBBtn>
                }
              />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="12">
              <ul className={cx(styles.menu, 'nav flex-column')}>
                {list_menu.map(({ title, slug }: menu_interface, i: number) => {
                  return (
                    <li className="nav-item" key={i}>
                      <Link href={slug}>
                        <a className="nav-link">{title}</a>
                      </Link>
                    </li>
                  )
                })}
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
                  Fugit, error amet numquam iure provident voluptate esse quasi,
                  veritatis totam voluptas nostrum quisquam eum porro a pariatur
                  veniam.
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
  )
}

export default MenuModal
