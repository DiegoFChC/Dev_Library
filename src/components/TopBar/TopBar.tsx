'use client'

import type { JSX } from 'react'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import Link from 'next/link'
import { ThemeContextProvider } from '@/context/ThemeContext'
import { Menu } from '../Icons/Icons'
import { useAppContext } from '@/context'
import './TopBar.css'

interface TopBarProps {
  showMenu?: boolean
}

export function TopBar({ showMenu = false }: TopBarProps): JSX.Element {
  const { activateMenu } = useAppContext()

  return (
    <header className='TopBar'>
      <div className='logo'>
        {
          showMenu && (
            <button onClick={activateMenu}>
              <Menu />
            </button>
          )
        }
        <Link href='/'>./DEV_LIBRARY</Link>
      </div>
      <ThemeContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
    </header>
  )
}
