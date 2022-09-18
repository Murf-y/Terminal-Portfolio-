import type { NextPage } from 'next'
import Head from 'next/head'
import Shell from '@components/shell'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-blue">
      <Head>
        <title>Murf Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className='pt-10 pl-52 pr-52'>
          <h3 className='text-primary text-xl'>Hi, my name is</h3>
          <h1 className='text-primary-lighter text-6xl pt-5'>Charbel Fayad.</h1>

          <Shell />
        </section>
      </main>
    </div>
  )
}

export default Home
