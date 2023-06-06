import React from 'react'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa';

function ProjectCard({ img_bg, title, demo_url, code_url }) {

  return (
    <div className="flex w-full h-full flex-col rounded-md overflow-hidden shadow-lightYellow shadow-[0_0px_2px]">
      <div className={`flex flex-row h-52 ${ img_bg }`}></div>
      <div className="px-6 py-3 text-white">
        <div className="flex flex-row items-center justify-between">
          <Link 
            href={{
              pathname: `/${title}` ,
              query: {
                demo_url: `${demo_url}`,
                title: `${title}`,
              }
            }}
            className="py-2 text-xl font-sourceSansProBold relative no-underline lg:text-md"><span className="link-shadow">{title}</span></Link>
        </div>
        <div className="flex flex-row items-center justify-between py-3 font-interRegular text-md lg:text-sm">
          <Link href={code_url} target="_blank" className="project-link italic mr-3 hover:text-lightYellow"><FaGithub /></Link>
          <p className="px-2 h-full text-lightYellow min-w-max ml-2 ring-lightYellow ring-2 rounded-sm font-interBold text-sm overflow-hidden lg:text-[0.75rem]">POWER BI</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;