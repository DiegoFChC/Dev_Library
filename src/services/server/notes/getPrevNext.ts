import type { NoteTreeNode, PrevNextLinks } from '@/types'
import { getNotesTree } from './getNotesTree'

export function getPrevNext ( topic: string, currentSlug: string[] ): PrevNextLinks {
  // const currentSlugDecode = currentSlug.map(slug => decodeURIComponent(slug))
  const tree = getNotesTree(topic)

  const flatList: NoteTreeNode[] = []
  flattenTree(tree, flatList)

  const currentSlugPath = [topic, ...currentSlug].join('/')
  const index = flatList.findIndex(node => node.slug === currentSlugPath)

  if (index === -1) return { prev: undefined, next: undefined }

  return {
    prev: index > 0 ? flatList[index - 1] : undefined,
    next: index < flatList.length - 1 ? flatList[index + 1] : undefined
  }
}

function flattenTree(nodes: NoteTreeNode[], result: NoteTreeNode[]): void {
  for (const node of nodes) {
    if (node.slug) result.push(node)
    if (node.children) flattenTree(node.children, result)
  }
}