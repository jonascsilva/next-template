'use client'

import { useTheme } from 'next-themes'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

import { useIsMounted } from '@/hooks/useIsMounted'
import { Theme } from '@/types/themes'

import classes from './index.module.scss'

const nextThemes = {
  dark: 'light',
  light: 'dark'
}

function ThemeButton() {
  const isMounted = useIsMounted()
  const { resolvedTheme, setTheme } = useTheme()

  function handleClick() {
    const nextTheme = nextThemes[resolvedTheme as Theme]

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
