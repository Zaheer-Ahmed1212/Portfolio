import React from 'react'
import { Link } from 'react-router-dom'

function CTA() {
return ( <section className='text-white px-5 sm:px-8 lg:px-12 py-20'> <div className='max-w-5xl mx-auto border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 text-center shadow-2xl shadow-black/20 hover:border-blue-500/30 transition duration-300'> <p className='text-blue-400 text-sm sm:text-base font-medium tracking-wider'>
LET'S WORK TOGETHER </p>

    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 tracking-tight'>
      Have a{' '}
      <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300'>
        Project in Mind?
      </span>
    </h2>

    <p className='text-zinc-400 max-w-2xl mx-auto mt-5 text-sm sm:text-base leading-relaxed'>
      Whether you need a new website, a landing page, or a modern redesign,
      I'd love to hear about your idea. Let's turn it into a clean and
      engaging web experience.
    </p>

    <Link
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
