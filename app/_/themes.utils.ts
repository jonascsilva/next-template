import { themes } from './themes.consts'
import type { Theme } from './themes.types'

const getNextTheme = (theme: Theme) => {
  const currentThemeIndex = themes.indexOf(theme)

  const nextThemeIndex = (currentThemeIndex + 1) % themes.length

  return themes[nextThemeIndex]
}

export { getNextTheme }
