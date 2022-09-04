const ProfilePicture = () => {
  return (
    <div
      className={`absolute left-10 top-10 h-[calc(100vh-80px)] w-1/3
     rounded-3xl bg-[url('/profile_image.jpeg')]
      bg-cover shadow-[0_0_7px_rgba(0,0,0,.9)]`}
    ></div>
  );
};

export default ProfilePicture;
