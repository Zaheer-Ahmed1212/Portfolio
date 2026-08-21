import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa'
import { SiTailwindcss, SiVite } from 'react-icons/si'

function Skills() {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Vite', icon: <SiVite /> },
  ]

  return (
    <section className='text-white px-5 sm:px-8 lg:px-12 py-20'>

      <div className='max-w-6xl mx-auto'>

        <div className='mb-10'>
          <p className='text-blue-500 text-sm sm:text-base font-medium'>
            MY SKILLS
          </p>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-2'>
            Technologies I <span className='text-blue-300'>Work With</span>
          </h2>

          <p className='text-zinc-400 mt-4 max-w-2xl text-sm sm:text-base'>
            I use modern frontend technologies to build responsive, fast, and
            engaging web experiences.
          </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>

          {skills.map((skill, index) => (
            <div
              key={index}
              className='border border-zinc-700 rounded-xl p-5 flex flex-col items-center justify-center gap-3 hover:border-blue-500 transition'
            >
              <div className='text-3xl text-blue-300'>
                {skill.icon}
              </div>

              <p className='text-sm sm:text-base'>
                {skill.name}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default Skills