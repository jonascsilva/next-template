import { ThemeButton } from '@/_/ThemeButton'

import classes from './page.module.scss'

const Page = () => (
  <main className={classes.main}>
    <ThemeButton />
    <h1 className={classes.heading}>Next.js Template</h1>
  </main>
)

export { Page as default }
