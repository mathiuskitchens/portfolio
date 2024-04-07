const Hero = () => {
  const scrollOnePage = () => {
    const pageHeight = window.innerHeight; // Get the viewport height
    window.scrollBy({ top: pageHeight, behavior: "smooth" }); // Scroll down by one page height with smooth animation
  };

  return (
    <div className="hero h-screen bg-base-200 relative">
      <div className="absolute top-4  md:flex md:absolute md:top-20 md:left-20">
        <img
          src="https://media.licdn.com/dms/image/sync/C5627AQF0-Fyk63b25w/articleshare-shrink_480/0/1711606135529?e=1712973600&v=beta&t=k8eRO5JA-P6GoAymX9L1_8gr3Hdz50TB0VMazX2VZAQ"
          className="mask mask-squircle max-w-sm rounded-lg shadow-2xl grayscale transition duration-500 ease-in-out hover:grayscale-0 w-40 md:w-96 my-14 mx-2"
          alt="Image of Matthew Kitchens"
        />

        <div className="my-auto">
          <h1 className="text-5xl font-bold px-6">I'm Matt</h1>
          <div className="divider px-6"></div>
          <h2 className="text-3xl font-bold px-6">Developer</h2>
        </div>
      </div>
      <button
        onClick={scrollOnePage}
        className="btn btn-primary absolute bottom-32 md:bottom-80 text-2xl"
      >
        Experience
      </button>
    </div>
  );
};

export default Hero;
