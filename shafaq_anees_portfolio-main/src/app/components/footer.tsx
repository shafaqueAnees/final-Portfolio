import React from 'react'
import { BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs'
import Image from 'next/image'
import apple from '../../../public/assests/picture/apple-logo.svg'
const Footer = () => {
  return (
    <div className='bg-blue-100'><footer className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
           <Image src={apple} width={40} alt="" />
         
        
            {/* <span className="ml-3 text-xl">Educational Tutorial</span> */}
          </a>
        <span className="ml-3 text-xl">Educational Tutorial</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024  —
Eductaional Tutorial  <a href="https://twitter.com/knyttneve" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@ copyright by shafaq</a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a 
        className="text-gray-500" target="_blank" href='https://www.youtube.com/@educationalandcookingtutorial'>
   <BsYoutube className='text-2xl ml-5 hover:text-[red]'/>
        </a>
     
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a 
        className="text-gray-500" target="_blank" href='https://github.com/shafaqueAnees?tab=repositories'>
   <BsGithub className='text-2xl ml-5 hover:text-[purple]'/>
        </a>
     
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a 
        className="text-gray-500" target="_blank" href='https://www.linkedin.com/in/shafaq-anees-65490011b/'>
   <BsLinkedin  className='text-2xl ml-5 hover:text-[blue]'/>
        </a>
      </span>
      </span>
      </span>
    </div>
  </footer></div>
  )
}

export default Footer