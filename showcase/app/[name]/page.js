import React from 'react';
import { IoChevronBack } from 'react-icons/io5';

 function ProjectPage({ searchParams }) {

  function getHoverClass(type) {
    if (type == 'pbi') {
      return "flex flex-row hover:text-mediumYellow";
    } else if (type == 'python') {
      return "flex flex-row hover:text-lightBlue";
    } else if (type == 'ml') {
      return "flex flex-row hover:text-purple";
    }
  }

  function getShadowClass(type) {
    if (type == 'pbi') {
      return "flex w-full min-h-screen rounded-md shadow-lightYellow shadow-[0_0px_2px]";
    } else if (type == 'python') {
      return "flex w-full min-h-screen rounded-md shadow-lightBlue shadow-[0_0px_2px]";
    } else if (type == 'ml') {
      return "flex w-full min-h-screen rounded-md shadow-purple shadow-[0_0px_2px]";
    }
  }

  return (
    <main className="flex flex-col w-full min-h-screen p-10 justify-center bg-gray">
      <div className="grid grid-cols-2 pb-3 items-end justify-between text-white text-lg font-interRegular">
        <a href="/" className={getHoverClass(searchParams.type)}><span className="pt-1 pr-2"><IoChevronBack /></span> Back</a>
        <h1 className="font-interBold text-right">{searchParams.title}</h1>
      </div>
      <iframe 
        src={searchParams.demo_url}
        height="800" 
        frameborder="0" 
        scrolling="auto" 
        title="Project Demo"
        className={getShadowClass(searchParams.type)}>
      </iframe>
    </main>
  )
}

export default ProjectPage;