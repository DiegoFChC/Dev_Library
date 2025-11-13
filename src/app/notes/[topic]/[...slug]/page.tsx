import { notFound } from 'next/navigation'
import { getNotesBySlug, getPrevNext } from '@/services/server'
import { DocNavigation, DocPage, HeadingObserver } from '@/components'
import type { Metadata } from 'next'
import './page.css'

type metadataProps = {
  params: {
    topic: string,
    slug: string[]
  }
}

interface DocsProps {
  params: {
    topic: string
    slug: string[]
  }
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { topic, slug } = await params

  const { data } = getNotesBySlug([topic, ...slug])
  const { title, description } = data

  return {
    title: `${title} | ${topic === title ? 'Dev Library' : topic}`,
    description: description
  }
}

export default async function Docs({ params }: DocsProps) {
  const { topic, slug } = await params
  const note = getNotesBySlug([topic, ...slug])

  const { prev, next } = getPrevNext(topic, slug)

  if (!note) notFound()

  const { content, data } = note

  return (
    <main className='Docs'>
      <div className='content-wrapper'>
        <DocPage content={content} headData={data} />
        <DocNavigation prev={prev} next={next} />
      </div>
      <HeadingObserver content={content} />
    </main>
  )
}
