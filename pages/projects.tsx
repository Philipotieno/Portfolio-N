import { projects as projectsData } from '../data';
import ProjectsCard from '../componenets/ProjectsCard';
import ProjectsNavbar from '../componenets/ProjectsNavbar';
import { useState } from 'react';
import { Category } from '../type';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../animations';

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
      <motion.div
        className="relative grid grid-cols-12 gap-4 my-3 "
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projects.map((project) => (
          <motion.div
            className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
            variants={fadeInUp}
            key={project.name}
          >
            <ProjectsCard project={project} key={project.name} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
