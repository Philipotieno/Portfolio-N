import { useEffect, useState } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

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
        {activeItem !== 'About' && (
          <Link href="/">
            <a>
              <span onClick={() => setActiveItem('About')}>About</span>
            </a>
          </Link>
        )}
        {activeItem !== 'Projects' && (
          <Link href="/projects">
            <a>
              <span onClick={() => setActiveItem('Projects')}>Projects</span>
            </a>
          </Link>
        )}
        {activeItem !== 'Resume' && (
          <Link href="/resume">
            <a>
              <span onClick={() => setActiveItem('Resume')}>Resume</span>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
