"use client";
import React from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import logo2 from "../../../public/assests/picture/logo2.jpg";

const Hero = () => {
  return (
    <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image relative">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative z-10">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl font-semibold text-white mb-6">
            Hey! I am Shafaq Anees
            <br className="hidden lg:inline-block" />
            <div className="inline-block">
              <Typewriter
                options={{
                  strings: ["Web Development", "Graphic Designer", "Economist"],
                  autoStart: true,
                  loop: true,
                  delay: 80,
                }}
              />
            </div>
          </h1>
          <div className="w-16 h-1 bg-indigo-600 mb-6"></div>
          <p className="mb-8 leading-relaxed text-lg text-white">
            I am a passionate web developer with expertise in building
            responsive, user-friendly websites and web applications. Specializing
            in front-end and back-end technologies, I create scalable and efficient
            solutions using modern frameworks like React, Next.js, Node.js, and more.
            My goal is to deliver high-quality, accessible web experiences that meet
            the needs of clients and users alike. With a strong focus on clean code,
            performance optimization, and intuitive UI/UX design, I strive to build
            web solutions that drive results.
          </p>
          <div className="flex justify-center">
            <a href="#contact">
              <button className="inline-flex text-white bg-indigo-600 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-700 rounded-lg shadow-md text-lg transition duration-300 ease-in-out transform hover:scale-105">
                Contact
              </button>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-12 md:mt-0">
          <Image
            className="object-cover object-center rounded-lg shadow-xl transform transition-all hover:scale-105"
            width={400}
            height={400}
            alt="hero"
            src={"/assests/picture/dp0.jpg"}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
