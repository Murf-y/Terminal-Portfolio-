import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'nprogress/nprogress.css'
import dynamic from 'next/dynamic'
import { GoogleAnalytics } from 'nextjs-google-analytics'

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
      <GoogleAnalytics trackPageViews />
    </>
  )
}

export default MyApp
