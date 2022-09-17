import { CSSProperties } from 'react';
import { GoBriefcase } from 'react-icons/go';
import {
  PERSONAL_INFOS,
  PERSONAL_INFO_EXPERIENCE,
  LANGUAGES,
  STACK,
  EXPERIENCE,
} from './helpers';

const AboutPage = () => {
  return (
    <div className='mx-auto max-w-5xl pb-16'>
      <h2 className='py-20 text-center font-poppins text-6xl font-bold uppercase tracking-tight text-white'>
        About <span className='font-poppins text-primary'>Me</span>
      </h2>
      <div className='flex'>
        <div className='flex-1'>
          <p className='text-2xl font-semibold uppercase text-white'>
            Personal Info
          </p>

          <div className='mt-4 flex flex-col flex-wrap gap-4'>
            {PERSONAL_INFOS.map((info) => (
              <p key={info.title}>
                {info.title}: <span className='text-white'>{info.value}</span>
              </p>
            ))}
          </div>

          <button className='btn-arrow btn mt-8'>
            <span className='z-10'>Download CV</span>
          </button>
        </div>

        <div className='flex flex-1 flex-col justify-between'>
          <div className='flex justify-between gap-4'>
            {PERSONAL_INFO_EXPERIENCE.map((info) => (
              <div key={info.id}>
                <div className='h-36 w-60 rounded-md border border-zinc-700 p-5'>
                  <p
                    className='relative w-max text-5xl font-bold text-primary
                after:absolute after:-right-5 after:-top-2 after:text-3xl after:font-normal after:content-["+"]'
                  >
                    {info.value}
                  </p>
                  <p
                    className='relative mt-2 max-w-[180px] pl-10 uppercase text-white
                before:absolute before:top-3 before:left-0 before:h-px before:w-8 before:bg-zinc-700
              '
                  >
                    {info.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className='flex justify-around'>
            {LANGUAGES.map((lang) => (
              <div key={lang.id}>
                <p className='mb-4 text-center text-2xl'>{lang.name}</p>
                <div
                  style={{ '--value': lang.value } as CSSProperties}
                  className='radial-progress text-primary'
                >
                  <span className='text-white'>{lang.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className='mx-auto my-20 max-w-[40%] border border-solid border-zinc-700' />
      <p className='mb-12 text-center text-2xl font-semibold uppercase text-white'>
        Stack
      </p>
      <div className='flex flex-wrap justify-center gap-12'>
        {STACK.map((stack) => (
          <div
            key={stack.src}
            className='tooltip tooltip-warning'
            data-tip={stack.name}
          >
            <img
              src={stack.src}
              className='h-16'
            />
          </div>
        ))}
      </div>

      <hr className='mx-auto my-20 max-w-[40%] border border-solid border-zinc-700' />

      <p className='my-12 text-center text-2xl font-semibold uppercase text-white'>
        Experience
      </p>

      <div className='flex flex-wrap justify-between gap-y-12'>
        {EXPERIENCE.map((experience) => (
          <div
            key={experience.id}
            className='relative flex w-1/2 gap-4 after:absolute
               after:bottom-0 after:left-[18px] after:h-4/6 after:border after:border-solid after:border-zinc-700'
          >
            <div className='flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white'>
              <GoBriefcase />
            </div>
            <div className='flex-1'>
              <div className='badge bg-stone-700 text-white'>
                {experience.date}
              </div>
              <p className='mt-4 mb-2 uppercase text-white'>
                {experience.title}
              </p>
              <p className='text-sm'>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
