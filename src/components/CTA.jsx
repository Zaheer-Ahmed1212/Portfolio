import React from 'react'
import { Link } from 'react-router-dom'

function CTA() {
  return (
    <section className='text-white px-5 sm:px-8 lg:px-12 py-20'>

      <div className='max-w-5xl mx-auto border border-zinc-700 rounded-2xl p-8 sm:p-12 text-center'>

        <p className='text-blue-500 text-sm sm:text-base font-medium'>
          LET'S WORK TOGETHER
        </p>

        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-3'>
          Have a <span className='text-blue-300'>Project in Mind?</span>
        </h2>

        <p className='text-zinc-400 max-w-2xl mx-auto mt-5 text-sm sm:text-base leading-relaxed'>
          Whether you need a new website, a landing page, or a modern redesign,
          I'd love to hear about your idea. Let's turn it into a clean and
          engaging web experience.
        </p>

        <Link to="/contact" className='mt-7 inline-block px-6 py-2.5 bg-blue-500 hover:bg-blue-600 rounded-md transition'>
          Let's Work Together
        </Link>

      </div>

    </section>
  )
}

export default CTA