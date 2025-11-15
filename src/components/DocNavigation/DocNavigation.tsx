import type { JSX } from 'react'
import type { NoteTreeNode } from '@/types'
import { NavItem } from './NavItem/NavItem'
import './DocNavigation.css'

interface DocNavigationProps {
  prev: NoteTreeNode | undefined
  next: NoteTreeNode | undefined
}

export function DocNavigation({ prev, next }: DocNavigationProps): JSX.Element {
  return (
    <nav className='DocNavigation'>
      <ul>
        {prev && <NavItem data={prev} isNext={false} />}
        {next && <NavItem data={next} isNext />}
      </ul>
    </nav>
  )
}
