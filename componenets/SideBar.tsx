// import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GoLocation } from 'react-icons/go';
import { GiTie } from 'react-icons/gi';

const SideBar = () => {
  return (
    <div>
      <img
        src="https://philipotieno.github.io/photos/phill2.JPG"
        alt="Philip Otieno"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Philip</span>
        Otieno
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        Software Engineer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
        href=""
        download="name"
      >
        <GiTie className="w-6, h-6" /> Download Resume
      </a>
      {/* Social Icons */}
      <div className="flex justify-around mx-auto my-5 w-9/2 text-green md:w-full">
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* Addresss */}
      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Nairobi, Kenya</span>
        </div>
        <p className="my-2">iamphilipotieno@gmail.com</p>
      </div>
      {/* Email Button */}
      <button
        className="w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r focus:outline-none from-green to-blue-400"
        onClick={() => window.open('mailto:iamphilipotieno@gmail.com')}
      >
        Email Me
      </button>
      <button className="w-8/12 py-2 my-2 text-white rounded-full bg-gradient-to-r focus:outline-none from-green to-blue-400">
        Toggle Theme
      </button>
    </div>
  );
};

export default SideBar;
