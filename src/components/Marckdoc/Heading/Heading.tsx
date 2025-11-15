import type { JSX, ReactNode } from 'react'

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: ReactNode
}

export function Heading ({ level, children } : HeadingProps): JSX.Element {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements
  const id =
    typeof children === 'string' || typeof children === 'number' 
      ? children.toString().toLowerCase().replace(/\s/g, '-') 
      : undefined

  return (
    <Tag id={id} className='newSection'>
      {children}
    </Tag>
  )
}