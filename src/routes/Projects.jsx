import ProjectCard from "../components/ProjectCard";
import TasteAndSee from "../assets/TasteAndSee.png";
import Pokedex from "../assets/Pokedex.png";
import JavaScripture from "../assets/JavaScripture.png";
import Hs1 from "../assets/Hs-1.png";

const Projects = () => {
  const myProjects = [
    {
      id: 1,
      title: "Taste and See",
      description: "A personal website for a fitness and health coach",
      image: TasteAndSee,
      link: "https://tasteandsee.netlify.app",
      github: "https://github.com/mathiuskitchens/Inspired-Health-2.0",
      techStack: ["HTML", "CSS", "Bootstrap", "Parcel"],
    },
    {
      id: 2,
      title: "Pokedex",
      description: "A Pokedex app built using Vanilla JavaScript",
      image: Pokedex,
      link: "https://mkitchens-pokedex.netlify.app/",
      github: "https://github.com/mathiuskitchens/vanilla-pokedex",
      techStack: ["HTML", "CSS", "JavaScript", "Parcel"],
    },
    {
      id: 3,
      title: "JavaScripture",
      description:
        "A fun Bible webapp that translates verses into funny character translations",
      image: JavaScripture,
      link: "https://javascripture.netlify.app/",
      github: "https://github.com/mathiuskitchens/javascripture",
      techStack: ["React", "MaterialUI", "OpenAI API"],
    },
    {
      id: 4,
      title: "Hearthstone Deck Builder",
      description:
        "A full-stack app that allows users to build and save Hearthstone decks",
      image: Hs1,
      link: "https://hs-deck-manager.netlify.app/",
      github: "https://github.com/mathiuskitchens/Hearthstone",
      techStack: [
        "React",
        "DaisyUI",
        "TailwindCSS",
        "NodeJS",
        "Express",
        "MongoDB",
      ],
    },
  ];

  return (
    <>
      <h1 className="text-4xl font-bold text-center my-8">Projects</h1>
      <div className="md:w-1/2 mx-auto">
        {myProjects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </>
  );
};

export default Projects;
