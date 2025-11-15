import type { NoteTreeNode } from '@/types'
import { getNotesTree } from '../../../services/server/notes/getNotesTree'
import { ReactNode } from 'react'
import { Navbar, TopBar } from '@/components'
import './layout.css'

interface NotesLayoutProps {
  params: Promise<{ topic: string }>
  children: ReactNode
}

export default async function NotesLayout ({ params, children } : NotesLayoutProps) {
  const { topic } = await params
  const tree: NoteTreeNode[] = getNotesTree(topic)
  
  return (
    <div className='NotesLayout'>
      <TopBar showMenu />
      <div className='notesContent'>
        <Navbar nodes={tree} />
        {children}
      </div>
    </div>
  )
}