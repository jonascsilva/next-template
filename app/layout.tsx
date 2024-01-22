import clsx from 'clsx'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'

import { Providers } from './_/Providers'

import classes from './layout.module.scss'

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'Next.js Template',
  description: 'Page made with Next.js template'
}

const Layout = ({ children }: PropsWithChildren) => (
  <html lang='en' suppressHydrationWarning>
    <body className={clsx(inter.className, classes.body)}>
      <Providers>{children}</Providers>
    </body>
  </html>
)

export { metadata, Layout as default }
