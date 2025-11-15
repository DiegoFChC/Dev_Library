import type { JSX } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './TopicButton.css'

interface TopicButtonProps {
  name: string
  topic: string
  img: string
}

export function TopicButton({ name, topic, img }: TopicButtonProps): JSX.Element {
  return (
    <Link
      href={`/notes/${topic}/Descripción%20general/Intro`}
      className='TopicButton'
    >
      {name}
      <Image src={img} alt={`Logo ${name}`} width={0} height={0} />
    </Link>
  )
}
