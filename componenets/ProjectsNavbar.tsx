import { FunctionComponent } from 'react';
import { Category } from '../type';

export const NavItem: FunctionComponent<{
  value: Category | 'all';
  handleFilterCategory: Function;
}> = ({ value, handleFilterCategory }) => {
  return (
    <li
      className="capitalize cursor-pointer hover:text-green"
      onClick={() => handleFilterCategory(value)}
    >
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{ handleFilterCategory: Function }> = (
  props
) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="node" {...props} />
      <NavItem value="postgres" {...props} />
      <NavItem value="express" {...props} />
      <NavItem value="django" {...props} />
    </div>
  );
};

export default ProjectsNavbar;
