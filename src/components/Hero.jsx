import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Kitchens from "../assets/Kitchens.jpeg";
import BouncingArrow from "../components/BouncingArrow";

const Hero = () => {
  const scrollOnePage = () => {
    const pageHeight = window.innerHeight; // Get the viewport height
    window.scrollBy({ top: pageHeight, behavior: "smooth" }); // Scroll down by one page height with smooth animation
  };

  return (
    <div
      className="hero bg-base-200 relative"
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <div className="absolute top-20 md:top-0 md:left-0 md:relative min-h-124">
        <img
          src={Kitchens}
          className="mask mask-squircle max-w-sm rounded-lg shadow-2xl grayscale transition duration-500 ease-in-out hover:grayscale-0 w-40 md:w-96 my-8 center mx-auto -mt-6 "
          alt="Image of Matthew Kitchens"
        />

        <div className="my-auto mx-auto text-center">
          <h1 className="text-5xl font-bold px-6">I'm Matt</h1>
          <div className="divider px-6 w-3/4 md:w-1/2 mx-auto"></div>

          <div className="text-xl mx-8 my-4">
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .pauseFor(500)
                  .typeString("I'm passionate about donuts")
                  .pauseFor(500)
                  .changeDeleteSpeed(5)
                  .deleteChars(6)
                  .typeString("building cool things")
                  .pauseFor(500)
                  .deleteChars(20)
                  .typeString("helping others")
                  .pauseFor(1000)
                  .deleteChars(15)
                  .pasteString(" donuts, bulding and helping others")
                  .start();
              }}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/Contact" className="btn btn-primary text-2xl mt-12">
            Hire Me
          </Link>
        </div>
        <BouncingArrow />
      </div>
    </div>
    
  );
};

export default Hero;
