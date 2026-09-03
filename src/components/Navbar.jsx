import React, { useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi"
import { NavLink } from 'react-router-dom'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='navbar fixed top-0 left-0 right-0 z-50 text-white flex justify-between items-center px-6 md:px-12 py-4 bg-zinc-950/75 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/10'>

      <div className="logo">
        <h2 className='text-[6vw] md:text-[3vw] lg:text-[2.2vw] font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300'>
          Zaheer Ahmed
        </h2>
      </div>

      <div className="navs flex justify-center items-center">

        <ul
          className={`
            ${menuOpen ? 'flex' : 'hidden'}
            absolute top-[calc(100%+10px)] right-6
            flex-col
            gap-5
            bg-zinc-900/95
            border border-zinc-800
            p-7
            rounded-xl
            shadow-2xl shadow-black/30

            md:static
            md:flex
            md:flex-row
            md:bg-transparent
            md:border-none
            md:p-0
            md:shadow-none
            md:gap-4

            lg:gap-6
            lg:text-[1.05rem]
            md:text-[0.9rem]
          `}
        >

          <li className='cursor-pointer transition duration-300'>
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive
                    ? 'text-blue-300'
                    : 'text-zinc-300 hover:text-blue-300'
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li className='cursor-pointer transition duration-300'>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive
                    ? 'text-blue-300'
                    : 'text-zinc-300 hover:text-blue-300'
                }`
              }
            >
              About Me
            </NavLink>
          </li>

          <li className='cursor-pointer transition duration-300'>
            <NavLink
              to="/projects"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive
                    ? 'text-blue-300'
                    : 'text-zinc-300 hover:text-blue-300'
                }`
              }
            >
              Projects
            </NavLink>
          </li>

          <li className='cursor-pointer transition duration-300'>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `transition duration-300 ${
                  isActive
                    ? 'text-blue-300'
                    : 'text-zinc-300 hover:text-blue-300'
                }`
              }
            >
              Contact
            </NavLink>
          </li>

        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='md:hidden text-2xl text-zinc-200 hover:text-blue-300 transition duration-300'
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

    </div>
  )
}

export default Navbar

