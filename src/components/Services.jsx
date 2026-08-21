import React from 'react'
import { FaLaptopCode, FaReact, FaMobileScreen, FaCode } from 'react-icons/fa6'
function Services() {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: 'Responsive Websites',
      description:
        'Modern websites that provide a smooth experience across mobile, tablet, and desktop.'
    },
    {
      icon: <FaCode />,
      title: 'Landing Pages',
      description:
        'Clean and engaging landing pages designed to present your business, product, or service effectively.'
    },
    {
      icon: <FaReact />,
      title: 'React Applications',
      description:
        'Interactive and dynamic web applications built with React and modern frontend technologies.'
    },
    {
      icon: <FaMobileScreen />,
      title: 'Website Redesign',
      description:
        'Improve an outdated website with a cleaner, modern, and more user-friendly interface.'
    }
  ]

  return (
    <section className='text-white px-5 sm:px-8 lg:px-12 py-20'>

      <div className='max-w-6xl mx-auto'>

        <div className='mb-10'>
          <p className='text-blue-500 text-sm sm:text-base font-medium'>
            SERVICES
          </p>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-2'>
            What I Can <span className='text-blue-300'>Build For You</span>
          </h2>

          <p className='text-zinc-400 mt-4 max-w-2xl text-sm sm:text-base'>
            I help businesses and individuals turn their ideas into modern,
            responsive websites that look great and work smoothly across devices.
          </p>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>

          {services.map((service, index) => (
            <div
              key={index}
              className='border border-zinc-700 rounded-2xl p-6 hover:border-blue-500 transition'
            >

              <div className='text-blue-300 text-3xl mb-5'>
                {service.icon}
              </div>

              <h3 className='text-lg font-semibold'>
                {service.title}
              </h3>

              <p className='text-zinc-400 text-sm leading-relaxed mt-3'>
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Services