import React from 'react'
import cx from 'classnames'
interface Props {
  element?: any
  className?: any
  children?: React.ReactNode
}
const TagName = ({ element, className, children }: Props) => {
  return React.createElement(element, { className: cx(className) }, children)
}
export default TagName
