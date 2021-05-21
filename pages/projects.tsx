import { projects } from '../data';
import ProjectsCard from '../componenets/ProjectsCard';

const Projects = () => {
  return (
    <div className="p-4">
      <nav>Navbar</nav>
      <div className="grid grid-cols-12 gap-4 my-3">
        {projects.map((project) => (
          <div className="col-span-12 sm:col-span-6 lg:col-span-4">
            <ProjectsCard project={project} key={project.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
