import Markdown from '@components/markdown'
import { Project } from '@models/project'
import projects_json from '../public/data/projects.json'
import { NextPage } from 'next'
import Head from 'next/head'
import ProjectSlider from '@components/projectSlider'

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

  return (
    <>
      <Head>
        <title>Murf Portfolio | Projects</title>
      </Head>
      <div className="min-h-screen bg-blue ">
        <main>
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
      </div>
    </>
  )
}

export default PorjectsPage
