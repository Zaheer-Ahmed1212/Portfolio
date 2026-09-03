import React from 'react'
import weatherpr from '../assets/weatherpr.jpg'
import perfume from '../assets/perfpr.jpg'
import landingpage from '../assets/landing.jpg'
import fastfood from '../assets/fastfood.jpg'

function Projects() {
const projects = [
{
title: 'Perfume Website',
description:
'A modern e-commerce website designed for a perfume brand, featuring product browsing, cart functionality, authentication, and a responsive shopping experience.',
technologies: 'React • JavaScript • Tailwind CSS',
link: "https://zaheerahmed.e-complex.edu.pk/index.html",
img: perfume
},
{
title: 'Fastfood Landing Page',
description:
'A modern restaurant website created to showcase food offerings through an engaging layout, interactive menu, responsive design, and smooth animations.',
technologies: 'React • Tailwind CSS • GSAP',
link: "https://fastfood-self.vercel.app/",
img: fastfood
},
{
title: 'Business Landing Page',
description:
'A clean and responsive landing page focused on presenting a business professionally, with an attractive layout and a smooth user experience across devices.',
technologies: 'React • JavaScript • Tailwind CSS',
link: "https://ecommerceweb.zaheerjokhio312.workers.dev/",
img: landingpage
}
]

return ( <section className='text-white px-5 sm:px-8 lg:px-12 py-20'>

  <div className='max-w-6xl mx-auto'>

    <div className='mb-10'>
      <p className='text-blue-400 text-sm sm:text-base font-medium tracking-wider'>
        MY WORK
      </p>

      <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 tracking-tight'>
        Some Things I've <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300'>Built</span>
      </h2>

      <p className='text-zinc-400 mt-4 max-w-2xl text-sm sm:text-base leading-relaxed'>
        A selection of websites and digital experiences I've built with a
        focus on responsive design, modern interfaces, performance, and
        creating a strong online presence for businesses and brands.
      </p>
    </div>

    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>

      {projects.map((project, index) => (
        <div
          key={index}
          className='group border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm rounded-2xl p-5 hover:border-blue-500/50 hover:-translate-y-2 shadow-xl shadow-black/10 transition duration-300'
        >

          <div className='h-40 bg-zinc-900 rounded-xl mb-5 overflow-hidden border border-zinc-800'>
            <img
              src={project.img}
              className='w-full rounded-xl h-full object-cover group-hover:scale-105 transition duration-500'
              alt={project.title}
            />
          </div>

          <h3 className='text-xl font-semibold text-blue-300 group-hover:text-cyan-300 transition duration-300'>
            {project.title}
          </h3>

          <p className='text-zinc-400 text-sm leading-relaxed mt-3'>
            {project.description}
          </p>

          <p className='text-blue-400 text-sm mt-4'>
            {project.technologies}
          </p>

          <a
            href={project.link}
            className='mt-5 inline-flex items-center px-5 py-2.5 bg-blue-500 hover:bg-blue-400 hover:-translate-y-0.5 rounded-lg shadow-lg shadow-blue-500/20 transition duration-300'
          >
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
