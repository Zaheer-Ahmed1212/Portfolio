import React, { useRef, useState } from 'react'
import {
FaEnvelope,
FaLocationDot,
FaGithub,
FaLinkedin,
FaInstagram
} from 'react-icons/fa6'
import emailjs from '@emailjs/browser'

function Contact() {
const form = useRef()
const [mes ,setMes] = useState(false)

const sendEmail = (e) => {
e.preventDefault()

emailjs.sendForm(
  'service_pndo78r',
  'template_stj0fqq',
  form.current,
  '7Z0u8MrPd9RnHFVaH'
).then(() => {
  alert('Your message has been successfully sent')
  setMes(true)
  form.current.reset()
}).catch(() => {
  alert("You can't send this message")
})


}

return ( <div className='text-white pt-30'>

  <section className='px-5 sm:px-8 lg:px-12 py-20'>
    <div className='max-w-6xl mx-auto'>

      <p className='text-blue-400 text-sm sm:text-base font-medium tracking-wider'>
        GET IN TOUCH
      </p>

      <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mt-2 tracking-tight'>
        Let's{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300'>
          Work Together
        </span>
      </h1>

      <p className='text-zinc-400 text-sm sm:text-base lg:text-lg max-w-2xl mt-5 leading-relaxed'>
        Looking for a modern website or need to improve your online presence?
        Tell me about your project, and let's discuss how I can help bring
        your vision to life.
      </p>

    </div>
  </section>

  <section className='px-5 sm:px-8 lg:px-12 pb-20'>
    <div className='max-w-6xl mx-auto grid lg:grid-cols-2 gap-8'>

      <div className='border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/10 hover:border-blue-500/40 transition duration-300'>

        <p className='text-blue-400 text-sm font-medium tracking-wider'>
          START A CONVERSATION
        </p>

        <h2 className='text-2xl sm:text-3xl font-bold mt-2 tracking-tight'>
          Let's Build{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300'>
            Something Great
          </span>
        </h2>

        <p className='text-zinc-400 text-sm sm:text-base leading-relaxed mt-4'>
          Whether you need a business website, landing page, website
          redesign, or a custom frontend solution, I'd be happy to discuss
          your requirements and find the right approach for your project.
        </p>

        <div className='mt-8 space-y-6'>

          <div className='group flex items-center gap-4'>
            <div className='w-11 h-11 shrink-0 rounded-lg border border-zinc-800 bg-blue-500/5 flex items-center justify-center text-blue-300 text-lg group-hover:border-blue-500/40 group-hover:text-cyan-300 transition duration-300'>
              <FaEnvelope />
            </div>

            <div>
              <p className='text-sm text-zinc-500'>
                Email
              </p>

              <p className='text-sm sm:text-base text-zinc-200'>
                zaheerjokhio312@gmail.com
              </p>
            </div>
          </div>

          <div className='group flex items-center gap-4'>
            <div className='w-11 h-11 shrink-0 rounded-lg border border-zinc-800 bg-blue-500/5 flex items-center justify-center text-blue-300 text-lg group-hover:border-blue-500/40 group-hover:text-cyan-300 transition duration-300'>
              <FaLocationDot />
            </div>

            <div>
              <p className='text-sm text-zinc-500'>
                Location
              </p>

              <p className='text-sm sm:text-base text-zinc-200'>
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
              target='_blank'
              rel='noreferrer'
              className='w-10 h-10 border border-zinc-800 bg-zinc-950 rounded-lg flex items-center justify-center text-zinc-400 hover:border-blue-500/50 hover:text-blue-300 hover:-translate-y-1 transition duration-300'
            >
              <FaGithub />
            </a>

            <a
              href='https://www.linkedin.com/in/zaheer-ahmed-ba96b8418?utm_source=share_via&utm_content=profile&utm_medium=member_android'
              target='_blank'
              rel='noreferrer'
              className='w-10 h-10 border border-zinc-800 bg-zinc-950 rounded-lg flex items-center justify-center text-zinc-400 hover:border-blue-500/50 hover:text-blue-300 hover:-translate-y-1 transition duration-300'
            >
              <FaLinkedin />
            </a>

            <a
              href='https://www.instagram.com/za.heer7526?igsh=bHA0aXUyemZwN2Ux'
              target='_blank'
              rel='noreferrer'
              className='w-10 h-10 border border-zinc-800 bg-zinc-950 rounded-lg flex items-center justify-center text-zinc-400 hover:border-blue-500/50 hover:text-blue-300 hover:-translate-y-1 transition duration-300'
            >
              <FaInstagram />
            </a>

          </div>

        </div>

      </div>

      <div className='border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/10 hover:border-blue-500/40 transition duration-300'>

        <p className='text-blue-400 text-sm font-medium tracking-wider'>
          START YOUR PROJECT
        </p>

        <h2 className='text-2xl sm:text-3xl font-bold mt-2 tracking-tight'>
          Tell Me About Your{' '}
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300'>
            Project
          </span>
        </h2>

        <form ref={form} onSubmit={sendEmail} className='mt-7 space-y-5'>

          <div>
            <label className='text-sm text-zinc-400'>
              Name
            </label>

            <input
              type='text'
              placeholder='Your name'
              name='user-name'
              required
              className='w-full mt-2 px-4 py-3 bg-zinc-950/80 border border-zinc-800 rounded-lg outline-none text-zinc-200 placeholder:text-zinc-600 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/20 transition duration-300'
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
              required
              className='w-full mt-2 px-4 py-3 bg-zinc-950/80 border border-zinc-800 rounded-lg outline-none text-zinc-200 placeholder:text-zinc-600 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/20 transition duration-300'
            />
          </div>

          <div>
            <label className='text-sm text-zinc-400'>
              Subject
            </label>

            <input
              type='text'
              placeholder='What do you need help with?'
              name='subject'
              required
              className='w-full mt-2 px-4 py-3 bg-zinc-950/80 border border-zinc-800 rounded-lg outline-none text-zinc-200 placeholder:text-zinc-600 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/20 transition duration-300'
            />
          </div>

          <div>
            <label className='text-sm text-zinc-400'>
              Message
            </label>

            <textarea
              rows='5'
              placeholder='Tell me about your business, website, or project...'
              name='message'
              required
              className='w-full mt-2 px-4 py-3 bg-zinc-950/80 border border-zinc-800 rounded-lg outline-none text-zinc-200 placeholder:text-zinc-600 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/20 transition duration-300 resize-none'
            ></textarea>
          </div>

          <button
            type='submit'
            className='w-full cursor-pointer py-3 bg-blue-500 hover:bg-blue-400 hover:-translate-y-0.5 rounded-lg shadow-lg shadow-blue-500/20 transition duration-300 font-medium'
          >
            {mes ? 'Message Sent' : 'Send Message'}
          </button>

        </form>

      </div>

    </div>
  </section>

  <section className='px-5 sm:px-8 lg:px-12 py-20'>
    <div className='max-w-5xl mx-auto border border-zinc-800 bg-zinc-950/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 text-center shadow-2xl shadow-black/20 hover:border-blue-500/30 transition duration-300'>

      <p className='text-blue-400 text-sm sm:text-base font-medium tracking-wider'>
        READY TO GET STARTED?
      </p>

      <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 tracking-tight'>
        Let's Create Something{' '}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300'>
          Great
        </span>
      </h2>

      <p className='text-zinc-400 max-w-2xl mx-auto mt-5 leading-relaxed'>
        Have a website idea or a business that needs a stronger online
        presence? Share your requirements and let's turn your idea into a
        professional digital experience.
      </p>

    </div>
  </section>

</div>


)
}

export default Contact
