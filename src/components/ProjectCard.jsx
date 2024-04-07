const ProjectCard = ({ project }) => {
  return (
    <div className="card w-11/12 bg-base-100 shadow-xl pb-6 border mx-auto my-4">
      <figure>
        <img
          className="grayscale transition duration-500 ease-in-out hover:grayscale-0"
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
            Github
          </a>

          <a
            className="btn-primary btn w-1/3 mx-2"
            href={project.link}
            target="_blank"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
