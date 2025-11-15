import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import type { NoteFile, NoteMeta } from '@/types'

const NOTES_PATH = path.join(process.cwd(), 'src', 'notes')

export function getNotesBySlug(slug: string[]): NoteFile {
  const originalPath = slug.map((item) => decodeURIComponent(item))
  const filePath = path.join(NOTES_PATH, ...originalPath) + '.md'

  if (!fs.existsSync(filePath))
    return {
      content: 'Not found',
      data: { title: 'Not found', description: 'Notes not found' },
    }

  const raw = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(raw)
  const { title, description } = data as Partial<NoteMeta>

  return {
    content,
    data: { title: title ?? 'Untitled', description: description ?? '' },
  }
}
