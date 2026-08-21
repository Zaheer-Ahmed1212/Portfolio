import React, { useRef, useState } from 'react'
import {
  FaEnvelope,
  FaLocationDot,
  FaGithub,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa6'
import Navbar from '../components/Navbar'
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef();
  const [mes,setmes]=useState(false)
  const sendEmail=(e)=>{
    e.preventDefault();
    emailjs.sendForm("service_pndo78r","template_stj0fqq",form.current,"7Z0u8MrPd9RnHFVaH").then(()=>{
      alert("your message is successfuly sent")
      setmes(true)
      form.current.reset();
    },(error)=>{
      alert("you cant send this message")
    })
    
  }
  return (

    <div className='text-white pt-30'>
      <section className='px-5 sm:px-8 lg:px-12 py-20'>
        <div className='max-w-6xl mx-auto'>

          <p className='text-blue-500 text-sm sm:text-base font-medium'>
            CONTACT ME
          </p>

          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mt-2'>
            Let's <span className='text-blue-300'>Talk</span>
          </h1>

          <p className='text-zinc-400 text-sm sm:text-base lg:text-lg max-w-2xl mt-5 leading-relaxed'>
            Have a project in mind, need a website, or simply want to say
            hello? Feel free to reach out. I'd be happy to hear from you.
          </p>

        </div>
      </section>


      <section className='px-5 sm:px-8 lg:px-12 pb-20'>
        <div className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-8'>

          <div className='border border-zinc-700 rounded-2xl p-6 sm:p-8'>

            <p className='text-blue-500 text-sm font-medium'>
              GET IN TOUCH
            </p>

            <h2 className='text-2xl sm:text-3xl font-bold mt-2'>
              Let's Work <span className='text-blue-300'>Together</span>
            </h2>

            <p className='text-zinc-400 text-sm sm:text-base leading-relaxed mt-4'>
              I'm available for frontend development projects, landing pages,
              website redesigns, and other web development work.
            </p>

            <div className='mt-8 space-y-6'>

              <div className='flex items-center gap-4'>
                <div className='w-11 h-11 rounded-lg border border-zinc-700 flex items-center justify-center text-blue-300 text-lg'>
                  <FaEnvelope />
                </div>

                <div>
                  <p className='text-sm text-zinc-500'>
                    Email
                  </p>

                  <p className='text-sm sm:text-base'>
                    zaheerjokhio312@gmail.com
                  </p>
                </div>
              </div>

              <div className='flex items-center gap-4'>
                <div className='w-11 h-11 rounded-lg border border-zinc-700 flex items-center justify-center text-blue-300 text-lg'>
                  <FaLocationDot />
                </div>

                <div>
                  <p className='text-sm text-zinc-500'>
                    Location
                  </p>

                  <p className='text-sm sm:text-base'>
                    Karachi, Pakistan
                  </p>
                </div>
              </div>

            </div>

            <div className='border-t border-zinc-800 mt-8 pt-6'>

              <p className='text-sm text-zinc-500'>
                Follow Me
              </p>

              <div className='flex gap-4 mt-4 text-xl'>

                <a
                  href='https://share.google/9khGlrNrjYor5GJeS'
                  className='w-10 h-10 border border-zinc-700 rounded-lg flex items-center justify-center hover:border-blue-500 hover:text-blue-300 transition'
                >
                  <FaGithub />
                </a>

                <a
                  href='https://www.linkedin.com/in/zaheer-ahmed-ba96b8418?utm_source=share_via&utm_content=profile&utm_medium=member_android'
                  className='w-10 h-10 border border-zinc-700 rounded-lg flex items-center justify-center hover:border-blue-500 hover:text-blue-300 transition'
                >
                  <FaLinkedin />
                </a>

                <a
                  href='https://www.instagram.com/za.heer7526?igsh=bHA0aXUyemZwN2Ux'
                  className='w-10 h-10 border border-zinc-700 rounded-lg flex items-center justify-center hover:border-blue-500 hover:text-blue-300 transition'
                >
                  <FaInstagram />
                </a>

              </div>

            </div>

          </div>


          <div className='border border-zinc-700 rounded-2xl p-6 sm:p-8'>

            <p className='text-blue-500 text-sm font-medium'>
              SEND A MESSAGE
            </p>

            <h2 className='text-2xl sm:text-3xl font-bold mt-2'>
              Tell Me About Your <span className='text-blue-300'>Project</span>
            </h2>

            <form ref={form} onSubmit={sendEmail}  className='mt-7 space-y-5'>

              <div>
                <label className='text-sm text-zinc-400'>
                  Name
                </label>

                <input
                  type='text'
                  placeholder='Your name'
                  name='user-name'
                  className='w-full mt-2 px-4 py-3 bg-zinc-950 border border-zinc-700 rounded-lg outline-none focus:border-blue-500 transition'
                />
              </div>

              <div>
                <label className='text-sm text-zinc-400'>
                  Email
                </label>

                <input
                  type='email'
                  placeholder='your@email.com'
                  name='email'
                  className='w-full mt-2 px-4 py-3 bg-zinc-950 border border-zinc-700 rounded-lg outline-none focus:border-blue-500 transition'
                />
              </div>

              <div>
                <label className='text-sm text-zinc-400'>
                  Subject
                </label>

                <input
                  type='text'
                  placeholder='What is your project about?'
                  name='subject'
                  className='w-full mt-2 px-4 py-3 bg-zinc-950 border border-zinc-700 rounded-lg outline-none focus:border-blue-500 transition'
                />
              </div>

              <div>
                <label className='text-sm text-zinc-400'>
                  Message
                </label>

                <textarea
                  rows='5'
                  placeholder='Tell me about your project...'
                  name='message'
                  className='w-full mt-2 px-4 py-3 bg-zinc-950 border border-zinc-700 rounded-lg outline-none focus:border-blue-500 transition resize-none'
                ></textarea>
              </div>

              <button
                type='submit'
                className='w-full cursor-pointer py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition font-medium'
              >
                {mes?"message Sent":"Send Message"}
              </button>

            </form>

          </div>

        </div>
      </section>


      <section className='px-5 sm:px-8 lg:px-12 py-20'>
        <div className='max-w-5xl mx-auto border border-zinc-700 rounded-2xl p-8 sm:p-12 text-center'>

          <p className='text-blue-500 text-sm sm:text-base font-medium'>
            HAVE A PROJECT IN MIND?
          </p>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-3'>
            Let's Create Something <span className='text-blue-300'>Amazing</span>
          </h2>

          <p className='text-zinc-400 max-w-2xl mx-auto mt-5 leading-relaxed'>
            I'm always open to discussing new projects, creative ideas, and
            opportunities to build something useful together.
          </p>

        </div>
      </section>

    </div>
  )
}

export default Contact