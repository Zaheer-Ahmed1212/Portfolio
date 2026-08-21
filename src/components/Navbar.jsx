import React, { useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi"
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='navbar fixed top-0 left-0 right-0 z-50 text-white flex justify-between items-center px-6 md:px-12 py-5 bg-zinc-950/90 backdrop-blur-md'>

      {/* Logo */}
      <div className="logo">
        <h2 className='text-[6vw] md:text-[3vw] lg:text-[2.2vw] font-semibold text-blue-300'>
          Zaheer Ahmed
        </h2>
      </div>

      {/* Navigation */}
      <div className="navs flex justify-center items-center">

        <ul
          className={`
            ${menuOpen ? 'flex' : 'hidden'}
            absolute top-full right-6
            flex-col
            gap-5
            bg-zinc-900
            p-8
            rounded-md
            shadow-lg

            md:static
            md:flex
            md:flex-row
            md:bg-transparent
            md:p-0
            md:shadow-none
            md:gap-4

            lg:gap-6
            lg:text-[1.05rem]
            md:text-[0.9rem]
          `}
        >

          <li className='hover:text-blue-300 cursor-pointer'>
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>

          <li className='hover:text-blue-300 cursor-pointer'>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About Me
            </NavLink>
          </li>

          <li className='hover:text-blue-300 cursor-pointer'>
            <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
              Projects
            </NavLink>
          </li>

          <li className='hover:text-blue-300 cursor-pointer'>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contacts
            </NavLink>
          </li>

        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='md:hidden text-2xl'
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

    </div>
  )
}

export default Navbar