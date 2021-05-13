import Link from 'next/link';
import { FunctionComponent } from 'react';

const NavItem: FunctionComponent<{
  activeItem: string;
  setActiveItem: Function;
  name: string;
  route: string;
}> = ({ activeItem, name, route, setActiveItem }) => {
  return (
    activeItem !== name && (
      <Link href={route}>
        <a>
          <span onClick={() => setActiveItem(name)}>{name}</span>
        </a>
      </Link>
    )
  );
};

export default NavItem;
