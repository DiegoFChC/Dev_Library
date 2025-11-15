'use client'

import Link from 'next/link'
import type { JSX } from 'react'
import type { NoteTreeNode } from '@/types'
import { usePathname } from 'next/navigation'
import { useAppContext } from '@/context'
import './Topic.css'

interface Topic {
  data: NoteTreeNode
}

export function Topic ({ data }: Topic): JSX.Element {
  const { deactivateMenu } = useAppContext()
  const { title, slug } = data
  const pathname = usePathname()

  return (
    <li className={`Topic ${pathname === `/notes/${slug}` ? 'active' : ''}`}>
      <Link href={`/notes/${slug}`} onClick={deactivateMenu}>{title}</Link>
    </li>
  )
}
