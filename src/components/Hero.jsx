import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const scrollOnePage = () => {
    const pageHeight = window.innerHeight; // Get the viewport height
    window.scrollBy({ top: pageHeight, behavior: "smooth" }); // Scroll down by one page height with smooth animation
  };

  return (
    <div className="hero h-screen bg-base-200 relative">
      <div className="absolute top-2 md:flex md:absolute md:top-20 md:left-20 min-h-96">
        <img
          src="https://media.licdn.com/dms/image/sync/C5627AQF0-Fyk63b25w/articleshare-shrink_480/0/1711606135529?e=1712973600&v=beta&t=k8eRO5JA-P6GoAymX9L1_8gr3Hdz50TB0VMazX2VZAQ"
          className="mask mask-squircle max-w-sm rounded-lg shadow-2xl grayscale transition duration-500 ease-in-out hover:grayscale-0 w-40 md:w-96 my-8 center mx-auto"
          alt="Image of Matthew Kitchens"
        />

        <div className="my-auto mx-auto text-center">
          <h1 className="text-5xl font-bold px-6">I'm Matt</h1>
          <div className="divider px-6"></div>
          <h2 className="text-3xl font-bold px-6">A Developer</h2>
        </div>
      </div>
      <div className="typewriter text-xl mx-12 block mt-8 md:-mt-20">
        <Typewriter
          loop={true}
          onInit={(typewriter) => {
            typewriter
              .pauseFor(500)
              .typeString("I'm passionate about web development")
              .pauseFor(500)
              .deleteChars(15)
              .typeString("technology")
              .pauseFor(500)
              .deleteChars(10)
              .typeString("helping others")
              .pauseFor(1000)
              .deleteChars(15)
              .pasteString(" web development, technology and helping others")
              .start();
          }}
        />
      </div>
      <div>
        <Link to="/Contact" className="btn btn-primary mt-64 text-2xl">
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Hero;
