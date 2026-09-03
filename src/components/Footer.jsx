import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'

function Footer() {
return ( <footer className='text-white px-5 sm:px-8 lg:px-12 pt-16 pb-8 border-t border-zinc-800'> <div className='max-w-6xl mx-auto'> <div className='flex flex-col md:flex-row justify-between gap-10'> <div className='max-w-md'> <h2 className='text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300'>
Zaheer Ahmed </h2>

        <p className='text-zinc-400 text-sm sm:text-base leading-relaxed mt-4'>
          Freelance web developer focused on building modern, responsive,
          and user-friendly websites that help businesses create a strong
          online presence.
        </p>
      </div>

      <div>
        <h3 className='text-lg font-semibold'>
          Quick Links
        </h3>

        <ul className='flex flex-col gap-3 mt-4 text-zinc-400 text-sm sm:text-base'>
          <li className='transition duration-300 hover:text-blue-300'>
            <NavLink to='/'>
              Home
            </NavLink>
          </li>

          <li className='transition duration-300 hover:text-blue-300'>
            <NavLink to='/about'>
              About Me
            </NavLink>
          </li>

          <li className='transition duration-300 hover:text-blue-300'>
            <NavLink to='/projects'>
              Projects
            </NavLink>
          </li>

          <li className='transition duration-300 hover:text-blue-300'>
            <NavLink to='/contact'>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div>
        <h3 className='text-lg font-semibold'>
          Connect With Me
        </h3>

        <div className='flex gap-4 mt-4 text-2xl'>
          <a
            href='https://share.google/9khGlrNrjYor5GJeS'
            target='_blank'
            rel='noreferrer'
            className='text-zinc-400 hover:text-blue-300 hover:-translate-y-1 transition duration-300'
          >
            <FaGithub />
          </a>

          <a
            href='https://www.linkedin.com/in/zaheer-ahmed-ba96b8418?utm_source=share_via&utm_content=profile&utm_medium=member_android'
            target='_blank'
            rel='noreferrer'
            className='text-zinc-400 hover:text-blue-300 hover:-translate-y-1 transition duration-300'
          >
            <FaLinkedin />
          </a>

          <a
            href='https://www.instagram.com/za.heer7526?igsh=bHA0aXUyemZwN2Ux'
            target='_blank'
            rel='noreferrer'
            className='text-zinc-400 hover:text-blue-300 hover:-translate-y-1 transition duration-300'
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>

    <div className='border-t border-zinc-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-zinc-500 text-sm'>
      <p>
        © 2026 Zaheer Ahmed. All rights reserved.
      </p>

      <p>
        Built with React & Tailwind CSS
      </p>
    </div>
  </div>
</footer>


)
}

export default Footer
