import React from 'react'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa';

function ProjectCard({ img_bg, title, demo_url, code_url, type }) {

  function getOutlineClass(type) {
    if (type == 'pbi') {
      return "flex w-full max-h-fit flex-col rounded-md overflow-hidden bg-white shadow-lightYellow shadow-[0_0px_4px]";
    } else if (type == 'python') {
      return "flex w-full max-h-fit flex-col rounded-md overflow-hidden bg-white shadow-lightBlue shadow-[0_0px_4px]";
    } else if (type == 'ml') {
      return "flex w-full max-h-fit flex-col rounded-md overflow-hidden bg-white shadow-purple shadow-[0_0px_4px]";
    }
  }

  function getLabel(type) {
    if (type == 'pbi') {
      return (
        <p className="px-2 h-full text-mediumYellow w-fit my-1 ring-mediumYellow ring-2 rounded-sm font-interBold text-sm overflow-hidden lg:text-[0.75rem]">POWER BI</p>
      );
    } else if (type == 'python') {
      return (
        <p className="px-2 h-full text-lightBlue min-w-max my-1 ring-lightBlue ring-2 rounded-sm font-interBold text-sm overflow-hidden lg:text-[0.75rem]">PYTHON</p>
      );
    } else if (type == 'ml') {
      return (
      <div className="flex flex-col items-end">
        <p className="px-2 h-full text-lightBlue max-w-fit my-1 ring-lightBlue ring-2 rounded-sm font-interBold text-sm overflow-hidden lg:text-[0.75rem]">PYTHON</p>
        <p className="px-2 h-full text-purple min-w-max my-1 ring-purple ring-2 rounded-sm font-interBold text-sm overflow-hidden lg:text-[0.75rem]">MACHINE LEARNING</p>
      </div>
      );
    }
  }

  function getShadowClass(type) {
    if (type == 'pbi') {
      return "link-shadow-pbi";
    } else if (type == 'python') {
      return "link-shadow-python";
    } else if (type == 'ml') {
      return "link-shadow-ml";
    }
  } 

  function getHoverClass(type) {
    if (type == 'pbi') {
      return "flex flex-row project-link text-lg hover:text-mediumYellow";
    } else if (type == 'python') {
      return "flex flex-row project-link text-lg hover:text-lightBlue";
    } else if (type == 'ml') {
      return "flex flex-row project-link text-lg hover:text-purple";
    }
  }

  return (
    <div className={getOutlineClass(type)}>
      <div className={`flex flex-row h-44 ${ img_bg }`}></div>
      <div className="px-5 py-3 pb-1 text-gray">
        <div className="flex flex-row items-center justify-between">
          <Link 
            href={{
              pathname: `/${title}` ,
              query: {
                demo_url: `${demo_url}`,
                title: `${title}`,
                code_url: `${code_url}`,
                type: `${type}`,
              }
            }}
            className="py-2 text-xl font-interBold relative no-underline lg:text-md"><span className={getShadowClass(type)}>{title}</span></Link>
        </div>
        <div className="grid grid-cols-2 items-center justify-between py-3 font-interRegular text-md lg:text-sm">
          <Link href={code_url} target="_blank" className={getHoverClass(type)}><FaGithub /> <p className="text-sm pl-2">Learn More</p></Link>
          <div className="flex flex-col items-end justify-end">
            {getLabel(type)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;