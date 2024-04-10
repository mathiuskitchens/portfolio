import Lottie from "lottie-react";
import animationData from "../assets/contact-animation.json";

const Contact = () => {
  <script
    src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs"
    type="module"
  ></script>;

  return (
    <>
      <h1 className="text-3xl text-center my-4">Contact Me</h1>
      <div className="center w-1/2 mx-auto border rounded-xl m-4 border-none">
        <Lottie animationData={animationData} />
      </div>
      <div className="flex gap-2 justify-center">
        <a
          className="btn btn-primary text-xl md:text-2xl"
          href="mailto:mathiuskitchens@gmail.com"
          target="_blank"
        >
          Email
        </a>
        <a
          className="btn btn-primary text-xl md:text-2xl"
          href="https://www.linkedin.com/in/mathiuskitchens/"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </>
  );
};

export default Contact;
