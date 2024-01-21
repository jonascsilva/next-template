'use client'

import { useTheme } from 'next-themes'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

import { nextThemes } from '@/_/themes'
import { Theme } from '@/_/themes.types'
import { useIsMounted } from '@/_/useIsMounted'

import classes from './index.module.scss'

const ThemeButton = () => {
  const isMounted = useIsMounted()
  const { resolvedTheme, setTheme } = useTheme()

  const handleClick = () => {
    const currentTheme = resolvedTheme as Theme

    const nextTheme = nextThemes[currentTheme]

    setTheme(nextTheme)
  }

  return (
    <button
      disabled={!isMounted}
      onClick={handleClick}
      className={classes.button}
      aria-label='Change theme'
    >
      {isMounted && resolvedTheme === 'dark' && <MdLightMode size='100%' />}
      {isMounted && resolvedTheme === 'light' && <MdDarkMode size='100%' />}
    </button>
  )
}

export { ThemeButton }
