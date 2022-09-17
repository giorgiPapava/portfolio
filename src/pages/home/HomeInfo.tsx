import { Link } from 'react-router-dom';

const HomeInfo = () => {
  return (
    <div className='ml-[33.3333%] w-full'>
      <div className='mx-auto max-w-lg'>
        <h1
          className='relative pl-16 font-poppins text-5xl font-bold uppercase leading-[62px] text-yellow-500
       before:absolute before:-left-0 before:top-7 before:h-1 before:w-10 before:bg-yellow-500 before:content-[""]'
        >
          Giorgi Papava
          <span className='block font-poppins text-white'>
            React.js Developer
          </span>
        </h1>
        <p className='my-6 mt-4 text-sm leading-7 text-white'>
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
