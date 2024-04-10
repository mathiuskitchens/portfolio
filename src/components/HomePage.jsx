import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

const HomePage = () => {
  return (
    <div
      className="hero bg-base-200 relative "
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <div className="absolute top-14 md:top-0 md:left-0 md:relative min-h-96">
        <img
          src="https://media.licdn.com/dms/image/sync/C5627AQF0-Fyk63b25w/articleshare-shrink_480/0/1711606135529?e=1712973600&v=beta&t=k8eRO5JA-P6GoAymX9L1_8gr3Hdz50TB0VMazX2VZAQ"
          className="mask mask-squircle max-w-sm rounded-lg shadow-2xl grayscale transition duration-500 ease-in-out hover:grayscale-0 w-40 md:w-96 my-8 center mx-auto -mt-6 "
          alt="Image of Matthew Kitchens"
        />

        <div className="my-auto mx-auto text-center">
          <h1 className="text-5xl font-bold px-6">I'm Matt</h1>
          <div className="text-3xl divider px-6 w-3/4 md:w-1/2 mx-auto"></div>
          <div className="text-2xl">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Developer")
                  .pauseFor(500)
                  .deleteChars(10)
                  .typeString("Father")
                  .pauseFor(500)
                  .deleteChars(6)
                  .typeString("Husband")
                  .pauseFor(500)
                  .deleteChars(7)
                  .pasteString("Developer, Father, Husband")
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
      </div>
    </div>
  );
};

export default HomePage;
