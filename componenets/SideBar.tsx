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
      <h3 className="my-4 text-3xl font-medium tracking-wider">
        <span>Philip</span>
        Otieno
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">
        Software Engineer
      </p>
      <a
        className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-center justify-center"
        href=""
        download="name"
      >
        <GiTie className="w-6, h-6" /> Download Resume
      </a>
      {/* Social Icons */}
      <div className="flex justify-around w-9/2 my-5 text-green-500 md:w-full mx-auto">
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      {/* Addresss */}
      <div>
        <div>
          <GoLocation />
          <span>Nairobi, Kenya</span>
        </div>
        <p>iamphilipotieno@gmail.com</p>
      </div>
      {/* Email Button */}
      <button>Email Me</button>
      <button>Toggle Theme</button>
    </div>
  );
};

export default SideBar;
