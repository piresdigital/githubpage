import SkillBar from '@/components/SkillBar';

export default function About() {
  return (
    <main className='lg:flex-auto w-full h-full absolute lg:relative top-0 left-0 bg-slate-100 p-20 overflow-scroll opacity-0 animate-page'>
      <div className='mb-14'>
        <span className='inline-block px-4 py-2 bg-slate-300 text-slate-600 mb-6'>
          About
        </span>
        <h3 className='text-4xl font-extrabold text-slate-800'>
          A little about me.
        </h3>
      </div>
      <div className='w-full h-[400px] bg-[url(/img/in-japan-c.jpg)] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-150 mb-8'></div>
      <div className='mb-12'>
        <h4 className='font-semibold text-3xl mb-2'>Dhavidy Pires</h4>
        <h5 className='font-normal text-sm text-slate-500 mb-10'>
          Aspiring Full-Stack Developer
        </h5>
        <div className='py-6 border-t-[1px] border-b-[1px] border-slate-300'>
          <p className='leading-relaxed text-lg mb-6'>
            Hi, I'm Dhavidy Pires
            <span className='text-sm italic'> *(pronoounced as David)</span>, a
            33-year-old aspiring web developer who's trying to forge a path
            through the digital landscape. Self-taught in the realm of web
            development, aiming to seamlessly blend technical expertise with an
            artistic touch, owing to a background in graphic design. Committed
            to the pursuit of excellence, I'm dedicated to delivering projects
            of the highest quality, prioritizing precision and reliability in
            every endeavor.
          </p>
          <p className='leading-relaxed text-lg mb-6'>
            With an adept understanding of both design aesthetics and the
            intricacies of web development, I approach each project with a
            meticulous focus on achieving optimal results. My commitment to
            quality extends beyond the technical aspects, encompassing a
            steadfast dedication to client satisfaction. In the digital arena,
            my aim is to craft solutions that seamlessly integrate functionality
            and aesthetics, setting a standard for professional excellence in
            the ever-evolving landscape of web development.
          </p>
        </div>
      </div>
      <div className='mb-12'>
        <a
          href='#'
          target='_blank'
          className='inline-block px-6 py-3 transition-all duration-150 hover:scale-110 hover:bg-slate-400 hover:text-slate-800 bg-slate-800 text-slate-200'
        >
          Download CV
        </a>
      </div>
      <div className='flex flex-col lg:flex-row lg:justify-between gap-y-16 lg:gap-x-16 lg:gap-y-0 bg-white py-20 px-10'>
        <div className='w-full'>
          <h2 className='font-semibold text-xl mb-8 py-[2px] pl-2 border-l-2 border-slate-500'>
            Programming Skills
          </h2>
          <SkillBar bars={3} skill='HTML / CSS / JS' />
          <SkillBar bars={2} skill='Next Js' />
          <SkillBar bars={2} skill='Node.JS' />
          <SkillBar bars={1} skill='Python' />
          <SkillBar bars={3} skill='NoSQL / SQL / ORM' />
          <SkillBar bars={2} skill='Cloud' />
          <SkillBar bars={1} skill='Docker' />
        </div>
        <div className='w-full'>
          <h3 className='font-semibold text-xl mb-8 py-[2px] pl-2 border-l-2 border-slate-500'>
            Design Skills
          </h3>
          <SkillBar bars={3} skill='Adobe XD' />
          <SkillBar bars={3} skill='Photoshop' />
          <SkillBar bars={2} skill='Illustrator' />
          <SkillBar bars={2} skill='Figma' />
        </div>
        <div className='w-full'>
          <h3 className='font-semibold text-xl mb-8 py-[2px] pl-2 border-l-2 border-slate-500'>
            Soft Skills
          </h3>
          <h5 className='font-semibold mb-6'>Communication</h5>
          <h5 className='font-semibold mb-6'>Team Work / Collaboration</h5>
          <h5 className='font-semibold mb-6'>Problem-Solving</h5>
          <h5 className='font-semibold mb-6'>Time Management</h5>
          <h5 className='font-semibold mb-6'>Leadership</h5>
        </div>
      </div>
      <div className='w-full my-20'>
        <h2 className='font-semibold text-2xl mb-16'>Education</h2>
        <div className='w-full flex flex-col gap-16'>
          <div className='w-full flex gap-20'>
            <div className='flex-1 mb-12'>
              <h3 className='text-2xl leading-5 mb-6'>
                IBM Full Stack Developer Certificate <br />
                <span className='text-sm text-slate-700'>
                  by Coursera | March 2022 - November 2022
                </span>
              </h3>
              <div className='mb-6'>
                <a
                  className='inline-block py-2 px-4 bg-slate-300 text-slate-700 text-sm transition-all duration-150 hover:scale-110'
                  target='_blank'
                  href='https://www.coursera.org/account/accomplishments/professional-cert/E3QP9V93BMLB'
                >
                  See Certificate
                </a>
              </div>
              <div className='pl-6 py-2 border-l-2 border-slate-300'>
                <ul className='leading-loose text-sm'>
                  <li>- Web Development with HTML, CSS, JavaScript</li>
                  <li>- Python for Data Science, AI Development</li>
                  <li>- Git and Github Fundamentals</li>
                  <li>- Developing Microservices and Serverless</li>
                  <li>- Cloud Apps using Node and React</li>
                  <li>- Docker, Kubernetes & OpenShift</li>
                  <li>- Applications with Django, SQL Database</li>
                </ul>
              </div>
            </div>

            <div className='flex-1 mb-12'>
              <h3 className='text-2xl leading-5 mb-6'>
                Node.Js Developer Course <br />
                <span className='text-sm text-slate-700'>
                  by Udemy | July 2022 - October 2022
                </span>
              </h3>
              <div className='mb-6'>
                <a
                  className='inline-block py-2 px-4 bg-slate-300 text-slate-700 text-sm transition-all duration-150 hover:scale-110'
                  target='_blank'
                  href='https://www.udemy.com/certificate/UC-a09ba867-04b9-4e6c-86be-45379ccdedd5/'
                >
                  See Certificate
                </a>
              </div>
              <div className='pl-6 py-2 border-l-2 border-slate-300'>
                <ul className='leading-loose text-sm'>
                  <li>- Build, test and run Node Apps</li>
                  <li>- Create Express Servers and APIs</li>
                  <li>- Using Mongoose and MongoDB</li>
                  <li>- Diving into ES6/ES7 JavaScript</li>
                  <li>- Real-time Apps using SocketIO</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='w-full flex gap-20'>
            <div className='flex-1 mb-12'>
              <h3 className='text-2xl leading-5 mb-6'>
                Adobe XD User Experience Essentials <br />
                <span className='text-sm text-slate-700'>
                  by Udemy | April 2022 - April 2022
                </span>
              </h3>
              <div className='mb-6'>
                <a
                  className='inline-block py-2 px-4 bg-slate-300 text-slate-700 text-sm transition-all duration-150 hover:scale-110'
                  target='_blank'
                  href='https://www.udemy.com/certificate/UC-54fc84ae-2419-4605-90e1-058722535021/'
                >
                  See Certificate
                </a>
              </div>
              <div className='pl-6 py-2 border-l-2 border-slate-300'>
                <ul className='leading-loose text-sm'>
                  <li>- Wireframing</li>
                  <li>- Prototyping</li>
                  <li>- Animation</li>
                  <li>- Micro-Interactions</li>
                  <li>- Exporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white py-20 px-10'>
        <h2 className='font-semibold text-2xl mb-8'>Work Experience</h2>
        <div className='flex gap-20'>
          <div className='flex-1 border-l-2 border-slate-300'>
            <div className='flex justify-between items-start relative gap-x-10 mb-8'>
              <span className='block w-6 h-6 absolute -left-[14px] top-5 bg-white border-slate-300 border-[2px] rounded-full' />
              <div className='flex-1 ml-6 mt-2 rounded-full py-[14px] px-5 bg-slate-300 text-slate-700 text-xs max-w-[200px] text-center'>
                Jun 2021 - Jul 2022
              </div>
              <div className='flex-1'>
                <h5 className='text-lg font-semibold'>
                  Millbrook Resort <br />
                  <span className='text-xs text-slate-500 font-normal'>
                    Housekeeping Manager
                  </span>
                </h5>
              </div>
            </div>

            <div className='flex justify-between items-start relative gap-x-10 mb-8'>
              <span className='block w-6 h-6 absolute -left-[14px] top-5 bg-white border-slate-300 border-[2px] rounded-full' />
              <div className='flex-1 ml-6 mt-2 rounded-full py-[14px] px-5 bg-slate-300 text-slate-700 text-xs max-w-[200px] text-center'>
                Apr 2017 - Jun 2021
              </div>
              <div className='flex-1'>
                <h5 className='text-lg font-semibold'>
                  Millbrook Resort <br />
                  <span className='text-xs text-slate-500 font-normal'>
                    Laundry Supervisor
                  </span>
                </h5>
              </div>
            </div>

            <div className='flex justify-between items-start relative gap-x-10 mb-8'>
              <span className='block w-6 h-6 absolute -left-[14px] top-5 bg-white border-slate-300 border-[2px] rounded-full' />
              <div className='flex-1 ml-6 mt-2 rounded-full py-[14px] px-5 bg-slate-300 text-slate-700 text-xs max-w-[200px] text-center'>
                Dec 2015 - Mar 2017
              </div>
              <div className='flex-1'>
                <h5 className='text-lg font-semibold'>
                  Millbrook Resort <br />
                  <span className='text-xs text-slate-500 font-normal'>
                    Laundry Van Driver
                  </span>
                </h5>
              </div>
            </div>
          </div>
          <div className='flex-1 border-l-2 border-slate-300'>
            <div className='flex justify-between items-start relative gap-x-10 mb-8'>
              <span className='block w-6 h-6 absolute -left-[14px] top-5 bg-white border-slate-300 border-[2px] rounded-full' />
              <div className='flex-1 ml-6 mt-2 rounded-full py-[14px] px-5 bg-slate-300 text-slate-700 text-xs max-w-[200px] text-center'>
                Oct 2012 - Sep 2015
              </div>
              <div className='flex-1'>
                <h5 className='text-lg font-semibold'>
                  Graphic Designer
                  <br />
                  <span className='text-xs text-slate-500 font-normal'>
                    Freelancer
                  </span>
                </h5>
              </div>
            </div>

            <div className='flex justify-between items-start relative gap-x-10 mb-8'>
              <span className='block w-6 h-6 absolute -left-[14px] top-5 bg-white border-slate-300 border-[2px] rounded-full' />
              <div className='flex-1 ml-6 mt-2 rounded-full py-[14px] px-5 bg-slate-300 text-slate-700 text-xs max-w-[200px] text-center'>
                May 2011 - Aug 2012
              </div>
              <div className='flex-1'>
                <h5 className='text-lg font-semibold'>
                  Millbrook Resort <br />
                  <span className='text-xs text-slate-500 font-normal'>
                    Laundry Worker
                  </span>
                </h5>
              </div>
            </div>

            <div className='flex justify-between items-start relative gap-x-10 mb-8'>
              <span className='block w-6 h-6 absolute -left-[14px] top-5 bg-white border-slate-300 border-[2px] rounded-full' />
              <div className='flex-1 ml-6 mt-2 rounded-full py-[14px] px-5 bg-slate-300 text-slate-700 text-xs max-w-[200px] text-center'>
                Apr 2008 - Dec 2010
              </div>
              <div className='flex-1'>
                <h5 className='text-lg font-semibold'>
                  MJR Arte & Publicidade <br />
                  <span className='text-xs text-slate-500 font-normal'>
                    Graphic Designer
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
