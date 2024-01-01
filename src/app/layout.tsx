import cn from 'classnames'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'

import { Client } from './layout.client'
import classes from './layout.module.scss'

const inter = Inter({ subsets: ['latin'], weight: ['400', '600', '700'] })

const metadata: Metadata = {
  title: 'Next.js Template',
  description: 'Page made with Next.js template'
}

const Layout = ({ children }: PropsWithChildren) => (
  <html lang='en' suppressHydrationWarning>
    <body className={cn(inter.className, classes.body)}>
      <Client>{children}</Client>
    </body>
  </html>
)

export { metadata, Layout as default }
