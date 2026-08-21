import React from 'react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className='text-white px-5 sm:px-8 lg:px-12 pt-16 pb-8 border-t border-zinc-800'>

      <div className='max-w-6xl mx-auto'>

        <div className='flex flex-col md:flex-row justify-between gap-10'>

          <div className='max-w-md'>
            <h2 className='text-2xl font-semibold text-blue-300'>
              Zaheer Ahmed
            </h2>

            <p className='text-zinc-400 text-sm sm:text-base leading-relaxed mt-4'>
              Frontend Developer passionate about building modern, responsive,
              and user-friendly web experiences with React and modern frontend
              technologies.
            </p>
          </div>

          <div>
            <h3 className='text-lg font-semibold'>
              Quick Links
            </h3>

            <ul className='flex flex-col gap-3 mt-4 text-zinc-400 text-sm sm:text-base'>
           <li className='hover:text-blue-300 cursor-pointer'>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>

          <li className='hover:text-blue-300 cursor-pointer'>
            <NavLink to="/about">
              About Me
            </NavLink>
          </li>

          <li className='hover:text-blue-300 cursor-pointer'>
            <NavLink to="/projects" >
              Projects
            </NavLink>
          </li>

          <li className='hover:text-blue-300 cursor-pointer'>
            <NavLink to="/contact" >
              Contacts
            </NavLink>
          </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold'>
              Connect With Me
            </h3>

            <div className='flex gap-4 mt-4 text-2xl'>
              <a href="https://share.google/9khGlrNrjYor5GJeS"><FaGithub className='hover:text-blue-300 cursor-pointer transition' /></a>
              <a href="https://www.linkedin.com/in/zaheer-ahmed-ba96b8418?utm_source=share_via&utm_content=profile&utm_medium=member_android"><FaLinkedin className='hover:text-blue-300 cursor-pointer transition' /></a>
              <a href="https://www.instagram.com/za.heer7526?igsh=bHA0aXUyemZwN2Ux"><FaInstagram className='hover:text-blue-300 cursor-pointer transition' /></a>
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