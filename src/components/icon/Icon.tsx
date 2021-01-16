import * as React from 'react'
import * as icons from '.'
import styles from './icon.module.scss'
import cx from 'classnames'
export type Icons = typeof icons
export type IconName = keyof Icons
export type IconSize = 'small' | 'medium' | 'large'

interface IconProps {
  name: IconName
  size?: IconSize
  className?: string
}

/**
 * Icon
 */
export const Icon = ({ name, size = 'small', className }: IconProps) => {
  const { viewBox, id } = icons[name]
  return (
    <span
      className={cx(className, `${styles.icon} ${styles[`icon--${size}`]}`)}
    >
      <svg viewBox={viewBox}>
        <use xlinkHref={`#${id}`} href={`#${id}`} />
      </svg>
    </span>
  )
}
