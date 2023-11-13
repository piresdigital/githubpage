interface data {
  picture: string;
  thumbnail: string;
  title: string;
  subtitle: string;
  copy: string;
  more: string;
  tag: string[];
}

export default function Modal({
  data,
  closeModal,
  isModalOpen,
}: {
  data: data;
  closeModal: () => void;
  isModalOpen: boolean;
}) {
  return (
    <div className='popup-content'>
      <span className='closePopup'>
        <a className='cursor-pointer' onClick={() => closeModal()}>
          <img src='/img/menu-close.svg' alt='Close Modal' />
        </a>
      </span>
      <div className=''>
        <div className='relative w-full h-[300px] bg-slate-100 border-1 border-slate-300 mb-12'>
          <img
            src={data.picture}
            alt=''
            className='block object-cover w-full h-full'
          />
          <span className='block absolute top-6 right-6'>
            {data.tag.map((item, i) => {
              return (
                <span
                  key={i}
                  className='inline-block bg-slate-600 text-slate-100 text-[10px] py-1 px-2 mr-1'
                >
                  {item}
                </span>
              );
            })}
          </span>
        </div>
      </div>

      <div>
        <div className='mb-8'>
          <h3 className='text-2xl font-extrabold'>{data.title}</h3>
          {data.subtitle && (
            <h5 className='font-semibold mb'>{data.subtitle}</h5>
          )}
        </div>
        <div className='flex gap-12 justify-between'>
          <p>{data.copy}</p>
          <div className='min-w-[200px]'>
            <a target='_blank' href={data.more} className='hover:underline'>
              <img
                className='inline-block w-8 mr-2'
                src='/img/link-icon.svg'
                alt='Link'
              />
              See More.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
