import type { ReactNode } from 'react'
import './Button.css'

interface ButtonProps {
  children?: ReactNode
  title?: string
  onClick?: () => void
}

export function Button({ children, title, onClick }: ButtonProps) {
  return (
    <button className='Button' onClick={onClick}>
      {children}
      {title}
    </button>
  )
}
