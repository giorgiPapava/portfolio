import HomeInfo from './HomeInfo';
import ProfilePicture from './ProfilePicture';
import YellowShape from './YellowShape';

const HomePage = () => {
  return (
    <div className='relative w-full overflow-hidden'>
      <YellowShape />
      <div className='flex min-h-screen flex-col items-center justify-center gap-6 lg:flex-row lg:gap-0'>
        <ProfilePicture />
        <HomeInfo />
      </div>
    </div>
  );
};

export default HomePage;
