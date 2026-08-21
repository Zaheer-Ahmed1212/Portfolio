import React from 'react'
import portfolio from '../assets/portfolio.jpg'
import { Link } from 'react-router-dom'

function Hero() {
  return (
  <div className='hero pt-30 flex flex-col-reverse md:flex-row text-white px-5 sm:px-8 lg:px-12 py-20 gap-10 md:gap-6 lg:gap-0 items-center md:items-start'>
      <div className='Right-sec w-full md:w-[60%]'>

        <div className='Name font-bold text-[8vw] sm:text-[6vw] md:text-[4vw] lg:text-[3rem] w-full md:w-[80%] lg:w-[60%]'>
          Hey My Name is{" "}
          <span className='text-blue-300 text-[9vw] sm:text-[7vw] md:text-[5vw] lg:text-[4rem]'>
            Zaheer Ahmed
          </span>
        </div>

        <div className='job text-blue-500 text-[5vw] sm:text-[4vw] md:text-[2.5vw] lg:text-[1.5rem] mt-3'>
          Frontend Developer
        </div>

        <div className='intro w-full md:w-[80%] lg:w-[60%] opacity-90 mt-3 text-[4vw] sm:text-[3vw] md:text-[1.8vw] lg:text-base leading-relaxed'>
          I’m Zaheer, a passionate Frontend Developer focused on building modern,
          responsive, and user-friendly websites. I love turning ideas into clean
          and engaging digital experiences using HTML, CSS, JavaScript, React, and
          Tailwind CSS
        </div>

        <div className='buttons flex gap-3 sm:gap-5 lg:gap-6 mt-4'>
          <Link to="/about" className='px-4 sm:px-5 py-2 bg-blue-500 rounded-md'>
            About me
          </Link>

          <Link to="/contact" className='px-4 sm:px-5 py-2 bg-blue-500 rounded-md'>
           
           Contact
          </Link>
        </div>

      </div>

      <div className='image w-[75vw] h-[75vw] sm:w-[60vw] sm:h-[70vw] md:w-[35vw] md:h-[45vw] lg:w-75 lg:h-90 border border-zinc-700 rounded-2xl md:-ml-8 lg:-ml-12 md:-mb-8 lg:-mb-12 shrink-0'>
        <img
          src={portfolio}
          className='w-full h-full object-cover rounded-2xl'
          alt='Zaheer Ahmed'
        />
      </div>

    </div>
  )
}

export default Hero