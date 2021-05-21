import { projects } from '../data';
import ProjectsCard from '../componenets/ProjectsCard';
import ProjectsNavbar from '../componenets/ProjectsNavbar';

const Projects = () => {
  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: '65vh' }}>
      <ProjectsNavbar />
      <div className="relative grid grid-cols-12 gap-4 my-3 bg-gray-200 rounded-lg dark:bg-dark-200">
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
