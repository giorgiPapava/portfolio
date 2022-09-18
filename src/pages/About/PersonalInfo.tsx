import { CSSProperties } from 'react';
import { PERSONAL_INFOS, PERSONAL_INFO_EXPERIENCE, LANGUAGES } from './helpers';

const PersonalInfo = () => {
  return (
    <section className='flex flex-col gap-8 lg:flex-row lg:gap-0'>
      <div className='flex-1 text-center lg:text-left'>
        <p className='text-lg font-semibold uppercase text-white sm:text-2xl'>
          Personal Info
        </p>

        <div className='mt-4 flex flex-col flex-wrap gap-2 sm:gap-4'>
          {PERSONAL_INFOS.map((info) => (
            <p
              className='flex flex-col text-sm sm:block sm:text-base'
              key={info.title}
            >
              {info.title}: <span className='text-white'>{info.value}</span>
            </p>
          ))}
        </div>

        <button className='btn-arrow btn mt-8'>
          <span className='z-10'>Download CV</span>
        </button>
      </div>

      <div className='flex flex-1 flex-col justify-between gap-8 lg:gap-0'>
        <div className='flex flex-col items-center justify-between gap-4 sm:flex-row sm:items-start'>
          {PERSONAL_INFO_EXPERIENCE.map((info) => (
            <div
              key={info.id}
              className='flex gap-6 rounded-md border border-zinc-700 p-5 sm:block sm:h-36 sm:w-60'
            >
              <p
                className='relative w-max text-3xl font-bold text-primary after:absolute
                after:-right-3 after:-top-2 after:text-sm after:font-normal after:content-["+"] sm:text-5xl sm:after:-right-5 after:sm:text-3xl'
              >
                {info.value}
              </p>
              <p
                className='relative mt-2 max-w-[180px] text-xs uppercase text-white before:top-3 before:left-0
                before:h-px before:w-8 before:bg-zinc-700 sm:pl-10 sm:text-base sm:before:absolute
              '
              >
                {info.desc}
              </p>
            </div>
          ))}
        </div>

        <div className='flex justify-around'>
          {LANGUAGES.map((lang) => (
            <div key={lang.id}>
              <p className='mb-2 text-center sm:mb-4 sm:text-2xl'>
                {lang.name}
              </p>
              <div
                style={{ '--value': lang.value } as CSSProperties}
                className='radial-progress text-primary'
              >
                <span className='text-xs text-white sm:text-base'>
                  {lang.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalInfo;
