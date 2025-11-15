import type { NoteTreeNode } from '@/types'
import { ArrowBack, ArrowNext } from '@/components/Icons/Icons'
import Link from 'next/link'

import './NavItem.css'
import { JSX } from 'react'

interface NavItemProps {
  data: NoteTreeNode
  isNext?: boolean
}

export function NavItem({ data, isNext = false }: NavItemProps): JSX.Element {
  const { title, slug } = data
  return (
    <li className='NavItem'>
      <Link href={`/notes/${slug}`}>
        <span className={!isNext ? 'active' : ''}>
          <ArrowBack />
        </span>
        <div className='content'>
          <p>{isNext ? 'Siguiente' : 'Anterior'}</p>
          <h4>{title}</h4>
        </div>
        <span className={isNext ? 'active' : ''}>
          <ArrowNext />
        </span>
      </Link>
    </li>
  )
}
