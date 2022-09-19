import type { NextPage } from 'next'
import Head from 'next/head'
import Shell from '@components/shell'
import Logo from '@components/icons/Logo'
import { useState } from 'react'

const Home: NextPage = () => {
  const [showShell, setShowShell] = useState<boolean>(true)
  return (
    <div className="min-h-screen bg-blue ">
      <Head>
        <title>Murf Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="grid grid-cols-6 gap-x-5 pt-10">
          <div className="col-start-1 place-self-center animate-[slide-left_0.2s_ease-in-out]">
            <Logo />
          </div>
          <h3 className="text-primary text-xl col-start-2 col-span-4 self-center animate-[slide-left_0.2s_ease-in-out]">
            Hi, my name is
          </h3>
          <h1 className="text-primary-lighter text-6xl col-start-2 col-span-4 animate-[slide-left_0.2s_ease-in-out]">Charbel Fayad.</h1>

          <div className="col-start-2 col-span-4">
            {showShell && <Shell setShowShell={setShowShell} />}
          </div>

          {!showShell && (
            <div
              className="col-start-3 col-span-2 place-self-center justify-self-center btn mt-72"
              onClick={() => {
                setShowShell(true)
              }}
            >
              Open Shell
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default Home
