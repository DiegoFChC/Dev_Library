import { useTheme } from '@/hooks/useTheme'
import { ReactNode, useMemo, createContext, useContext } from 'react'
import type { Theme } from '@/types'

interface ThemeContextValue {
  theme: Theme
  handleTheme: (newTheme: Theme) => void
  isMounted: boolean
}

interface ThemeContextProviderProps {
  children: ReactNode
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function useThemeContext(): ThemeContextValue {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }

  return context
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const { theme, handleTheme, isMounted } = useTheme()

  const value = useMemo(
    () => ({ theme, handleTheme, isMounted }),
    [theme, handleTheme, isMounted]
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
