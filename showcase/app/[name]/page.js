import React from 'react';
import { IoChevronBack } from 'react-icons/io5';

 function ProjectPage({ searchParams }) {
  return (
    <main className="flex flex-col w-full min-h-screen p-10 justify-center bg-gray">
      <div className="grid grid-cols-2 pb-3 items-end justify-between text-white text-lg font-interRegular">
        <a href="/" className="flex flex-row hover:text-mediumYellow"><span className="pt-1 pr-2"><IoChevronBack /></span> Back</a>
        <h1 className="font-interBold text-right">{searchParams.title}</h1>
      </div>
      
      <iframe 
        title="Report Section" 
        width="600" 
        height="373.5" 
        src={searchParams.demo_url}
        frameborder="0" 
        allowFullScreen="true"
        className="flex w-full min-h-screen rounded-md shadow-lightYellow shadow-[0_0px_2px]">
      </iframe>
    </main>
  )
}

export default ProjectPage;