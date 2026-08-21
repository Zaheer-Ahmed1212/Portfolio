import React from 'react'
import weatherpr from '../assets/weatherpr.jpg'
import perfume from '../assets/perfpr.jpg'
import landingpage from '../assets/landing.jpg'
import currency from '../assets/currpr.jpg'

function Projects() {
  const projects = [
    {
      title: 'Perfume Website',
      description:'A responsive perfume website with product browsing, cart functionality, authentication, and a modern user interface.',
      technologies: 'React • JavaScript • Tailwind CSS',
      link:"https://zaheerahmed.e-complex.edu.pk/index.html",
      img:perfume
    },
    {
         title: 'Currency Converter',
          description:
            'A simple and interactive currency converter fetches current currency rate and present in simple and user friendly way',
          technologies: ['React', 'JavaScript', 'Tailwind CSS'],
          link:"https://currency-convertor-delta-six.vercel.app/",
          img:currency,
      
    },
    {
          title: 'Landing Page',
          description:
            'A modern responsive landing page focused on clean design, attractive layouts, and a smooth user experience.',
          technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
          link:"https://ecommerceweb.zaheerjokhio312.workers.dev/",
          img:landingpage,
    }
  ]

  return (
    <section className='text-white px-5 sm:px-8 lg:px-12 py-20'>

      <div className='max-w-6xl mx-auto'>

        <div className='mb-10'>
          <p className='text-blue-500 text-sm sm:text-base font-medium'>
            MY WORK
          </p>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-2'>
            Some Things I've <span className='text-blue-300'>Built</span>
          </h2>

          <p className='text-zinc-400 mt-4 max-w-2xl text-sm sm:text-base'>
            Here are some of the projects I've built while learning,
            experimenting, and improving my frontend development skills.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>

          {projects.map((project, index) => (
            <div
              key={index}
              className='border border-zinc-700 rounded-2xl p-6 hover:border-blue-500 transition'
            >

              <div className='h-40 bg-zinc-200 rounded-xl mb-5'>
                <img src={project.img} className='w-full rounded-xl h-full object-cover ' alt="" />
              </div>

              <h3 className='text-xl font-semibold text-blue-300'>
                {project.title}
              </h3>

              <p className='text-zinc-400 text-sm leading-relaxed mt-3'>
                {project.description}
              </p>

              <p className='text-blue-500 text-sm mt-4'>
                {project.technologies}
              </p>

              <a href={project.link} className='mt-5 inline-block px-5 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition'>
                View Project
              </a>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Projects