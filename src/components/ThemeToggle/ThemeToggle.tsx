'use client'

import type { JSX } from 'react'
import type { Theme } from '@/types'
import { Button } from '../Button/Button'
import { useThemeContext } from '@/context'
import { Sun, Moon, Screen } from '../Icons/Icons'
import { useState } from 'react'
import './ThemeToggle.css'

export function ThemeToggle(): JSX.Element {
  const { theme, handleTheme, isMounted } = useThemeContext()
  const [ activeModal, setActiveModal ] = useState(false)

  const themeIcon = isMounted ? (
    theme === 'system' ? <Screen /> : theme === 'dark' ? <Moon /> : <Sun />
  ) : (
    <Screen />
  )

  const handleModal = () => {
    setActiveModal(prev => !prev)
  }

  const changeTheme = (newTheme: Theme) => {
    handleTheme(newTheme)
    setActiveModal(false)
  }

  return (
    <div className='ThemeToggle'>
      <span onClick={handleModal}>{themeIcon}</span>
      <div className={`container ${activeModal && 'active'}`}>
        <Button title='System' onClick={() => changeTheme('system')}>
          <Screen />
        </Button>
        <Button title='Dark' onClick={() => changeTheme('dark')}>
          <Moon />
        </Button>
        <Button title='Light' onClick={() => changeTheme('light')}>
          <Sun />
        </Button>
      </div>
    </div>
  )
}
