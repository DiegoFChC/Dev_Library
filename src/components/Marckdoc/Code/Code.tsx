import type { JSX } from 'react'
import './Code.css'

interface CodeProps {
  content: string
}

export function Code ({ content } : CodeProps) : JSX.Element {
  return <code className='Code'>{content}</code>
}