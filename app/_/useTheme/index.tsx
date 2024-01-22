import { useTheme } from 'next-themes'

import { Theme } from '@/_/themes.types'

type SetTheme = (theme: Theme) => void

const useTypedTheme = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return { currentTheme: resolvedTheme as Theme, setTheme: setTheme as SetTheme }
}

export { useTypedTheme as useTheme }
