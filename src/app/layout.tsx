import type { JSX, ReactNode } from 'react'
import { AppContextProvider } from '../context/AppContext'
import './globals.css'

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang='en'>
      <body>
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  )
}
