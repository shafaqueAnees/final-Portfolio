'use client'; // Ensure this component is treated as a client component

import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Image from 'next/image';
import apple from '../../../public/assests/picture/apple-logo.svg';

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={"/assests/picture/logo1.jpeg"} width={100} height={30} alt="Apple Logo" />
            <span className="title-font sm:text-4xl text-3xl mb-0 font-medium text-gray-900">
              Educational Tutorial
            </span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a href="/" className="mr-5 hover:text-blue-600">Home</a>
            <a href="#about" className="mr-5 hover:text-blue-600">About</a>
            <a href="#skills" className="mr-5 hover:text-blue-600">Skills</a>
            <a href="#projects" className="mr-5 hover:text-blue-600">Projects</a>
            <a href="#contact" className="mr-5 hover:text-blue-600">Contact</a>
          </nav>

          {/* Link to the static CV PDF file */}
          <a
            href="/assests/picture/cv.pdf" // Replace this with the actual path to your CV file in the public folder
            download
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Download CV
            <FaCloudDownloadAlt className="text-xl ml-2" />
          </a>
          
        </div>
      </header>
    </div>
  );
};

export default Navbar;
