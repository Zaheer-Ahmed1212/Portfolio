import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function About() {
  const sectionRef = useRef(null)
  const labelRef = useRef(null)
  const headingRef = useRef(null)
  const cardRef = useRef(null)
  const textRef = useRef(null)
  const secondTextRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(labelRef.current, { opacity: 0, y: 40 })
      gsap.set(headingRef.current, { opacity: 0, y: 60 })
      gsap.set(cardRef.current, { opacity: 0, y: 100, scale: 0.94 })
      gsap.set([textRef.current, secondTextRef.current], { opacity: 0, y: 50 })
      gsap.set(buttonRef.current, { opacity: 0, y: 40 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          end: 'top 30%',
          toggleActions: 'play none none reverse'
        },
        defaults: {
          ease: 'power4.out'
        }
      })

      tl.to(labelRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7
      })
      .to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.9
      }, '-=0.4')
      .to(cardRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.1
      }, '-=0.5')
      .to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8
      }, '-=0.6')
      .to(secondTextRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8
      }, '-=0.5')
      .to(buttonRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7
      }, '-=0.4')

      gsap.to(cardRef.current, {
        y: -12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className='text-white px-5 sm:px-8 lg:px-12'>
      <div className='max-w-6xl mx-auto'>
        <div className='mb-10'>
          <p ref={labelRef} className='text-blue-400 text-sm sm:text-base font-medium tracking-wider'>
            ABOUT ME
          </p>
          <h2 ref={headingRef} className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 tracking-tight'>
            A Little About <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300'>Me</span>
          </h2>
        </div>
        <div ref={cardRef} className='border border-zinc-800 hover:border-blue-500/40 rounded-2xl p-6 sm:p-8 lg:p-10 bg-zinc-950/50 backdrop-blur-sm shadow-xl shadow-black/10 transition duration-300'>
          <p ref={textRef} className='text-zinc-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl'>
            I'm Zaheer Ahmed, a freelance web developer focused on creating
            modern, responsive, and professional websites for businesses,
            brands, and individuals. I turn ideas into polished digital
            experiences that look great, work smoothly, and provide a clear
            experience for your visitors.
          </p>
          <p ref={secondTextRef} className='text-zinc-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mt-5'>
            I work with HTML, CSS, JavaScript, React, and Tailwind CSS to build
            fast, responsive, and user-friendly websites tailored to each
            client's needs. My goal is simple: deliver a website that not only
            looks professional but also helps your business make a stronger
            impression online.
          </p>
          <Link
            ref={buttonRef}
            to='/about'
            className='mt-7 inline-block px-5 py-2.5 bg-blue-500 hover:bg-blue-400 hover:-translate-y-0.5 rounded-lg shadow-lg shadow-blue-500/20 transition duration-300'
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About