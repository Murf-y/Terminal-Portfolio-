import type { NextPage } from 'next'
import Head from 'next/head'
import Shell from '@components/shell'
import Logo from '@components/icons/Logo'
import { useState, useCallback, useEffect } from 'react'
import { loadFull } from 'tsparticles'
import Particles from 'react-particles'
import Link from 'next/link'
import { event } from 'nextjs-google-analytics'

const Home: NextPage = () => {
  const [showShell, setShowShell] = useState<boolean>(true)

  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {}, [])

  return (
    <div className="min-h-screen bg-blue ">
      <Head>
        <title>Murf Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative z-50">
        <section className="grid grid-cols-6 gap-x-5 pt-10">
          <div className="col-start-2 md:col-start-1 place-self-center animate-[slide-left_0.2s_ease-in-out]">
            <Logo />
          </div>
          <h3 className="text-primary text-xl col-start-3 md:col-start-2 col-span-3 self-center animate-[slide-left_0.2s_ease-in-out]">
            Hi, my name is
          </h3>
          <h3 className="hidden sm:flex gap-5  text-xl col-start-5 w-full justify-between col-span-1 self-center animate-[slide-left_0.2s_ease-in-out]">
            <Link
              className="text-primary underline"
              href="/about"
              onClick={() => {
                event('link_click', {
                  label: '/about',
                })
              }}
            >
              About
            </Link>
            <Link
              className="text-primary underline"
              href="/projects"
              onClick={() => {
                event('link_click', {
                  label: '/projects',
                })
              }}
            >
              Projects
            </Link>
          </h3>
          <h1 className="text-primary-lighter text-2xl md:text-3xl col-start-2 col-span-4 mt-2 md:mt-0 animate-[slide-left_0.2s_ease-in-out]">
            Charbel Fayad.
          </h1>

          <div className="col-start-1 col-span-6 md:col-start-2 md:col-span-4 px-4 md:px-0">
            {showShell && <Shell setShowShell={setShowShell} />}
          </div>

          {!showShell && (
            <div
              className="col-start-1 col-span-full place-self-center justify-self-center btn mt-72"
              onClick={() => {
                setShowShell(true)
                event('button_click', {
                  label: 'open_shell',
                })
              }}
            >
              Open Shell
            </div>
          )}
        </section>
      </main>
      <Particles
        id="tsparticles"
        url="/data/particlesjs-config.json"
        init={particlesInit}
        loaded={particlesLoaded}
      ></Particles>
    </div>
  )
}

export default Home
