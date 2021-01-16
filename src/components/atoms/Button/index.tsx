import React from 'react'
import { MDBBtn } from 'mdbreact'
import cx from 'classnames'
export interface Props {
  icon?: any
  children: React.ReactNode
  className?: string
  onClick?: () => void
  block?: boolean
}
const BtnCustom = ({ children, icon, className, onClick, block }: Props) => {
  return (
    <MDBBtn
      flat={true}
      block={block}
      className={cx(className)}
      onClick={onClick}
    >
      {icon || ''}
      <div>{children}</div>
    </MDBBtn>
  )
}

export default BtnCustom
