import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'nprogress/nprogress.css'
import dynamic from 'next/dynamic'
import { GoogleTagManager } from '@next/third-parties/google'

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
      <GoogleTagManager gtmId="G-MZJGEP6N5D" />
    </>
  )
}

export default MyApp
