import type { NextPage } from 'next'
import Head from 'next/head'
import Shell from '@components/shell'
import Logo from '@components/icons/Logo'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-blue">
      <Head>
        <title>Murf Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className='grid grid-cols-6 gap-x-5 pt-10'>
          <div className='col-start-1 place-self-center'>
          <Logo />
          </div>
          <h3 className='text-primary text-xl col-start-2 col-span-4 self-center'>Hi, my name is</h3>
          <h1 className='text-primary-lighter text-6xl col-start-2 col-span-4'>Charbel Fayad.</h1>

          <div className='col-start-2 col-span-4'>
            <Shell />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
