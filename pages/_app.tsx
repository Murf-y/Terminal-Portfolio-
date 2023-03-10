import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'nprogress/nprogress.css'
import dynamic from 'next/dynamic'

const TopProgressBar = dynamic(
  () => {
    return import('@components/topProgressBar')
  },
  { ssr: false }
)
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <TopProgressBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
