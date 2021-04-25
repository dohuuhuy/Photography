import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInputGroup,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBModalHeader,
  MDBRow,
} from 'mdbreact'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MenuModal_interface } from 'src/interfaces'
import { ListProducMenu } from '../ListProducMenu'
import { ListMenu } from './list_menu'

const MenuModal = ({ isOpen, toggle }: MenuModal_interface) => {
  return (
    <MDBModal
      disableFocusTrap={true}
      autoFocus={true}
      isOpen={isOpen}
      toggle={() => toggle()}
      fullHeight
      position="right"
    >
      <MDBModalHeader className="text-center" toggle={() => toggle()}>
        <Image
          src={require('public/images/logo_branch (2).png')}
          width={170}
          height={60}
          alt="logo_branch"
        />
      </MDBModalHeader>
      <MDBModalBody>
        <MDBContainer>
          <MDBRow center>
            <MDBCol md="11">
              <MDBInputGroup
                hint="Tìm ..."
                containerClassName="mb-3"
                append={
                  <MDBBtn color="yellow" className="m-0 px-3 py-2 z-depth-0">
                    <MDBIcon size="1x" icon="search" />
                  </MDBBtn>
                }
              />
            </MDBCol>
          </MDBRow>
          <ListMenu />
          <MDBRow>
            <MDBCol>
              <section className="text-center my-5">
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                  <Link href="/contact">Contact</Link>
                </h2>
                <p className="grey-text text-center w-responsive mx-auto mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit, error amet numquam iure provident voluptate esse quasi,
                  veritatis totam voluptas nostrum quisquam eum porro a pariatur
                  veniam.
                </p>
              </section>
            </MDBCol>
          </MDBRow>
          <ListProducMenu />
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
