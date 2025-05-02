import Head from 'next/head'
import favicon from '@/public/favicon.ico'

export function LayoutBase({ children }) {
  return (
    <>
      <Head>
        <title>TeleBots</title>
        <link rel="icon" href={favicon.src} />
      </Head>
      <main>
        {children}
      </main>
    </>
  )
}