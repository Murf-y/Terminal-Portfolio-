import Markdown from '@components/markdown'
import { Project } from '@models/project'
import projects_json from '../public/data/projects.json'
import { NextPage } from 'next'
import Head from 'next/head'
import ProjectSlider from '@components/projectSlider'
import { useCallback, useEffect } from 'react'
import { loadFull } from 'tsparticles'
import Particles from 'react-particles'
import { sendGTMEvent } from '@next/third-parties/google'

const PorjectsPage: NextPage = () => {
  let projects: Project[] = []

  projects_json.projects.map((project) => {
    projects.push({
      title: project.title,
      image_path:
        project.image_path.length == 0 ? projects_json.default_image_path : project.image_path,
      tags: project.tags,
      link: project.link.length == 0 ? projects_json.default_link : project.link,
    })
  })

  const particlesInit = useCallback(async (engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {}, [])

  useEffect(() => {
    sendGTMEvent({ event: 'page_view', pagePath: '/projects' })
  }, [])

  return (
    <>
      <Head>
        <title>Murf Portfolio | Projects</title>
      </Head>
      <div className="min-h-screen bg-blue ">
        <main className="relative z-50">
          <section className="grid grid-cols-8 gap-x-5 pt-5 px-4">
            <div className="col-start-1 col-span-8 md:col-start-2 md:col-span-6">
              {
                <Markdown fileName="projects">
                  <ProjectSlider projects={projects} />
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

export default PorjectsPage
