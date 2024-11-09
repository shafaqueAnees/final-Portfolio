"use client"
import React from 'react'
import Image from 'next/image'
import max from '../../../public/assests/project/maxresdefault.jpg'
import sc from '../../../public/assests/project/shopping-cart.png'
import max2 from '../../../public/assests/project/maxresdefault.jpg'
import jg7 from '../../../public/assests/project/jg7hwe30paoeu6l15a6z.png'
import pd1 from '../../../public/assests/project/javascript-project-idea-1.png'

const Project = () => {
  return (
    <div id='projects'>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">My Projects</h1>
    
    </div>
    <div className="flex flex-wrap -m-8">
        {/* project */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
           alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={max}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">Creating Project</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Todo List</h1>

            <p className="leading-relaxed line-clamp-2">Creating todo list by using js. its ediitable and deleteable</p>
            <a href="https://basic-react-tvw7.vercel.app/">
            <p className="leading-relaxed text-blue-500 hover:underline">View Project..</p></a>
          
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
           alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={pd1}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">Creating Project</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">stop  watch / timer</h1>

            <p className="leading-relaxed line-clamp-2">Creating a timer but not deploy</p>
            <a href="https://home-work-q2-wy88.vercel.app/">
            <p className="leading-relaxed text-blue-500 hover:underline">View Project..</p></a>
          
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
           alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={sc}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">Creating Project</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Todo List</h1>

            <p className="leading-relaxed line-clamp-2">Creating todo list by using js. its ediitable and deleteable Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, assumenda iusto magnam nulla repellat deserunt pariatur delectus beatae asperiores perferendis doloribus, officiis sunt reprehenderit nostrum rerum blanditiis ea possimus nisi!</p>
            <a target='_blank' href="https://basic-react-tvw7.vercel.app/">
            <p className="leading-relaxed text-blue-500 hover:underline">View Project..</p></a>
          
          </div>

          
        </div>
      </div>
    

      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
           alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={sc}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">Creating Project</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Resume</h1>

            <p className="leading-relaxed line-clamp-2">Creating todo list by using js. its ediitable and deleteable Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, assumenda iusto magnam nulla repellat deserunt pariatur delectus beatae asperiores perferendis doloribus, officiis sunt reprehenderit nostrum rerum blanditiis ea possimus nisi!</p>
            <a target='_blank' href="https://milestaone-05-shafaq.vercel.app/">
            <p className="leading-relaxed text-blue-500 hover:underline">View Project..</p></a>
          
          </div>

          
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
           alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={max2}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">Creating Project</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Todo List</h1>

            <p className="leading-relaxed line-clamp-2">Creating todo list by using js. its ediitable and deleteable Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, assumenda iusto magnam nulla repellat deserunt pariatur delectus beatae asperiores perferendis doloribus, officiis sunt reprehenderit nostrum rerum blanditiis ea possimus nisi!</p>
            <a target='_blank' href="https://basic-react-tvw7.vercel.app/">
            <p className="leading-relaxed text-blue-500 hover:underline">View Project..</p></a>
          
          </div>

          
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
           alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={jg7}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">Creating Project</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Todo List</h1>

            <p className="leading-relaxed line-clamp-2">Creating todo list by using js. its ediitable and deleteable Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, assumenda iusto magnam nulla repellat deserunt pariatur delectus beatae asperiores perferendis doloribus, officiis sunt reprehenderit nostrum rerum blanditiis ea possimus nisi!</p>
            <a target='_blank' href="https://basic-react-tvw7.vercel.app/">
            <p className="leading-relaxed text-blue-500 hover:underline">View Project..</p></a>
          
          </div>

          
        </div>
      </div>
    </div>

    
    
  </div>
</section>
    </div>
  )
}

export default Project