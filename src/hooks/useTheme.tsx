import type { Theme } from '@/types'
import { useCallback, useEffect, useState } from 'react'
import { getCurrentTheme, saveTheme, getSystemTheme } from '@/services/client'

export function useTheme () {
  const [theme, setTheme] = useState<Theme>(() => getCurrentTheme())
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleTheme = useCallback((newTheme: Theme): void => {
    setTheme(newTheme)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    const finalTheme = theme === 'system'
      ? getSystemTheme()
      : theme
    
    saveTheme(finalTheme)
  }, [theme, isMounted])

  return { theme, handleTheme, isMounted }
}