import React from 'react'
import { FaCode, FaLaptopCode, FaLightbulb } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Abtpage() {
return ( <div className='text-white pt-30'>

  <section className='px-5 sm:px-8 lg:px-12 py-20'>
    <div className='max-w-6xl mx-auto'>
      <p className='text-blue-400 text-sm sm:text-base font-medium tracking-wider'>
        ABOUT ME
      </p>

      <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 tracking-tight'>
        Get To Know{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300'>
          Me
        </span>
      </h1>

      <p className='text-zinc-400 text-sm sm:text-base lg:text-lg max-w-2xl mt-5 leading-relaxed'>
        I'm Zaheer Ahmed, a freelance web developer helping businesses,
        brands, and individuals build modern, responsive, and professional
        websites that create a strong online presence.
      </p>
    </div>
  </section>

  <section className='px-5 sm:px-8 lg:px-12 pb-20'>
    <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center'>

      <div>
        <p className='text-blue-400 text-sm font-medium tracking-wider'>
          WHO I AM
        </p>

        <h2 className='text-3xl sm:text-4xl font-bold mt-2 tracking-tight'>
          Turning Ideas Into{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300'>
            Web Experiences
          </span>
        </h2>

        <p className='text-zinc-400 mt-5 leading-relaxed'>
          I'm a freelance web developer who focuses on building clean,
          modern, and responsive websites tailored to each client's goals.
          I take ideas and transform them into professional digital
          experiences that are easy to navigate and engaging for visitors.
        </p>

        <p className='text-zinc-400 mt-4 leading-relaxed'>
          My work is centered around HTML, CSS, JavaScript, React, and
          Tailwind CSS. I use these technologies to create responsive
          interfaces, interactive experiences, landing pages, and modern
          websites that work smoothly across different devices.
        </p>

        <p className='text-zinc-400 mt-4 leading-relaxed'>
          I believe a successful website should do more than look good.
          It should communicate clearly, represent your brand professionally,
          provide a smooth user experience, and help turn visitors into
          potential customers.
        </p>
      </div>

      <div className='border border-zinc-800 rounded-2xl p-6 sm:p-8 bg-zinc-950/50 backdrop-blur-sm shadow-xl shadow-black/10 hover:border-blue-500/40 transition duration-300'>

        <div className='group flex items-center gap-4 border-b border-zinc-800 pb-5'>
          <div className='w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-2xl group-hover:text-cyan-300 group-hover:bg-blue-500/15 group-hover:scale-105 transition duration-300'>
            <FaCode />
          </div>

          <div>
            <h3 className='text-lg font-semibold group-hover:text-blue-300 transition duration-300'>
              Clean Code
            </h3>

            <p className='text-zinc-400 text-sm mt-1 leading-relaxed'>
              Writing organized and maintainable code for reliable websites.
            </p>
          </div>
        </div>

        <div className='group flex items-center gap-4 border-b border-zinc-800 py-5'>
          <div className='w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-2xl group-hover:text-cyan-300 group-hover:bg-blue-500/15 group-hover:scale-105 transition duration-300'>
            <FaLaptopCode />
          </div>

          <div>
            <h3 className='text-lg font-semibold group-hover:text-blue-300 transition duration-300'>
              Responsive Design
            </h3>

            <p className='text-zinc-400 text-sm mt-1 leading-relaxed'>
              Creating seamless experiences across mobile, tablet, and desktop.
            </p>
          </div>
        </div>

        <div className='group flex items-center gap-4 pt-5'>
          <div className='w-12 h-12 shrink-0 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-2xl group-hover:text-cyan-300 group-hover:bg-blue-500/15 group-hover:scale-105 transition duration-300'>
            <FaLightbulb />
          </div>

          <div>
            <h3 className='text-lg font-semibold group-hover:text-blue-300 transition duration-300'>
              Client-Focused Approach
            </h3>

            <p className='text-zinc-400 text-sm mt-1 leading-relaxed'>
              Understanding your goals and building solutions around your needs.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <section className='px-5 sm:px-8 lg:px-12 py-20'>
    <div className='max-w-6xl mx-auto'>
      <p className='text-blue-400 text-sm sm:text-base font-medium tracking-wider'>
        MY APPROACH
      </p>

      <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 tracking-tight'>
        How I{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300'>
          Work
        </span>
      </h2>

      <div className='mt-10 border-l border-zinc-800 ml-2 pl-6 sm:pl-8 space-y-10'>

        <div className='relative group'>
          <span className='absolute -left-[33px] sm:-left-[41px] top-1 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/10 group-hover:ring-blue-500/20 transition'></span>

          <p className='text-blue-400 text-sm font-medium tracking-wider'>
            STEP 01
          </p>

          <h3 className='text-xl font-semibold mt-2 group-hover:text-blue-300 transition duration-300'>
            Understanding Your Goals
          </h3>

          <p className='text-zinc-400 mt-2 max-w-2xl leading-relaxed'>
            I start by understanding your business, audience, requirements,
            and the purpose of your website so the final result is aligned
            with what you actually need.
          </p>
        </div>

        <div className='relative group'>
          <span className='absolute -left-[33px] sm:-left-[41px] top-1 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/10 group-hover:ring-blue-500/20 transition'></span>

          <p className='text-blue-400 text-sm font-medium tracking-wider'>
            STEP 02
          </p>

          <h3 className='text-xl font-semibold mt-2 group-hover:text-blue-300 transition duration-300'>
            Building The Experience
          </h3>

          <p className='text-zinc-400 mt-2 max-w-2xl leading-relaxed'>
            I turn the requirements into a clean, responsive interface
            with thoughtful layouts, smooth interactions, and a consistent
            experience across different screen sizes.
          </p>
        </div>

        <div className='relative group'>
          <span className='absolute -left-[33px] sm:-left-[41px] top-1 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-500/10 group-hover:ring-blue-500/20 transition'></span>

          <p className='text-blue-400 text-sm font-medium tracking-wider'>
            STEP 03
          </p>

          <h3 className='text-xl font-semibold mt-2 group-hover:text-blue-300 transition duration-300'>
            Refining & Delivering
          </h3>

          <p className='text-zinc-400 mt-2 max-w-2xl leading-relaxed'>
            I refine the website, test the responsive experience, fix
            issues, and make sure the final product is polished and ready
            to represent your business online.
          </p>
        </div>

      </div>
    </div>
  </section>

  <section className='px-5 sm:px-8 lg:px-12 py-20'>
    <div className='max-w-6xl mx-auto'>
      <p className='text-blue-400 text-sm sm:text-base font-medium tracking-wider'>
        TECHNOLOGIES
      </p>

      <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 tracking-tight'>
        Technologies I{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300'>
          Use
        </span>
      </h2>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-10'>
        {[
          'HTML5',
          'CSS3',
          'JavaScript',
          'React',
          'Tailwind CSS',
          'Git',
          'GitHub',
          'Vite'
        ].map((technology) => (
          <div
            key={technology}
            className='group border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm rounded-xl p-5 text-center hover:border-blue-500/50 hover:bg-blue-500/5 hover:-translate-y-1 shadow-lg shadow-black/10 transition duration-300'
          >
            <p className='text-sm sm:text-base text-zinc-300 group-hover:text-blue-300 transition duration-300'>
              {technology}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  <section className='px-5 sm:px-8 lg:px-12 py-20'>
    <div className='max-w-5xl mx-auto border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 text-center shadow-2xl shadow-black/20 hover:border-blue-500/30 transition duration-300'>

      <p className='text-blue-400 text-sm sm:text-base font-medium tracking-wider'>
        LET'S CONNECT
      </p>

      <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 tracking-tight'>
        Let's Build Something{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300'>
          Great
        </span>
      </h2>

      <p className='text-zinc-400 max-w-2xl mx-auto mt-5 leading-relaxed'>
        Have a website idea or a business that needs a stronger online
        presence? Let's discuss your requirements and turn your vision
        into a modern website built around your goals.
      </p>

      <Link
        to='/contact'
        className='inline-flex items-center mt-7 px-6 py-2.5 bg-blue-500 hover:bg-blue-400 hover:-translate-y-0.5 rounded-lg shadow-lg shadow-blue-500/20 transition duration-300'
      >
        Start a Project
      </Link>

    </div>
  </section>

</div>


)
}

export default Abtpage
