const ProfilePicture = () => {
  return (
    <div
      className={`h-72 w-72 rounded-full border-4 border-solid border-zinc-700 bg-profile-picture-small bg-top shadow-[0_0_7px_rgba(0,0,0,.9)] 
      lg:absolute lg:left-10 lg:top-10 lg:h-[calc(100vh-80px)] lg:w-1/3 lg:rounded-3xl lg:border-none lg:bg-profile-picture lg:bg-center`}
    ></div>
  );
};

export default ProfilePicture;
