import type { JSX } from 'react'
import type { NoteTreeNode } from '@/types'
import { Topic } from '../Topic/Topic'
import './ListTopic.css'

interface ListTopicProps {
  topics: NoteTreeNode
}

export function ListTopic ({ topics }: ListTopicProps): JSX.Element {
  const { title, children } = topics

  return (
    <ul className='ListTopic'>
      <h5>{title}</h5>
      <ul>
        {children?.map((topic) => (
          <Topic key={topic.title} data={topic} />
        ))}
      </ul>
    </ul>
  )
}
