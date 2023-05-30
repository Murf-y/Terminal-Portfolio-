import Markdown from '@components/markdown'
import { NextPage } from 'next'
import Head from 'next/head'
import { useCallback } from 'react'
import { loadFull } from 'tsparticles'
import Particles from 'react-particles'

const AboutPage: NextPage = () => {
  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
  }, [])
  return (
    <>
      <Head>
        <title>Murf Portfolio | About</title>
      </Head>
      <div className="min-h-screen bg-blue ">
        <main className="relative z-50">
          <section className="grid grid-cols-8 gap-x-5 pt-5">
            <div className=" mx-4 col-start-1 col-span-8 md:col-start-2 md:col-span-6">
              {
                <Markdown fileName="about">
                  <div className="flex flex-col-reverse xl:flex-row justify-between items-center w-full min-h-full h-fit py-2 md:py-10 px-2 md:px-7">
                    <div className="h-full w-full text-primary-greyish md:pr-8 text-lg">
                      Hello! My name is <strong className="text-primary">Charbel</strong> and I
                      enjoy creating things that live on the internet. Currently pursuing a
                      bacheloars degree in{' '}
                      <strong className="text-primary">computer science</strong> at LAU.
                      <br />
                      <br />I have experience i nearly all fields of development, starting from web
                      through mobile till game development. You can find projects related to these
                      in
                      <strong className="text-primary"> projects.md</strong>.<br />
                      <br />
                      Accademically, i am enrolled in the honors program with a{' '}
                      <strong className="text-primary"> 3.97 </strong>
                      CGPA.
                      <br />
                      <br />
                      Experience wise, i did a 3 month intrenship as a Full Stack developer
                      <strong className="text-primary"> @ajjerni.com</strong> and currently looking
                      for a new one!
                      <br />
                      <br />
                      Here are a few technologies I've been working with recently:
                      <div className="flex gap-16 md:gap-36 flex-col md:flex-row justify-start items-start md:items-center mt-10">
                        <ul className="marker:text-primary list-inside list-disc underline">
                          <li className="whitespace-nowrap">Nextjs</li>
                          <li className="whitespace-nowrap">Typescript</li>
                          <li className="whitespace-nowrap">Strapi</li>
                        </ul>
                        <ul className="marker:text-primary list-inside list-disc underline">
                          <li className="whitespace-nowrap">Flutter</li>
                          <li className="whitespace-nowrap">Unity</li>
                          <li className="whitespace-nowrap">Postgresql</li>
                        </ul>
                      </div>
                    </div>
                    <div className="h-full flex justify-center items-center m-10">
                      <div className="w-fit h-fit rounded-lg border-4 border-primary">
                        <img
                          className="rounded-lg -translate-x-3 -translate-y-3 md:-translate-y-5 md:-translate-x-5 "
                          src="/images/profile2.jpg"
                        ></img>
                      </div>
                    </div>
                  </div>
                </Markdown>
              }
            </div>
          </section>
        </main>

        <Particles
          id="tsparticles"
          url="/data/particlesjs-config.json"
          init={particlesInit}
          loaded={particlesLoaded}
        ></Particles>
      </div>
    </>
  )
}

export default AboutPage
