import { FunctionComponent } from 'react';
import { IProject } from '../type';

const ProjectsCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: {
    name,
    category,
    image_path,
    github_url,
    deployed_url,
    key_techs,
    description,
  },
}) => {
  return (
    <div>
      <img src={image_path} alt={name} className="cursor-pointer" />
      <p>{name}</p>
    </div>
  );
};

export default ProjectsCard;
