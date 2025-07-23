import { Project } from '@models/project'
import React, { FC, useEffect } from 'react'
import ProjectCard from './projectCard'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import useDidMount from '@hooks/useDidMount'

const projectSlider: FC<{ projects: Project[] }> = ({ projects }) => {
  const [slidesPerView, setSlidesPerView] = React.useState(1)
  useDidMount(() => {
    if (window.innerWidth > 1680) {
      setSlidesPerView(3)
    } else if (window.innerWidth > 1080) {
      setSlidesPerView(2)
    } else if (window.innerWidth > 650 && window.innerWidth < 768) {
      setSlidesPerView(1.5)
    } else {
      setSlidesPerView(1)
    }
  })

  return (
    <>
      {/* vertical */}
      <Swiper
        style={{ paddingLeft: '15%', marginTop: '5%' }}
        spaceBetween={10}
        slidesPerView={slidesPerView}
        onSwiper={(swiper) => {
          const timer = setInterval(() => {
            if (swiper.activeIndex === projects.length - 1) {
              swiper.slideTo(0, 1000)
            } else {
              swiper.slideNext(1000)
            }
          }, 1000000)

          return () => {
            clearInterval(timer)
          }
        }}
      >
        {projects.map((project, i) => (
          <SwiperSlide key={project.title + i}>
            <ProjectCard key={project.title + i} project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-[5rem] text-primary">$ Click on a project to view it</div>
      <div className="mt-8 text-primary">$ Swipe to view more projects</div>
    </>
  )
}

export default projectSlider
