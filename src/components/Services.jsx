import React, { useEffect, useRef } from 'react'
import { FaLaptopCode, FaReact, FaMobileScreen, FaCode } from 'react-icons/fa6'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Services() {
  const sectionRef = useRef(null)
  const labelRef = useRef(null)
  const headingRef = useRef(null)
  const descriptionRef = useRef(null)
  const cardsRef = useRef(null)

  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Responsive Websites',
      description: 'Professional websites that adapt seamlessly to mobile, tablet, and desktop, giving your visitors a consistent experience on every screen.'
    },
    {
      icon: <FaCode />,
      title: 'Landing Pages',
      description: 'High-quality landing pages designed to showcase your business, product, or service and create a strong first impression online.'
    },
    {
      icon: <FaReact />,
      title: 'React Applications',
      description: 'Fast, interactive, and scalable web applications built with React and modern frontend technologies to deliver smooth user experiences.'
    },
    {
      icon: <FaMobileScreen />,
      title: 'Website Redesign',
      description: 'Transform outdated websites into modern, responsive, and user-friendly experiences with cleaner layouts and improved visual appeal.'
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
        stagger: 0.12
      }, '-=0.3')
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className='text-white px-5 sm:px-8 lg:px-12 py-20'>
      <div className='max-w-6xl mx-auto'>
        <div className='mb-10'>
          <p ref={labelRef} className='text-blue-400 text-sm sm:text-base font-medium tracking-wider'>
            SERVICES
          </p>
          <h2 ref={headingRef} className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 tracking-tight'>
            What I Can{' '}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300'>
              Build For You
            </span>
          </h2>
          <p ref={descriptionRef} className='text-zinc-400 mt-4 max-w-2xl text-sm sm:text-base leading-relaxed'>
            I help businesses and individuals establish a professional online
            presence through modern, responsive, and user-focused websites
            built around their goals and requirements.
          </p>
        </div>
        <div ref={cardsRef} className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>
          {services.map((service, index) => (
            <div
              key={index}
              className='group border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm rounded-2xl p-6 hover:border-blue-500/50 hover:bg-blue-500/5 hover:-translate-y-2 shadow-xl shadow-black/10 transition duration-300'
            >
              <div className='w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-2xl group-hover:text-cyan-300 group-hover:bg-blue-500/15 group-hover:scale-105 transition duration-300'>
                {service.icon}
              </div>
              <h3 className='text-lg font-semibold mt-6 group-hover:text-blue-300 transition duration-300'>
                {service.title}
              </h3>
              <p className='text-zinc-400 text-sm leading-relaxed mt-3'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services