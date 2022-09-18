import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NProgress from 'nprogress'
import { useEffect } from 'react'

NProgress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: false,
})

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const handleRouteChange = () => {
      NProgress.done()
    }

    const handleNavStart = () => {
      NProgress.start()
    }

    router.events.on('routeChangeStart', handleNavStart)
    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeStart', handleNavStart)
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default MyApp
