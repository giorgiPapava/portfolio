import { Link } from 'react-router-dom';

const HomeInfo = () => {
  return (
    <div className='text-center lg:ml-[33.3333%] lg:text-left'>
      <div className='mx-auto max-w-lg'>
        <h1
          className='relative font-poppins text-3xl font-bold uppercase text-primary sm:text-4xl
          xl:pl-16 xl:text-5xl xl:leading-[62px] xl:before:absolute xl:before:-left-0 xl:before:top-7 xl:before:h-1 xl:before:w-10 xl:before:bg-primary xl:before:content-[""]'
        >
          Giorgi Papava
          <span className='block font-poppins text-white'>
            React.js Developer
          </span>
        </h1>
        <p className='my-6 mt-4 text-xs text-white sm:text-sm sm:leading-7'>
          I'm a self-taught React.js developer with a passion for learning new
          technologies. I have a strong background in web development and I'm
          always looking for new challenges. I'm always targeting to write clean
          and maintainable code.
        </p>
        <Link to='/about'>
          <button className='btn-arrow btn'>
            <span className='z-10'>More about me</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeInfo;
