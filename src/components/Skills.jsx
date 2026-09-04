import React, { useEffect, useRef } from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa'
import { SiTailwindcss, SiVite } from 'react-icons/si'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Skills() {
  const sectionRef = useRef(null)
  const labelRef = useRef(null)
  const headingRef = useRef(null)
  const descriptionRef = useRef(null)
  const cardsRef = useRef(null)

  const skills = [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Vite', icon: <SiVite /> }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([labelRef.current, headingRef.current, descriptionRef.current], {
        opacity: 0,
        y: 40
      })

      gsap.set(cardsRef.current.children, {
        opacity: 0,
        y: 50
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        },
        defaults: {
          ease: 'power3.out'
        }
      })

      tl.to(labelRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6
      })
      .to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7
      }, '-=0.35')
      .to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7
      }, '-=0.4')
      .to(cardsRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1
      }, '-=0.3')
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className='text-white px-5 sm:px-8 lg:px-12 py-20'>
      <div className='max-w-6xl mx-auto'>
        <div className='mb-10'>
          <p ref={labelRef} className='text-blue-400 text-sm sm:text-base font-medium tracking-wider'>
            MY SKILLS
          </p>
          <h2 ref={headingRef} className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 tracking-tight'>
            Technologies I <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300'>Work With</span>
          </h2>
          <p ref={descriptionRef} className='text-zinc-400 mt-4 max-w-2xl text-sm sm:text-base leading-relaxed'>
            I use modern frontend technologies to create responsive websites,
            interactive interfaces, and smooth digital experiences tailored
            to different business and project needs.
          </p>
        </div>
        <div ref={cardsRef} className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
          {skills.map((skill, index) => (
            <div
              key={index}
              className='group border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm rounded-xl p-5 flex flex-col items-center justify-center gap-3 hover:border-blue-500/50 hover:bg-blue-500/5 hover:-translate-y-1 shadow-lg shadow-black/10 transition duration-300'
            >
              <div className='text-3xl text-blue-300 group-hover:text-cyan-300 group-hover:scale-110 transition duration-300'>
                {skill.icon}
              </div>
              <p className='text-sm sm:text-base text-zinc-300 group-hover:text-white transition duration-300'>
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills