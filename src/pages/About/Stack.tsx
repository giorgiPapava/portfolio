import { STACK } from './helpers';

const Stack = () => {
  return (
    <>
      <p className='mb-12 text-center text-lg font-semibold uppercase text-white sm:text-2xl'>
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
              className='h-12 sm:h-16'
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Stack;
