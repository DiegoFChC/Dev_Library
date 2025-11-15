import { useEffect, useState } from 'react'

const OBSERVER_CONF: IntersectionObserverInit = {
  root: null,
  rootMargin: '-115px 0% 0%',
  threshold: 0,
}

export function useObserver() {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    const intersectionHandler = (entry: IntersectionObserverEntry) => {
      const id = (entry.target as HTMLElement).id
      setActiveId(id)
    }

    const $headings = document.querySelectorAll<HTMLElement>(
      '.DocPage > article > .newSection'
    )

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          intersectionHandler(entry)
        }
      })
    }, OBSERVER_CONF)

    $headings.forEach((heading) => observer.observe(heading))

    return () => {
      observer.disconnect()
    }
  }, [])

  return { activeId }
}
