import HomeInfo from './HomeInfo';
import ProfilePicture from './ProfilePicture';
import YellowShape from './YellowShape';

const HomePage = () => {
  return (
    <div className='relative w-full overflow-hidden'>
      <YellowShape />
      <div className='flex min-h-screen items-center'>
        <ProfilePicture />
        <HomeInfo />
      </div>
    </div>
  );
};

export default HomePage;
