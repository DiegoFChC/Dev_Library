export interface NoteTreeNode {
  title: string
  slug?: string
  path?: string
  order?: number
  children?: NoteTreeNode[]
}

export type Theme = 'light' | 'dark' | 'system'

export type FenceLanguage = string

export type CalloutType = 'note' | 'caution' | 'danger' | 'tip' | 'info'

export interface NoteMeta {
  title: string
  description: string
}

export interface NoteFile {
  content: string
  data: NoteMeta
}

export interface NoteTreeNode {
  title: string
  slug?: string
  filePath?: string
  order?: number
  children?: NoteTreeNode[]
}

export interface PrevNextLinks {
  prev?: NoteTreeNode
  next?: NoteTreeNode
}