import * as React from 'react'
import * as icons from './icons'
import styles from './icon.module.scss'

export type Icons = typeof icons
export type IconName = keyof Icons
export type IconSize = 'small' | 'medium' | 'large'

interface IconProps {
  name: IconName
  size?: IconSize
}

export const Icon: React.FC<IconProps> = ({ name, size = 'small' }) => {
  const { viewBox, id }: any = icons[name]
  return (
    <span className={`${styles.icon} ${styles[`icon--${size}`]}`}>
      <svg viewBox={viewBox}>
        <use xlinkHref={`#${id}`} href={`#${id}`} />
      </svg>
    </span>
  )
}
