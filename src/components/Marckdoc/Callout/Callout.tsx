import type { ReactNode, JSX } from 'react'
import { STYLE } from './calloutStyles'
import './Callout.css'

enum TYPES {
  NOTE = 'note',
  CAUTION = 'caution',
  DANGER = 'danger',
  INFO = 'info',
  TIP = 'tip',
}

interface Props {
  children: ReactNode
  type: TYPES
  title?: string
}

export function Callout({ children, type, title }: Props): JSX.Element {
  const currentStyle = STYLE[type]
  const { key, title: defaultTitle, icon: IconComponent } = currentStyle

  return (
    <blockquote className={`Callout ${key}`}>
      <div className='title'>
        {IconComponent}
        <h6>{title ? title.toUpperCase() : defaultTitle.toUpperCase()}</h6>
      </div>
      {children}
    </blockquote>
  )
}
