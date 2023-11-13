'use client';

import { useState } from 'react';
import Modal from '@/components/Modal';
import { portfolioItems } from '@/portfolioData';

export default function Portfolio() {
  const blankdata = {
    picture: '',
    thumbnail: '',
    title: '',
    subtitle: '',
    copy: '',
    more: '',
    tag: [''],
  };
  const [modalData, setModalData] = useState(blankdata);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (i: number) => {
    setModalData({
      ...portfolioItems[i],
    });

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalData(blankdata);
    setIsModalOpen(false);
  };

  return (
    <main
      className={`lg:flex-auto w-full h-full absolute lg:relative top-0 left-0 bg-slate-100 p-20 opacity-0 animate-page`}
    >
      <div
        className={`fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] flex items-center justify-center overflow-hidden p-20 popup ${
          isModalOpen ? 'opacity-100 z-50' : 'hidden opacity-0'
        }`}
      >
        <Modal data={modalData} closeModal={closeModal} isModalOpen />
      </div>

      <div
        className={`w-full h-full ${
          isModalOpen ? 'overflow-hidden' : 'overflow-scroll'
        }`}
      >
        <span className='inline-block px-4 py-2 bg-slate-300 text-slate-600 mb-6'>
          Portfolio
        </span>
        <h3 className='text-4xl font-extrabold text-slate-800 mb-14'>
          Creative Works
        </h3>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20 pr-16'>
          {portfolioItems.map((value, i) => {
            return (
              <div
                key={i}
                className='h-[300px] overflow-hidden relative bg-slate-300'
              >
                <img
                  src={value.thumbnail}
                  alt={''}
                  // alt={value.title}
                  className='block w-full h-full object-cover transition-all duration-1000 z-10 grayscale'
                />
                <a
                  className='block w-full h-full cursor-pointer'
                  onClick={() => openModal(i)}
                >
                  <span className='absolute top-0 left-0 w-full h-full transition-all duration-200 opacity-0 hover:opacity-100 bg-[rgba(255,255,255,0.8)] z-20 flex justify-start items-end hover:scale-90'>
                    <p className='p-5 font-semibold text-lg text-slate-800'>
                      {value.title} <br />
                      {value.tag.map((item, i) => {
                        return (
                          <span key={i} className='font-light text-sm mr-1'>
                            {item}
                          </span>
                        );
                      })}
                    </p>
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
