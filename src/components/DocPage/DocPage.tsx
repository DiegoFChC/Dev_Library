import { parseContentMarkdoc } from '@/services/client'
import { MarkdocContent } from './MarkdocContent/MarkdocContent'
import { RenderableTreeNode } from '@markdoc/markdoc'
import type { JSX } from 'react'
import type { NoteMeta } from '@/types'
import './DocPage.css'

interface DocPageProps {
  content: string
  headData: NoteMeta
}

export function DocPage ({ content, headData }: DocPageProps): JSX.Element {
  const { title, description } = headData
  const data: RenderableTreeNode = parseContentMarkdoc(content)

  return (
    <article className='DocPage'>
      <h1>{title}</h1>
      <p>{description}</p>
      <hr />

      <MarkdocContent content={data} />
    </article>
  )
}