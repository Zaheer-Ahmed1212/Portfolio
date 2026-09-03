import React from 'react'
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import perfume from '../assets/perfpr.jpg'
import todo from '../assets/todopr.jpg'
import calculator from '../assets/calcpr.jpg'
import currency from '../assets/currpr.jpg'
import landingpage from '../assets/landing.jpg'
import fastfood from '../assets/fastfood.jpg'

function Projects() {

const projects = [
{
title: 'Currency Converter',
description:
'A fast and interactive currency converter designed to provide current exchange rates through a simple, clear, and user-friendly interface.',
technologies: ['React', 'JavaScript', 'Tailwind CSS'],
link: 'https://currency-convertor-delta-six.vercel.app/',
img: currency,
github: 'https://github.com/Zaheer-Ahmed1212/Currency-convertor.git'
},
{
title: 'Fastfood Landing Page',
description:
'A modern restaurant website designed to showcase food offerings with an engaging layout, interactive menu, responsive design, and smooth animations.',
technologies: ['React', 'TailwindCSS', 'GSAP'],
link: 'https://fastfood-self.vercel.app/',
img: fastfood,
github: 'https://github.com/Zaheer-Ahmed1212/Fastfood.git'
},
{
title: 'Perfume Website',
description:
'A modern e-commerce website designed to create a professional shopping experience with product browsing, cart functionality, authentication, and responsive design.',
technologies: ['React', 'JavaScript', 'Tailwind CSS'],
link: 'https://zaheerahmed.e-complex.edu.pk/index.html',
img: perfume,
github: 'https://github.com/Zaheer-Ahmed1212/my-perfume-project.git'
},
{
title: 'To-Do Application',
description:
'A clean and interactive task management application designed to make organizing, adding, managing, and removing daily tasks simple and efficient.',
technologies: ['JavaScript', 'HTML', 'CSS'],
link: 'https://to-do-app-mu-sooty.vercel.app/',
img: todo,
github: 'https://github.com/Zaheer-Ahmed1212/To-do-app.git'
},
{
title: 'Calculator',
description:
'A clean and responsive calculator application focused on providing a simple interface and smooth experience for everyday arithmetic operations.',
technologies: ['JavaScript', 'HTML', 'CSS'],
link: 'https://calculator-sable-psi-15.vercel.app/',
img: calculator,
github: 'https://github.com/Zaheer-Ahmed1212/calculator-project.git'
},
{
title: 'Business Landing Page',
description:
'A modern landing page created to present a business professionally with a clean visual layout, responsive design, and a focused user experience.',
technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
link: 'https://ecommerceweb.zaheerjokhio312.workers.dev/',
img: landingpage,
github: 'https://github.com/Zaheer-Ahmed1212/Ecommerce.git'
}
]

return ( <div className='text-white pt-30'>

  <section className='px-5 sm:px-8 lg:px-12 py-20'>
    <div className='max-w-6xl mx-auto'>

      <p className='text-blue-400 text-sm sm:text-base font-medium tracking-wider'>
        MY WORK
      </p>

      <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 tracking-tight'>
        My{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300'>
          Projects
        </span>
      </h1>

      <p className='text-zinc-400 text-sm sm:text-base lg:text-lg max-w-2xl mt-5 leading-relaxed'>
        A selection of websites and web experiences I've built with a focus
        on modern design, responsive development, usability, and creating
        a strong online presence.
      </p>

    </div>
  </section>

  <section className='px-5 sm:px-8 lg:px-12 pb-20'>
    <div className='max-w-6xl mx-auto'>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>

        {projects.map((project, index) => (
          <div
            key={index}
            className='group border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:border-blue-500/50 hover:-translate-y-2 shadow-xl shadow-black/10 transition duration-300'
          >

            <div className='h-48 bg-zinc-900 overflow-hidden border-b border-zinc-800'>
              <img
                src={project.img}
                className='w-full h-full object-cover group-hover:scale-105 transition duration-500'
                alt={project.title}
              />
            </div>

            <div className='p-6'>

              <h2 className='text-xl font-semibold text-blue-300 group-hover:text-cyan-300 transition duration-300'>
                {project.title}
              </h2>

              <p className='text-zinc-400 text-sm leading-relaxed mt-3'>
                {project.description}
              </p>

              <div className='flex flex-wrap gap-2 mt-5'>
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className='text-xs text-blue-300 bg-blue-500/5 border border-blue-500/20 rounded-full px-3 py-1'
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className='flex flex-wrap gap-3 mt-6'>

                <a
                  href={project.link}
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center gap-2 px-4 py-2.5 bg-blue-500 hover:bg-blue-400 hover:-translate-y-0.5 rounded-lg text-sm shadow-lg shadow-blue-500/20 transition duration-300'
                >
                  <FaArrowUpRightFromSquare />
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target='_blank'
                  rel='noreferrer'
                  className='flex items-center gap-2 px-4 py-2.5 border border-zinc-700 hover:border-blue-500/60 hover:bg-blue-500/5 rounded-lg text-sm text-zinc-300 hover:text-blue-300 transition duration-300'
                >
                  <FaGithub />
                  GitHub
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  </section>

  <section className='px-5 sm:px-8 lg:px-12 py-20'>
    <div className='max-w-5xl mx-auto border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 text-center shadow-2xl shadow-black/20 hover:border-blue-500/30 transition duration-300'>

      <p className='text-blue-400 text-sm sm:text-base font-medium tracking-wider'>
        HAVE A PROJECT?
      </p>

      <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 tracking-tight'>
        Let's Build Something{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300'>
          Together
        </span>
      </h2>

      <p className='text-zinc-400 max-w-2xl mx-auto mt-5 leading-relaxed'>
        Have a website idea or a business that needs a stronger online
        presence? Let's discuss your goals and turn your vision into a
        modern, responsive, and professional website.
      </p>

      <Link
        to='/contact'
        className='inline-flex items-center mt-7 px-6 py-2.5 bg-blue-500 hover:bg-blue-400 hover:-translate-y-0.5 rounded-lg shadow-lg shadow-blue-500/20 transition duration-300'
      >
        Get In Touch
      </Link>

    </div>
  </section>

</div>


)
}

export default Projects
