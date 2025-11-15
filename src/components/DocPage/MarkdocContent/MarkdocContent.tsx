import React, { ReactNode } from 'react'
import { renderers, RenderableTreeNode } from '@markdoc/markdoc'
import { renderOpts } from '@/components/Marckdoc/configMarkdoc'

interface MarkdocContentProps {
  content: RenderableTreeNode
}

export function MarkdocContent ({ content }: MarkdocContentProps): ReactNode {
  return (
    <>
      { renderers.react(content, React, renderOpts) }
    </>
  )
}