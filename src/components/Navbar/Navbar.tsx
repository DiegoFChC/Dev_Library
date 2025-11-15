'use client'

import type { JSX } from 'react'
import { ListTopic } from './ListTopic/ListTopic'
import { NoteTreeNode } from '@/types/types'
import { useAppContext } from '@/context'
import './Navbar.css'

interface NavbarProps {
  nodes: NoteTreeNode[]
}

export function Navbar({ nodes }: NavbarProps): JSX.Element {
  const { menuState, deactivateMenu } = useAppContext()

  return (
    <nav className='Navbar'>
      <div
        className={`bgModal ${menuState ? 'active' : ''}`}
        onClick={deactivateMenu}
      >
        <div className='container'></div>
      </div>
      <div className={`topics ${menuState ? 'active' : ''}`}>
        {nodes?.map((node) => (
          <ListTopic key={node.title} topics={node} />
        ))}
      </div>
    </nav>
  )
}
