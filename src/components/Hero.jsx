
import React from 'react'
import portfolio from '../assets/portfolio.jpg'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='hero pt-30 flex flex-col-reverse md:flex-row text-white px-5 sm:px-8 lg:px-12 py-20 gap-10 md:gap-6 lg:gap-0 items-center md:items-start'>
      <div className='Right-sec w-full md:w-[60%]'>

        <div className='Name font-bold text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[3rem] w-full md:w-[85%] lg:w-[70%] leading-tight tracking-tight'>
          Hey, I’m{" "}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-400 to-cyan-300 text-[9vw] sm:text-[7vw] md:text-[5vw] lg:text-[4rem]'>
            Zaheer Ahmed
          </span>
        </div>

        <div className='job text-blue-400 font-medium tracking-wide text-[5vw] sm:text-[4vw] md:text-[2.5vw] lg:text-[1.5rem] mt-4'>
          Freelance Web Developer
        </div>

        <div className='intro w-full md:w-[85%] lg:w-[70%] text-zinc-300 mt-4 text-[4vw] sm:text-[3vw] md:text-[1.8vw] lg:text-base leading-relaxed'>
          I’m Zaheer, a freelance web developer helping businesses and brands
          build modern, responsive, and user-friendly websites. I turn ideas
          into polished digital experiences with clean code, thoughtful design,
          and technologies like JavaScript, React, and Tailwind CSS.
        </div>

        <div className='buttons flex flex-wrap gap-3 sm:gap-4 lg:gap-5 mt-6'>
          <Link
            to="/about"
            className='px-5 sm:px-6 py-2.5 bg-blue-500 hover:bg-blue-400 hover:-translate-y-0.5 rounded-lg shadow-lg shadow-blue-500/20 transition duration-300'
          >
            About Me
          </Link>

          <Link
            to="/contact"
            className='px-5 sm:px-6 py-2.5 border border-blue-500/50 hover:border-blue-400 hover:bg-blue-500/10 hover:-translate-y-0.5 rounded-lg transition duration-300'
          >
            Let’s Work Together
          </Link>
        </div>

      </div>

      <div className='image relative w-[75vw] h-[75vw] sm:w-[60vw] sm:h-[70vw] md:w-[35vw] md:h-[45vw] lg:w-75 lg:h-90 border border-blue-500/30 rounded-2xl md:-ml-8 lg:-ml-12 md:-mb-8 lg:-mb-12 shrink-0 shadow-2xl shadow-blue-500/10 overflow-hidden'>
        <div className='absolute inset-0 bg-blue-500/10 blur-2xl'></div>
        <img
          src={portfolio}
          className='relative w-full h-full object-cover rounded-2xl'
          alt='Zaheer Ahmed'
        />
      </div>

    </div>
  )
}

export default Hero
