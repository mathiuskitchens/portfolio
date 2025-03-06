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
      className="relative hero bg-base-200"
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <div className="absolute top-20 md:top-0 md:left-0 md:relative min-h-124">
        <img
          src={Kitchens}
          className="w-40 max-w-sm mx-auto my-8 -mt-6 transition duration-500 ease-in-out rounded-lg shadow-2xl mask mask-squircle grayscale hover:grayscale-0 md:w-96 center "
          alt="Image of Matthew Kitchens"
        />

        <div className="mx-auto my-auto text-center">
          <h1 className="px-6 text-5xl font-bold">I'm Matt</h1>
          <div className="w-3/4 px-6 mx-auto divider md:w-1/2"></div>

          <div className="mx-8 my-4 text-xl">
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
                  .pasteString(" donuts, building and helping others")
                  .start();
              }}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/Contact" className="mt-12 text-2xl btn btn-primary">
            Hire Me
          </Link>
        </div>
        <BouncingArrow />
      </div>
    </div>
    
  );
};

export default Hero;
