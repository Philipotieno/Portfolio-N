import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NavItem from './NavItem';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>('');
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/') setActiveItem('About');
    if (pathname === '/projects') setActiveItem('Projects');
    if (pathname === '/resume') setActiveItem('Resume');
  }, []);
  return (
    <div>
      <span className="font-bold text-green">{activeItem}</span>
      <div className="flex space-x-3 text-red-400 font-lg">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name={'About'}
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name={'Projects'}
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name={'Resume'}
          route="/resume"
        />
      </div>
    </div>
  );
};

export default Navbar;
