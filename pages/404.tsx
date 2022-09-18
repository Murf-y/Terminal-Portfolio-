import Head from 'next/head'

export default function FourOhFour(): React.ReactElement {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <div className="grid items-center h-full grid-cols-1 justify-items-center pt-24 pb-20">
        <h1 className="self-end divide-x-2 divide-black">
          <span className="px-2 font-bold">404</span>
          <span className="px-2">Page Not Found</span>
        </h1>
        <a href="/" className="self-start my-4 text-sm btn btn-primary">
          Go back home
        </a>
      </div>
    </>
  )
}

