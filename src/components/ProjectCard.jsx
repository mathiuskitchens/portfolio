import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.3,
        type: "spring",
      }}
      className="card w-11/12 bg-base-100 shadow-xl pb-6 border mx-auto my-24 opacity-80 hover:opacity-100 hover:shadow-2xl transition duration-500 ease-in-out"
    >
      <figure>
        {project.status === "In Progress" && (
          <div className="absolute w-full text-center bg-base-300 z-40 text-lg p-2">
            In Progress
          </div>
        )}
        <img
          className=" saturate-50 transition duration-500 ease-in-out hover:saturate-100"
          src={project.image}
          alt={project.description}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{project.title}</h2>
        <p>{project.description}</p>
        <div className="card-actions justify-end">
          {project.techStack.map((tech) => (
            <div className="badge badge-outline" key={tech}>
              {tech}
            </div>
          ))}
        </div>
        <div className="flex w-full mt-4 -mb-4 justify-start">
          <a
            className="btn-primary btn mx-2 w-1/3"
            href={project.github}
            target="_blank"
          >
            View Source Code
          </a>

          <a
            className="btn-primary btn w-1/3 mx-2"
            href={project.link}
            target="_blank"
          >
            Open Live App
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
