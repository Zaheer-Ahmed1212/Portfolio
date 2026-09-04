import React, { useEffect, useRef } from 'react'
import weatherpr from '../assets/weatherpr.jpg'
import perfume from '../assets/perfpr.jpg'
import dental from '../assets/dental.jpg'
import fastfood from '../assets/fastfood.jpg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Projects() {
  const sectionRef = useRef(null)
  const labelRef = useRef(null)
  const headingRef = useRef(null)
  const descriptionRef = useRef(null)
  const cardsRef = useRef(null)

  const projects = [
    {
      title: 'Perfume Website',
      description: 'A modern e-commerce website designed for a perfume brand, featuring product browsing, cart functionality, authentication, and a responsive shopping experience.',
      technologies: 'React • JavaScript • Tailwind CSS',
      link: 'https://zaheerahmed.e-complex.edu.pk/index.html',
      img: perfume
    },
    {
      title: 'Fastfood Landing Page',
      description: 'A modern restaurant website created to showcase food offerings through an engaging layout, interactive menu, responsive design, and smooth animations.',
      technologies: 'React • Tailwind CSS • GSAP',
      link: 'https://fastfood-self.vercel.app/',
      img: fastfood
    },
    {
      title: 'Dental Clinic Webpage',
      description: 'A modern and responsive dental clinic website designed with a clean, premium aesthetic. Built with React, Tailwind CSS, and GSAP, featuring smooth animations, treatment sections, testimonials, before-and-after cases, and an appointment booking interface.',
      technologies: 'React • GSAP • Tailwind CSS',
      link: 'https://dental-clinic-bt1p.vercel.app/',
      img: dental
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([labelRef.current, headingRef.current, descriptionRef.current], {
        opacity: 0,
        y: 40
      })

      gsap.set(cardsRef.current.children, {
        opacity: 0,
        y: 60
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
        duration: 0.7,
        stagger: 0.15
      }, '-=0.3')
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className='text-white px-5 sm:px-8 lg:px-12 py-20'>
      <div className='max-w-6xl mx-auto'>
        <div className='mb-10'>
          <p ref={labelRef} className='text-blue-400 text-sm sm:text-base font-medium tracking-wider'>
            MY WORK
          </p>
          <h2 ref={headingRef} className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 tracking-tight'>
            Some Things I've <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300'>Built</span>
          </h2>
          <p ref={descriptionRef} className='text-zinc-400 mt-4 max-w-2xl text-sm sm:text-base leading-relaxed'>
            A selection of websites and digital experiences I've built with a
            focus on responsive design, modern interfaces, performance, and
            creating a strong online presence for businesses and brands.
          </p>
        </div>
        <div ref={cardsRef} className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm rounded-2xl p-5 hover:border-blue-500/50 hover:-translate-y-2 shadow-xl shadow-black/10 transition duration-300'
            >
              <div className='h-40 bg-zinc-900 rounded-xl mb-5 overflow-hidden border border-zinc-800'>
                <img
                  src={project.img}
                  className='w-full rounded-xl h-full object-cover group-hover:scale-105 transition duration-500'
                  alt={project.title}
                />
              </div>
              <h3 className='text-xl font-semibold text-blue-300 group-hover:text-cyan-300 transition duration-300'>
                {project.title}
              </h3>
              <p className='text-zinc-400 text-sm leading-relaxed mt-3'>
                {project.description}
              </p>
              <p className='text-blue-400 text-sm mt-4'>
                {project.technologies}
              </p>
              <a
                href={project.link}
                className='mt-5 inline-flex items-center px-5 py-2.5 bg-blue-500 hover:bg-blue-400 hover:-translate-y-0.5 rounded-lg shadow-lg shadow-blue-500/20 transition duration-300'
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects