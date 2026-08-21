import React from 'react'
import { FaCode, FaLaptopCode, FaLightbulb } from 'react-icons/fa6'
import Navbar from '../components/navbar'
import { Link } from 'react-router-dom'

function Abtpage() {
  return (
    <div className='text-white pt-30'>

      <section className='px-5 sm:px-8 lg:px-12 py-20'>
        <div className='max-w-6xl mx-auto'>

          <p className='text-blue-500 text-sm sm:text-base font-medium'>
            ABOUT ME
          </p>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mt-2'>
            Get To Know <span className='text-blue-300'>Me</span>
          </h1>

          <p className='text-zinc-400 text-sm sm:text-base lg:text-lg max-w-2xl mt-5 leading-relaxed'>
            I'm Zaheer Ahmed, a Frontend Developer passionate about creating
            modern, responsive, and user-friendly web experiences.
          </p>

        </div>
      </section>


      <section className='px-5 sm:px-8 lg:px-12 pb-20'>
        <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center'>

          <div>
            <p className='text-blue-500 text-sm font-medium'>
              WHO I AM
            </p>

            <h2 className='text-3xl sm:text-4xl font-bold mt-2'>
              Turning Ideas Into <span className='text-blue-300'>Web Experiences</span>
            </h2>

            <p className='text-zinc-400 mt-5 leading-relaxed'>
              I'm a frontend developer who enjoys building clean, modern, and
              responsive websites. I like taking an idea and transforming it
              into an interface that looks good and feels easy to use.
            </p>

            <p className='text-zinc-400 mt-4 leading-relaxed'>
              My main focus is frontend development using HTML, CSS, JavaScript,
              React, and Tailwind CSS. I'm constantly practicing, building
              projects, and learning new technologies to improve my development
              skills.
            </p>

            <p className='text-zinc-400 mt-4 leading-relaxed'>
              I believe good frontend development is not only about writing
              code. It's about creating experiences that are simple, responsive,
              accessible, and enjoyable to use.
            </p>
          </div>

          <div className='border border-zinc-700 rounded-2xl p-6 sm:p-8 bg-zinc-950/40'>

            <div className='flex items-center gap-4 border-b border-zinc-800 pb-5'>
              <div className='text-blue-300 text-3xl'>
                <FaCode />
              </div>

              <div>
                <h3 className='text-lg font-semibold'>
                  Clean Code
                </h3>

                <p className='text-zinc-400 text-sm mt-1'>
                  Writing simple and maintainable frontend code.
                </p>
              </div>
            </div>

            <div className='flex items-center gap-4 border-b border-zinc-800 py-5'>
              <div className='text-blue-300 text-3xl'>
                <FaLaptopCode />
              </div>

              <div>
                <h3 className='text-lg font-semibold'>
                  Responsive Design
                </h3>

                <p className='text-zinc-400 text-sm mt-1'>
                  Building websites that work across every screen size.
                </p>
              </div>
            </div>

            <div className='flex items-center gap-4 pt-5'>
              <div className='text-blue-300 text-3xl'>
                <FaLightbulb />
              </div>

              <div>
                <h3 className='text-lg font-semibold'>
                  Continuous Learning
                </h3>

                <p className='text-zinc-400 text-sm mt-1'>
                  Always learning and improving my development skills.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      <section className='px-5 sm:px-8 lg:px-12 py-20'>
        <div className='max-w-6xl mx-auto'>

          <p className='text-blue-500 text-sm sm:text-base font-medium'>
            MY JOURNEY
          </p>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-2'>
            My Development <span className='text-blue-300'>Journey</span>
          </h2>

          <div className='mt-10 border-l border-zinc-700 ml-2 pl-6 sm:pl-8 space-y-10'>

            <div className='relative'>
              <span className='absolute -left-[33px] sm:-left-[41px] top-1 w-3 h-3 rounded-full bg-blue-500'></span>

              <p className='text-blue-500 text-sm'>
                STARTING OUT
              </p>

              <h3 className='text-xl font-semibold mt-2'>
                Started Learning Web Development
              </h3>

              <p className='text-zinc-400 mt-2 max-w-2xl leading-relaxed'>
                Started building a strong foundation in HTML, CSS, and
                JavaScript while creating small projects to understand how
                websites work.
              </p>
            </div>

            <div className='relative'>
              <span className='absolute -left-[33px] sm:-left-[41px] top-1 w-3 h-3 rounded-full bg-blue-500'></span>

              <p className='text-blue-500 text-sm'>
                CURRENTLY
              </p>

              <h3 className='text-xl font-semibold mt-2'>
                Building With React
              </h3>

              <p className='text-zinc-400 mt-2 max-w-2xl leading-relaxed'>
                Currently focused on React, Tailwind CSS, component-based
                development, APIs, and creating complete responsive web
                applications.
              </p>
            </div>

            <div className='relative'>
              <span className='absolute -left-[33px] sm:-left-[41px] top-1 w-3 h-3 rounded-full bg-blue-500'></span>

              <p className='text-blue-500 text-sm'>
                NEXT STEP
              </p>

              <h3 className='text-xl font-semibold mt-2'>
                Growing As A Developer
              </h3>

              <p className='text-zinc-400 mt-2 max-w-2xl leading-relaxed'>
                My goal is to continue improving my frontend skills, learn
                backend development, and eventually build complete full-stack
                applications.
              </p>
            </div>

          </div>

        </div>
      </section>


      <section className='px-5 sm:px-8 lg:px-12 py-20'>
        <div className='max-w-6xl mx-auto'>

          <p className='text-blue-500 text-sm sm:text-base font-medium'>
            TECHNOLOGIES
          </p>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-2'>
            Technologies I <span className='text-blue-300'>Use</span>
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
                className='border border-zinc-700 rounded-xl p-5 text-center hover:border-blue-500 transition'
              >
                <p className='text-sm sm:text-base'>
                  {technology}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      <section className='px-5 sm:px-8 lg:px-12 py-20'>
        <div className='max-w-5xl mx-auto border border-zinc-700 rounded-2xl p-8 sm:p-12 text-center'>

          <p className='text-blue-500 text-sm sm:text-base font-medium'>
            LET'S CONNECT
          </p>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-3'>
            Let's Build Something <span className='text-blue-300'>Great</span>
          </h2>

          <p className='text-zinc-400 max-w-2xl mx-auto mt-5 leading-relaxed'>
            I'm always interested in new projects, ideas, and opportunities.
            If you have something in mind, feel free to get in touch.
          </p>
   
          <Link to="/contact" className=' inline-block mt-7 px-6 py-2.5 bg-blue-500 hover:bg-blue-600 rounded-md transition'>
            Contact Me
          </Link>

        </div>
      </section>

    </div>
  )
}

export default Abtpage