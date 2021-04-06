import { MDBRow, MDBCol, MDBCard, MDBIcon } from 'mdbreact'
import React from 'react'
import { list_product_menu_interface } from 'src/interfaces'
import { list_product_menu } from 'src/utils/sample-data'

export const ListProducMenu = () => {
  return (
    <MDBRow>
      {list_product_menu.map(
        (
          {
            link_img,
            title_product,
            link_product,
          }: list_product_menu_interface,
          i: number,
        ) => {
          return (
            <MDBCol md="12" className=" mb-4" key={i}>
              <MDBCard collection className="z-depth-1-half">
                <div className="view zoom">
                  <img src={link_img} className="img-fluid" alt="" />
                  <div className="stripe dark">
                    <a href={link_product}>
                      <p>
                        {title_product} <MDBIcon icon="angle-right" />
                      </p>
                    </a>
                  </div>
                </div>
              </MDBCard>
            </MDBCol>
          )
        },
      )}
    </MDBRow>
  )
}
