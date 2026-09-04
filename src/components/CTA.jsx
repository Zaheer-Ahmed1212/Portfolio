import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function CTA() {
  const sectionRef = useRef(null)
  const cardRef = useRef(null)
  const labelRef = useRef(null)
  const headingRef = useRef(null)
  const descriptionRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [cardRef.current, labelRef.current, headingRef.current, descriptionRef.current, buttonRef.current],
        {
          opacity: 0,
          y: 40
        }
      )

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

      tl.to(cardRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6
      })
      .to(labelRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5
      }, '-=0.3')
      .to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6
      }, '-=0.25')
      .to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6
      }, '-=0.3')
      .to(buttonRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5
      }, '-=0.25')
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className='text-white px-5 sm:px-8 lg:px-12 py-20'>
      <div ref={cardRef} className='max-w-5xl mx-auto border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 text-center shadow-2xl shadow-black/20 hover:border-blue-500/30 transition duration-300'>
        <p ref={labelRef} className='text-blue-400 text-sm sm:text-base font-medium tracking-wider'>
          LET'S WORK TOGETHER
        </p>

        <h2 ref={headingRef} className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 tracking-tight'>
          Have a{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300'>
            Project in Mind?
          </span>
        </h2>

        <p ref={descriptionRef} className='text-zinc-400 max-w-2xl mx-auto mt-5 text-sm sm:text-base leading-relaxed'>
          Whether you need a new website, a landing page, or a modern redesign,
          I'd love to hear about your idea. Let's turn it into a clean and
          engaging web experience.
        </p>

        <Link
          ref={buttonRef}
          to='/contact'
          className='mt-7 inline-flex items-center px-6 py-2.5 bg-blue-500 hover:bg-blue-400 hover:-translate-y-0.5 rounded-lg shadow-lg shadow-blue-500/20 transition duration-300'
        >
          Let's Work Together
        </Link>
      </div>
    </section>
  )
}

export default CTA