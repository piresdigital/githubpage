'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navigation = () => {
  const [opened, setOpened] = useState(false);

  const toggleMenu = () => {
    setOpened(!opened);
  };

  return (
    <>
      <button
        className={`inline-block lg:hidden p-2 absolute top-6 right-6 z-40 ${
          opened ? 'menu-opened' : 'menu-closed'
        }`}
        type='button'
        onClick={toggleMenu}
      >
        {opened ? (
          <Image
            src='img/menu-close.svg'
            width={40}
            height={8}
            className='menu-icon-opened'
            alt='Open Navigation'
          />
        ) : (
          <Image
            src='img/menu-open.svg'
            width={40}
            height={8}
            className='menu-icon-closed'
            alt='Open Navigation'
          />
        )}
      </button>
      <div
        className={`flex flex-col justify-center w-full lg:w-1/4 min-w-[315px] h-full absolute lg:relative ${
          opened ? 'left-0 opacity-100' : '-left-[100%] opacity-0'
        } lg:left-0 lg:opacity-100 top-0 p-20 border-l-1 border-l-slate-400 z-20 bg-white transition-all delay-150 duration-500`}
      >
        <h4 className='text-xl text-slate-800 font-extrabold uppercase mb-7'>
          Dhavidy Pires <br />
          <span className='font-extralight text-sm capitalize'>
            Web Developer
          </span>
        </h4>
        <nav className='nav'>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/portfolio'>Portfolio</Link>
          <Link href='/contact'>Contact</Link>
        </nav>
        <div className='mt-18 mb-7'>
          <h5 className='text-sm text-slate-500 mb-3'>Languages</h5>
          <nav className='flex flex-row gap-x-3 text-slate-500'>
            <Link className='flex-1 max-w-[20px]' href='/'>
              <img src='/img/usa-flag.svg' alt='USA' />
            </Link>
            <Link
              className='flex-1 grayscale opacity-20 max-w-[20px] cursor-default'
              href=''
            >
              <img src='/img/brazil-flag.svg' alt='Brazil' />
            </Link>
            <Link
              className='flex-1 grayscale opacity-20 max-w-[20px] cursor-default'
              href=''
            >
              <img src='/img/spain-flag.svg' alt='Spain' />
            </Link>
            <Link
              className='flex-1 grayscale opacity-20 max-w-[20px] cursor-default'
              href=''
            >
              <img src='/img/japan-flag.svg' alt='Japan' />
            </Link>
          </nav>
        </div>
        <div className=''>
          <p className='text-sm text-slate-500'>&copy; 2023.</p>
        </div>
      </div>
    </>
  );
};

export default Navigation;
