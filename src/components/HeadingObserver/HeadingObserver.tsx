'use client'

import type { JSX } from 'react'
import { parseContentMarkdoc } from '@/services/client'
import { useObserver } from '@/hooks/useObserver'
import { Tag } from '@markdoc/markdoc'
import './HeadingObserver.css'

interface HeadingOberverProps {
  content: string
}

export function HeadingObserver({ content }: HeadingOberverProps): JSX.Element {
  const tree = parseContentMarkdoc(content) as Tag
  const { children } = tree
  const tags = children.filter(
    (item) => item.name === 'Heading' && item.attributes.level > 1
  )
  const { activeId } = useObserver()

  return (
    <nav className='HeadingOberver'>
      <h5>En esta página</h5>
      <ul>
        {tags.map((tag) => {
          const text = tag.children[0]
          const textId = text.toString().toLowerCase().replace(/\s/g, '-')
          const level = tag.attributes.level

          return (
            <li key={textId} className={`heading-${level}`}>
              <a href={`#${textId}`} className={activeId === textId ? 'active' : ''}>{text}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
