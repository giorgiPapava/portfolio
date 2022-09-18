import React from 'react';
import { GoBriefcase } from 'react-icons/go';
import { EXPERIENCE } from './helpers';

const Experience = () => {
  return (
    <section>
      <h4 className='my-12 text-center text-lg font-semibold uppercase text-white sm:text-2xl'>
        Experience
      </h4>
      <div className='flex flex-wrap justify-between gap-y-12'>
        {EXPERIENCE.map((experience) => (
          <div
            key={experience.id}
            className='relative flex gap-4 after:absolute
            after:bottom-0 after:left-[18px] after:h-4/6 after:border after:border-solid after:border-zinc-700 xl:w-1/2'
          >
            <div className='z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white'>
              <GoBriefcase />
            </div>
            <div className='flex-1'>
              <div className='badge bg-stone-700 py-2 text-xs text-white sm:text-base'>
                {experience.date}
              </div>
              <p className='mt-4 mb-2 text-sm uppercase text-white sm:text-base'>
                {experience.title}
              </p>
              <p className='text-xs sm:text-sm'>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
