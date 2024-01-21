'use client'

import { ThemeProvider } from 'next-themes'
import { PropsWithChildren } from 'react'

import { Themes } from '@/_/themes.types'

const themes: Themes = ['light', 'dark']

const Client = ({ children }: PropsWithChildren) => (
  <ThemeProvider themes={themes}>{children}</ThemeProvider>
)

export { Client }
