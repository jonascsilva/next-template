import type { Themes } from './themes.types'

const themes: Themes = ['light', 'dark']

const nextThemes = {
  dark: 'light',
  light: 'dark'
}

export { themes, nextThemes }
