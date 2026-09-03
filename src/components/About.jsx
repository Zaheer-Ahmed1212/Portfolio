
import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <section className='text-white px-5 sm:px-8 lg:px-12'>

      <div className='max-w-6xl mx-auto'>

        <div className='mb-10'>
          <p className='text-blue-400 text-sm sm:text-base font-medium tracking-wider'>
            ABOUT ME
          </p>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 tracking-tight'>
            A Little About <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300'>Me</span>
          </h2>
        </div>

        <div className='border border-zinc-800 hover:border-blue-500/40 rounded-2xl p-6 sm:p-8 lg:p-10 bg-zinc-950/50 backdrop-blur-sm shadow-xl shadow-black/10 transition duration-300'>

          <p className='text-zinc-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl'>
            I'm Zaheer Ahmed, a freelance web developer focused on creating
            modern, responsive, and professional websites for businesses,
            brands, and individuals. I turn ideas into polished digital
            experiences that look great, work smoothly, and provide a clear
            experience for your visitors.
          </p>

          <p className='text-zinc-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mt-5'>
            I work with HTML, CSS, JavaScript, React, and Tailwind CSS to build
            fast, responsive, and user-friendly websites tailored to each
            client's needs. My goal is simple: deliver a website that not only
            looks professional but also helps your business make a stronger
            impression online.
          </p>

          <Link
            to="/about"
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
