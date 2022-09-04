import HomeInfo from './pages/home/HomeInfo';
import ProfilePicture from './pages/home/ProfilePicture';
import YellowShape from './pages/home/YellowShape';

const App = () => {
  return (
    <div className='relative min-h-screen w-full overflow-hidden bg-zinc-900'>
      <YellowShape />
      <div className='flex min-h-screen items-center'>
        <ProfilePicture />
        <HomeInfo />
      </div>
    </div>
  );
};

export default App;
