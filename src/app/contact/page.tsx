export default function Contact() {
  return (
    <main className='lg:flex-auto w-full h-full absolute lg:relative top-0 left-0 bg-slate-100 p-20 overflow-scroll opacity-0 animate-page'>
      <div className='mb-14 w-full h-full flex items-center justify-center'>
        <div className='text-center'>
          <h2 className='text-4xl font-extrabold text-slate-700 mb-5'>
            Contact Me.
          </h2>
          <p className='mb-8'>
            To get in touch, simple reach out through any social platform below.
          </p>
          <div className='w-full flex justify-center gap-5 mb-8'>
            <a
              href='https://www.linkedin.com/in/dhavidypires/'
              target='_blank'
              className='w-7 opacity-70 hover:opacity-100'
            >
              <img src='/img/linkedin.svg' alt='LinkedIn' />
            </a>
            <a
              href='https://www.instagram.com/dhavidypires/'
              target='_blank'
              className='w-7 opacity-70 hover:opacity-100'
            >
              <img src='/img/instagram.svg' alt='Instagram' />
            </a>
          </div>
          <h5 className='text-2xl text-slate-700 mb-4'>Or via email.</h5>
          <a
            className='text-lg text-slate-600 hover:underline'
            href='mailto:dhavidyluizpires@gmail.com'
          >
            dhavidyluizpires@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
}
