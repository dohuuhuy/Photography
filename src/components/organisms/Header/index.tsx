import {
  MDBCollapse,
  MDBContainer,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBFormInline,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem,
} from 'mdbreact'
import Link from 'next/link'
import { Router } from 'next/router'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
const Header = () => {
  const [isOpen, setisOpen] = useState(false)
  const toggleCollapse = () => {
    setisOpen(!isOpen)
  }
  Router.events.on('routeChangeStart', () => {
    setisOpen(false)
  })
  const { menu } = useSelector((state: { menu: any }) => state.menu)
  const { navigation } = menu
  // console.log('navigation :>> ', navigation)
  return (
    <>
      <MDBNavbar color="blue" dark expand="md" fixed="top" scrolling>
        <MDBContainer>
          <MDBNavbarToggler onClick={toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
            <MDBNavbarNav left>
              {navigation &&
                navigation.map(
                  (
                    {
                      label: cate_label,
                      slug: cate_slug,
                      navSubItem,
                      typeLink,
                    }: any,
                    i: number,
                  ) => {
                    const TypeLink = () => {
                      switch (typeLink) {
                        case 'page':
                          return (
                            <Link
                              href={{
                                pathname: `/${cate_slug}`,
                                query: {
                                  breadcrumb_cate: [
                                    cate_label,
                                    cate_slug,
                                    typeLink,
                                  ],
                                },
                              }}
                              as={`/${cate_slug}`}
                            >
                              <a className="nav-link">{cate_label}</a>
                            </Link>
                          )
                        case 'post':
                          return (
                            <Link
                              href={{
                                pathname: '/[cate]/[subcate]/[post]',
                                query: {
                                  cate: 'null',
                                  subcate: 'null',
                                  post: cate_slug,
                                  breadcrumb_cate: [
                                    cate_label,
                                    cate_slug,
                                    typeLink,
                                  ],
                                },
                              }}
                              as={`/${cate_slug}`}
                            >
                              <a className="nav-link">{cate_label}</a>
                            </Link>
                          )
                        default:
                          return (
                            <Link
                              href={{
                                pathname: '/[cate]',
                                query: {
                                  cate: cate_slug,
                                  breadcrumb_cate: [cate_label, cate_slug],
                                },
                              }}
                              as={`/${cate_slug}`}
                            >
                              <a className="nav-link">{cate_label}</a>
                            </Link>
                          )
                      }
                    }

                    return !navSubItem.length ? (
                      <MDBNavItem key={i}>{TypeLink()}</MDBNavItem>
                    ) : (
                      <MDBNavItem key={i}>
                        <MDBDropdown>
                          <MDBDropdownToggle nav caret>
                            <span className="mr-2">{cate_label}</span>
                          </MDBDropdownToggle>

                          <MDBDropdownMenu className="dropdown-default">
                            {navSubItem &&
                              navSubItem.map(
                                (
                                  {
                                    label: subCate_label,
                                    slug: subCate_slug,
                                  }: any,
                                  i: number,
                                ) => {
                                  return (
                                    <Link
                                      key={i}
                                      href={{
                                        pathname: '/[cate]/[subcate]',
                                        query: {
                                          cate: cate_slug,
                                          subcate: subCate_slug,
                                          breadcrumb_cate: [
                                            cate_label,
                                            cate_slug,
                                          ],
                                          breadcrumb_subCate: [
                                            subCate_label,
                                            subCate_slug,
                                          ],
                                        },
                                      }}
                                      as={`/${cate_slug}/${subCate_slug}`}
                                    >
                                      <MDBDropdownItem>
                                        {subCate_label}
                                      </MDBDropdownItem>
                                    </Link>
                                  )
                                },
                              )}
                          </MDBDropdownMenu>
                        </MDBDropdown>
                      </MDBNavItem>
                    )
                  },
                )}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}

export default Header
