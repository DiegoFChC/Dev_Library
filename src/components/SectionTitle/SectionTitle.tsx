import type { JSX, ReactNode } from 'react'
import './SectionTitle.css'

type SectionTitleProps = {
  children: ReactNode
  title: string
}

export function SectionTitle ({ children, title }: SectionTitleProps): JSX.Element {
  return (
    <section className='SectionTitle'>
      <h2>{title}</h2>
      {children}
    </section>
  )
}
