import React, { useEffect, useRef } from 'react'
import portfolio from '../assets/portfolio.jpg'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const heroRef = useRef(null)
  const nameRef = useRef(null)
  const jobRef = useRef(null)
  const introRef = useRef(null)
  const buttonsRef = useRef(null)
  const imageRef = useRef(null)
  const imageInnerRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      gsap.set([nameRef.current, jobRef.current, introRef.current, buttonsRef.current], {
        opacity: 0,
        y: 80
      })

      gsap.set(imageRef.current, {
        opacity: 0,
        scale: 0.7,
        rotate: 8,
        clipPath: 'inset(100% 0% 0% 0%)'
      })

      gsap.set(imageInnerRef.current, {
        scale: 1.3
      })

      tl.to(imageRef.current, {
        opacity: 1,
        scale: 1,
        rotate: 0,
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: 1.4
      })
      .to(imageInnerRef.current, {
        scale: 1,
        duration: 1.2,
        ease: 'power3.out'
      }, '-=1')
      .to(nameRef.current, {
        opacity: 1,
        y: 0,
        duration: 1
      }, '-=0.7')
      .to(jobRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8
      }, '-=0.5')
      .to(introRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.9
      }, '-=0.4')
      .to(buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8
      }, '-=0.4')

      gsap.to(glowRef.current, {
        scale: 1.25,
        opacity: 0.6,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      gsap.to(nameRef.current, {
        y: -20,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      })

      gsap.to(jobRef.current, {
        y: -35,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      })

      gsap.to(introRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      })

      gsap.to(buttonsRef.current, {
        y: -65,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={heroRef} className='hero pt-30 flex flex-col-reverse md:flex-row text-white px-5 sm:px-8 lg:px-12 py-20 gap-10 md:gap-6 lg:gap-0 items-center md:items-start'>
      <div className='Right-sec w-full md:w-[60%]'>
        <div ref={nameRef} className='Name font-bold text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[3rem] w-full md:w-[85%] lg:w-[70%] leading-tight tracking-tight'>
          Hey, I’m{" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 text-[9vw] sm:text-[7vw] md:text-[5vw] lg:text-[4rem]'>
            Zaheer Ahmed
          </span>
        </div>
        <div ref={jobRef} className='job text-blue-400 font-medium tracking-wide text-[5vw] sm:text-[4vw] md:text-[2.5vw] lg:text-[1.5rem] mt-4'>
          Freelance Web Developer
        </div>
        <div ref={introRef} className='intro w-full md:w-[85%] lg:w-[70%] text-zinc-300 mt-4 text-[4vw] sm:text-[3vw] md:text-[1.8vw] lg:text-base leading-relaxed'>
          I’m Zaheer, a freelance web developer helping businesses and brands build modern, responsive, and user-friendly websites. I turn ideas into polished digital experiences with clean code, thoughtful design, and technologies like JavaScript, React, and Tailwind CSS.
        </div>
        <div ref={buttonsRef} className='buttons flex flex-wrap gap-3 sm:gap-4 lg:gap-5 mt-6'>
          <Link to='/about' className='px-5 sm:px-6 py-2.5 bg-blue-500 hover:bg-blue-400 hover:-translate-y-0.5 rounded-lg shadow-lg shadow-blue-500/20 transition duration-300'>
            About Me
          </Link>
          <Link to='/contact' className='px-5 sm:px-6 py-2.5 border border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/10 hover:-translate-y-0.5 rounded-lg transition duration-300'>
            Let’s Work Together
          </Link>
        </div>
      </div>
      <div ref={imageRef} className='image relative w-[75vw] h-[75vw] sm:w-[60vw] sm:h-[70vw] md:w-[35vw] md:h-[45vw] lg:w-75 lg:h-90 border border-blue-500/30 rounded-2xl md:-ml-8 lg:-ml-12 md:-mb-8 lg:-mb-12 shrink-0 shadow-2xl shadow-blue-500/10 overflow-hidden'>
        <div ref={glowRef} className='absolute inset-0 bg-blue-500/10 blur-2xl'></div>
        <img ref={imageInnerRef} src={portfolio} className='relative w-full h-full object-cover rounded-2xl' alt='Zaheer Ahmed' />
      </div>
    </div>
  )
}

export default Hero