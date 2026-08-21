import React from 'react'
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import Navbar from '../components/navbar'
import { Link } from 'react-router-dom'
import weatherpr from '../assets/weatherpr.jpg'
import perfume from '../assets/perfpr.jpg'
import todo from '../assets/todopr.jpg'
import calculator from '../assets/calcpr.jpg'
import currency from '../assets/currpr.jpg'
import landingpage from '../assets/landing.jpg'

function Projects() {

  const projects = [
    {
      title: 'Currency Converter',
      description:
        'A simple and interactive currency converter fetches current currency rate and present in simple and user friendly way',
      technologies: ['React', 'JavaScript', 'Tailwind CSS'],
      link:"https://currency-convertor-delta-six.vercel.app/",
      img:currency,
      github:"https://github.com/Zaheer-Ahmed1212/Currency-convertor.git"
    },
    {
      title: 'Weather Application',
      description:
        'A responsive weather application that fetches weather data and presents it through a simple and user-friendly interface.',
      technologies: ['JavaScript', 'API', 'CSS'],
      link: "https://weather-app-psi-ten-95.vercel.app/",
      img: weatherpr,
      github:"https://github.com/Zaheer-Ahmed1212/Weather-app.git"
    },
    {
      title: 'Perfume Website',
      description: 'A responsive perfume website with product browsing, cart functionality, authentication, and a modern user interface.',
      technologies: ['React • JavaScript • Tailwind CSS'],
      link: "https://zaheerahmed.e-complex.edu.pk/index.html",
      img: perfume,
      github:"https://github.com/Zaheer-Ahmed1212/my-perfume-project.git"
    },
    {
      title: 'To-Do Application',
      description:
        'A simple and interactive task management application where users can add, manage, and remove their daily tasks.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      link:"https://to-do-app-mu-sooty.vercel.app/",
      img:todo,
         github:"https://github.com/Zaheer-Ahmed1212/To-do-app.git"
    },
    {
      title: 'Calculator',
      description:
        'A clean and responsive calculator application with basic arithmetic operations and an easy-to-use interface.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      link:"https://calculator-sable-psi-15.vercel.app/",
      img:calculator,
         github:"https://github.com/Zaheer-Ahmed1212/calculator-project.git"
    },
    {
      title: 'Landing Page',
      description:
        'A modern responsive landing page focused on clean design, attractive layouts, and a smooth user experience.',
      technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
      link:"https://ecommerceweb.zaheerjokhio312.workers.dev/",
      img:landingpage,
      github:"https://github.com/Zaheer-Ahmed1212/Ecommerce.git"
    },
  ]

  return (
    <div className='text-white pt-30'>

      <section className='px-5 sm:px-8 lg:px-12 py-20'>
        <div className='max-w-6xl mx-auto'>

          <p className='text-blue-500 text-sm sm:text-base font-medium'>
            MY WORK
          </p>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mt-2'>
            My <span className='text-blue-300'>Projects</span>
          </h1>

          <p className='text-zinc-400 text-sm sm:text-base lg:text-lg max-w-2xl mt-5 leading-relaxed'>
            A collection of projects I've built while learning, experimenting,
            and improving my frontend development skills.
          </p>

        </div>
      </section>


      <section className='px-5 sm:px-8 lg:px-12 pb-20'>
        <div className='max-w-6xl mx-auto'>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>

            {projects.map((project, index) => (
              <div
                key={index}
                className='border border-zinc-700 rounded-2xl overflow-hidden hover:border-blue-500 transition'
              >

                <div className='h-48 bg-zinc-900 flex items-center justify-center'>
                  <img src={project.img} className='w-full h-full object-cover' alt="" />
                </div>

                <div className='p-6'>

                  <h2 className='text-xl font-semibold text-blue-300'>
                    {project.title}
                  </h2>

                  <p className='text-zinc-400 text-sm leading-relaxed mt-3'>
                    {project.description}
                  </p>

                  <div className='flex flex-wrap gap-2 mt-5'>
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className='text-xs text-blue-300 border border-zinc-700 rounded-full px-3 py-1'
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className='flex gap-4 mt-6'>

                    <a href={project.link} className='flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-sm transition'>
                      <FaArrowUpRightFromSquare />
                      Live Demo
                    </a>

                    <a href={project.github} className='flex items-center gap-2 px-4 py-2 border border-zinc-700 hover:border-blue-500 rounded-md text-sm transition'>
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
        <div className='max-w-5xl mx-auto border border-zinc-700 rounded-2xl p-8 sm:p-12 text-center'>

          <p className='text-blue-500 text-sm sm:text-base font-medium'>
            HAVE A PROJECT?
          </p>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-3'>
            Let's Build Something <span className='text-blue-300'>Together</span>
          </h2>

          <p className='text-zinc-400 max-w-2xl mx-auto mt-5 leading-relaxed'>
            Have an idea for a website or web application? I'd love to hear
            about it and help turn your idea into a modern digital experience.
          </p>

          <Link to="/contact" className='inline-block mt-7 px-6 py-2.5 bg-blue-500 hover:bg-blue-600 rounded-md transition'>
            Get In Touch
          </Link>

        </div>
      </section>

    </div>
  )
}

export default Projects