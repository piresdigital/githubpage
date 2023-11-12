export default function SkillBar({
  bars,
  skill,
}: {
  bars: number;
  skill: string;
}) {
  const n = [];
  for (let i = 0; i < bars; i++) {
    n.push(i);
  }

  return (
    <>
      <div className='mb-6'>
        <h5 className='font-semibold mb-4'>
          {skill}{' '}
          <span className='text-xs text-slate-500 font-light italic'>
            {bars === 3 && '[Advanced]'}
            {bars === 2 && '[Intermediate]'}
            {bars === 1 && '[Begginer]'}
          </span>
        </h5>
        <div className='w-full flex gap-[4px]'>
          {n.map((i) => {
            return (
              <span
                key={i}
                className='w-[30%] bg-slate-300 h-[2px] rounded'
              ></span>
            );
          })}
          <span></span>
        </div>
      </div>
    </>
  );
}
