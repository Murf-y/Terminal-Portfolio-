import Head from 'next/head'
import { useEffect } from 'react'

export default function FourOhFour(): React.ReactElement {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div className="min-h-screen grid items-cente grid-cols-1 justify-items-center pt-24 pb-20 bg-blue">
        <h1 className="self-end divide-x-2 divide-black">
          <span className="px-2 font-bold text-primary-lighter text-9xl">404</span>
          <span className="px-2 text-primary-lighter text-5xl">Page Not Found</span>
        </h1>
        <a href="/" className="self-start my-10 text-md text-primary border-2 p-2 rounded-lg">
          Go back home
        </a>
      </div>
    </>
  )
}
