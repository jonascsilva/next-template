import { ThemeButton } from '#/ThemeButton'

import classes from './page.module.scss'

const Page = () => (
  <main className={classes.main}>
    <h1 className={classes.heading}>Next.js template</h1>
    <ThemeButton />
  </main>
)

export { Page as default }
