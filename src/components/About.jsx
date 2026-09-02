import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <section className='text-white  px-5 sm:px-8 lg:px-12 '>

      <div className='max-w-6xl mx-auto'>

        <div className='mb-10'>
          <p className='text-blue-500 text-sm sm:text-base font-medium'>
            ABOUT ME
          </p>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-2'>
            A Little About <span className='text-blue-300'>Me</span>
          </h2>
        </div>

        <div className='border border-zinc-700 rounded-2xl p-6 sm:p-8 lg:p-10 bg-zinc-950/40'>

          <p className='text-zinc-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl'>
            I'm Zaheer Ahmed, a Frontend Developer passionate about creating
            modern, responsive, and user-friendly web experiences. I enjoy
            turning ideas and designs into functional websites with clean
            interfaces and smooth interactions.
          </p>

          <p className='text-zinc-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mt-5'>
            I work primarily with HTML, CSS, JavaScript, React, and Tailwind CSS,
            while continuously improving my skills and exploring new technologies
            to build better digital experiences.
          </p>

          <Link to="/about" className='mt-7 inline-block px-5 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition'>
            Learn More
          </Link>

        </div>

      </div>

    </section>
  )
}

export default About