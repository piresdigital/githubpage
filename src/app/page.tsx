export default function Home() {
  return (
    <main className='lg:flex lg:flex-auto lg:justify-center w-full h-full absolute lg:relative top-0 left-0 bg-slate-100 p-20 opacity-0 animate-page'>
      <div className='w-full flex flex-col items-center justify-center'>
        <div className='w-[80%] flex flex-col lg:flex-row items-center gap-[90px]'>
          <img
            src='/img/profile.jpeg'
            alt='Dhavidy Profile'
            width={280}
            height={280}
            className='grayscale hover:grayscale-0 transition-all duration-150 hover:scale-110 animate-profile border-2 border-slate-300'
          />
          <div className='flex-auto'>
            <h2 className='text-[3.2em] font-extrabold mb-4 text-center lg:text-left'>
              Dhavidy Pires
            </h2>
            <p className='text-lg text-slate-500 leading-relaxed mb-5 text-center lg:text-left'>
              Aspiring developer with a passion for all things IT. 🚀 Turning
              lines of code into creative solutions. Currently exploring the
              vast realms of programming and technology.{' '}
            </p>
            <div className='social-icons'>
              <a target='_blank' href='https://www.instagram.com/dhavidypires/'>
                <img src='/img/instagram.svg' alt='Instagram Profile' />
              </a>
              <a
                target='_blank'
                href='https://www.linkedin.com/in/dhavidypires/'
              >
                <img src='/img/linkedin.svg' alt='LinedIn Profile' />
              </a>
              <a
                target='_blank'
                href='https://github.com/piresdigital?tab=repositories'
              >
                <img src='/img/github.svg' alt='Github Profile' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
