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
        <section className='pt-10 pr-52'>
          <div className='flex items-center pl-14 gap-20'>
            <Logo />
            <h3 className='text-primary text-xl'>Hi, my name is</h3>
          </div>
          <div className='pl-52'>
            <h1 className='text-primary-lighter text-6xl pt-5'>Charbel Fayad.</h1>
            <Shell />
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
