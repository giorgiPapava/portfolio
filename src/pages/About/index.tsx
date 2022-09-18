import Experience from './Experience';
import PersonalInfo from './PersonalInfo';
import Stack from './Stack';

const HR = () => (
  <hr className='mx-auto my-10 max-w-[40%] border border-solid border-zinc-700 sm:my-20' />
);

const AboutPage = () => {
  return (
    <div className='mx-auto max-w-xl pb-16 lg:max-w-3xl xl:max-w-5xl'>
      <h2 className='py-12 text-center font-poppins text-4xl font-bold uppercase tracking-tight text-white sm:py-20 sm:text-6xl'>
        About <span className='font-poppins text-primary'>Me</span>
      </h2>
      <PersonalInfo />
      <HR />
      <Stack />
      <HR />
      <Experience />
    </div>
  );
};

export default AboutPage;
