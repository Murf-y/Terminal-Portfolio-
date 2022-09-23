import Logo from '@components/icons/Logo'
import Markdown from '@components/markdown'
import { NextPage } from 'next'
import  Head  from 'next/head'

const AboutPage: NextPage = () => {
  return (
    <>
    <Head>
        <title>Murf Portfolio | About</title>
    </Head>
    <div className="min-h-screen bg-blue ">
      <main>
        <section className="grid grid-cols-8 gap-x-5 pt-5">
          <div className="col-start-2 col-span-6">
            {<Markdown fileName="about" />}
          </div>
        </section>
      </main>
    </div>
    </>
  )
}

export default AboutPage
