import { projects as projectsData } from '../data';
import ProjectsCard from '../componenets/ProjectsCard';
import ProjectsNavbar from '../componenets/ProjectsNavbar';
import { useState } from 'react';
import { Category } from '../type';

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState('all');

  const handleFilterCategory = (category: Category | 'all') => {
    if (category === 'all') {
      setProjects(projectsData);
      setActive(category);
      return;
    }
    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };
  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{ height: '65vh' }}>
      <ProjectsNavbar
        handleFilterCategory={handleFilterCategory}
        active={active}
      />
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
