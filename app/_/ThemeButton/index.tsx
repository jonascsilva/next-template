'use client'

import { MdDarkMode, MdLightMode } from 'react-icons/md'

import { getNextTheme } from '@/_/themes.utils'
import { useTheme } from '@/_/useTheme'

import { useIsMounted } from './useIsMounted'

import classes from './index.module.scss'

const ThemeButton = () => {
  const { currentTheme, setTheme } = useTheme()
  const isMounted = useIsMounted()

  const handleClick = () => {
    const nextTheme = getNextTheme(currentTheme)

    setTheme(nextTheme)
  }

  return (
    <button
      disabled={!isMounted}
      onClick={handleClick}
      className={classes.button}
      aria-label='Change theme'
    >
      {isMounted && currentTheme === 'dark' && <MdLightMode size='100%' />}
      {isMounted && currentTheme === 'light' && <MdDarkMode size='100%' />}
    </button>
  )
}

export { ThemeButton }
