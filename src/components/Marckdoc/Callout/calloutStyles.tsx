import type { JSX } from 'react'
import { Note, Danger, Caution, Info, Bulb } from '../../Icons/Icons'

type CalloutKey = 'note' | 'danger' | 'caution' | 'info' | 'tip'

type CalloutType = {
  key: CalloutKey
  title: string
  icon: JSX.Element
}

export const STYLE: Record<CalloutKey, CalloutType> = {
  note: {
    key: 'note',
    title: 'Nota',
    icon: <Note />
  },
  danger: {
    key: 'danger',
    title: 'Danger',
    icon: <Danger />
  },
  caution: {
    key: 'caution',
    title: 'Caution',
    icon: <Caution />
  },
  info: {
    key: 'info',
    title: 'Info',
    icon: <Info />
  },
  tip: {
    key: 'tip',
    title: 'Tip',
    icon: <Bulb />
  },
}