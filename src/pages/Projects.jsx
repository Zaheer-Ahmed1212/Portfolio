import React, { useEffect, useRef } from 'react'
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import perfume from '../assets/perfpr.jpg'
import weather from '../assets/weatherpr.jpg'
import calculator from '../assets/calcpr.jpg'
import currency from '../assets/currpr.jpg'
import dental from '../assets/dental.jpg'
import fastfood from '../assets/fastfood.jpg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Projects() {
  const pageRef = useRef(null)

  const projects = [
    {
      title: 'Currency Converter',
      description:
        'A fast and interactive currency converter designed to provide current exchange rates through a simple, clear, and user-friendly interface.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS'],
      link: 'https://currency-convertor-delta-six.vercel.app/',
      img: currency,
      github: 'https://github.com/Zaheer-Ahmed1212/Currency-convertor.git'
    },
    {
      title: 'Fastfood Landing Page',
      description:
        'A modern restaurant website designed to showcase food offerings with an engaging layout, interactive menu, responsive design, and smooth animations.',
      technologies: ['React', 'TailwindCSS', 'GSAP'],
      link: 'https://fastfood-self.vercel.app/',
      img: fastfood,
      github: 'https://github.com/Zaheer-Ahmed1212/Fastfood.git'
    },
    {
      title: 'Perfume Website',
      description:
        'A modern e-commerce website designed to create a professional shopping experience with product browsing, cart functionality, authentication, and responsive design.',
      technologies: ['React', 'JavaScript', 'Tailwind CSS'],
      link: 'https://zaheerahmed.e-complex.edu.pk/index.html',
      img: perfume,
      github: 'https://github.com/Zaheer-Ahmed1212/my-perfume-project.git'
    },
    {
      title: 'Weather App',
      description:
        'A clean and responsive weather app designed to provide quick and accurate weather updates with a simple, easy-to-use interface.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      link: 'https://weather-app-psi-ten-95.vercel.app/',
      img: weather,
      github: 'https://github.com/Zaheer-Ahmed1212/calculator-project.git'
    },
    {
      title: 'Calculator',
      description:
        'A clean and responsive calculator application focused on providing a simple interface and smooth experience for everyday arithmetic operations.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      link: 'https://calculator-sable-psi-15.vercel.app/',
      img: calculator,
      github: 'https://github.com/Zaheer-Ahmed1212/calculator-project.git'
    },
    {
      title: 'Dental Clinic Webpage',
      description:
        'A modern and responsive dental clinic website designed with a clean, premium aesthetic. Built with React, Tailwind CSS, and GSAP.',
      technologies: ['REACT', 'Tailwind CSS', 'GSAP'],
      link: 'https://dental-clinic-bt1p.vercel.app/',
      img: dental,
      github: 'https://github.com/Zaheer-Ahmed1212/dental-clinic.git'
    }
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.projects-section')

      sections.forEach((section) => {
        const label = section.querySelector('.projects-label')
        const heading = section.querySelector('.projects-heading')
        const description = section.querySelector('.projects-description')
        const cards = section.querySelectorAll('.project-card')
        const button = section.querySelector('.projects-button')

        gsap.set([label, heading, description, button].filter(Boolean), {
          opacity: 0,
          y: 40
        })

        gsap.set(cards, {
          opacity: 0,
          y: 50
        })

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          defaults: {
            ease: 'power3.out'
          }
        })

        if (label) {
          tl.to(label, {
            opacity: 1,
            y: 0,
            duration: 0.5
          })
        }

        if (heading) {
          tl.to(heading, {
            opacity: 1,
            y: 0,
            duration: 0.6
          }, '-=0.25')
        }

        if (description) {
          tl.to(description, {
            opacity: 1,
            y: 0,
            duration: 0.6
          }, '-=0.3')
        }

        if (cards.length) {
          tl.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.12
          }, '-=0.25')
        }

        if (button) {
          tl.to(button, {
            opacity: 1,
            y: 0,
            duration: 0.5
          }, '-=0.25')
        }
      })
    }, pageRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className='text-white pt-30'>
      <section className='projects-section px-5 sm:px-8 lg:px-12 py-20'>
        <div className='max-w-6xl mx-auto'>
          <p className='projects-label text-blue-400 text-sm sm:text-base font-medium tracking-wider'>
            MY WORK
          </p>

          <h1 className='projects-heading text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 tracking-tight'>
            My{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300'>
              Projects
            </span>
          </h1>

          <p className='projects-description text-zinc-400 text-sm sm:text-base lg:text-lg max-w-2xl mt-5 leading-relaxed'>
            A selection of websites and web experiences I've built with a focus
            on modern design, responsive development, usability, and creating
            a strong online presence.
          </p>
        </div>
      </section>

      <section className='projects-section px-5 sm:px-8 lg:px-12 pb-20'>
        <div className='max-w-6xl mx-auto'>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.map((project, index) => (
              <div
                key={index}
                className='project-card group border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:border-blue-500/50 hover:-translate-y-2 shadow-xl shadow-black/10 transition duration-300'
              >
                <div className='h-48 bg-zinc-900 overflow-hidden border-b border-zinc-800'>
                  <img
                    src={project.img}
                    className='w-full h-full object-cover group-hover:scale-105 transition duration-500'
                    alt={project.title}
                  />
                </div>

                <div className='p-6'>
                  <h2 className='text-xl font-semibold text-blue-300 group-hover:text-cyan-300 transition duration-300'>
                    {project.title}
                  </h2>

                  <p className='text-zinc-400 text-sm leading-relaxed mt-3'>
                    {project.description}
                  </p>

                  <div className='flex flex-wrap gap-2 mt-5'>
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className='text-xs text-blue-300 bg-blue-500/5 border border-blue-500/20 rounded-full px-3 py-1'
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className='flex flex-wrap gap-3 mt-6'>
                    <a
                      href={project.link}
                      target='_blank'
                      rel='noreferrer'
                      className='flex items-center gap-2 px-4 py-2.5 bg-blue-500 hover:bg-blue-400 hover:-translate-y-0.5 rounded-lg text-sm shadow-lg shadow-blue-500/20 transition duration-300'
                    >
                      <FaArrowUpRightFromSquare />
                      Live Demo
                    </a>

                    <a
                      href={project.github}
                      target='_blank'
                      rel='noreferrer'
                      className='flex items-center gap-2 px-4 py-2.5 border border-zinc-700 hover:border-blue-500/60 hover:bg-blue-500/5 rounded-lg text-sm text-zinc-300 hover:text-blue-300 transition duration-300'
                    >
                      <FaGithub />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='projects-section px-5 sm:px-8 lg:px-12 py-20'>
        <div className='project-card max-w-5xl mx-auto border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 text-center shadow-2xl shadow-black/20 hover:border-blue-500/30 transition duration-300'>
          <p className='projects-label text-blue-400 text-sm sm:text-base font-medium tracking-wider'>
            HAVE A PROJECT?
          </p>

          <h2 className='projects-heading text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 tracking-tight'>
            Let's Build Something{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300'>
              Together
            </span>
          </h2>

          <p className='projects-description text-zinc-400 max-w-2xl mx-auto mt-5 leading-relaxed'>
            Have a website idea or a business that needs a stronger online
            presence? Let's discuss your goals and turn your vision into a
            modern, responsive, and professional website.
          </p>

          <Link
            to='/contact'
            className='projects-button inline-flex items-center mt-7 px-6 py-2.5 bg-blue-500 hover:bg-blue-400 hover:-translate-y-0.5 rounded-lg shadow-lg shadow-blue-500/20 transition duration-300'
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Projects