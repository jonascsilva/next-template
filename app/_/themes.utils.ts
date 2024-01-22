import type { Theme, Themes } from './themes.types'

const themes: Themes = ['light', 'dark']

const getNextTheme = (theme: Theme) => {
  const currentThemeIndex = themes.indexOf(theme)

  const nextThemeIndex = (currentThemeIndex + 1) % themes.length

  return themes[nextThemeIndex]
}

export { themes, getNextTheme }
