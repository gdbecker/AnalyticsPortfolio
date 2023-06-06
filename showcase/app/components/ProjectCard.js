import React from 'react'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa';

function ProjectCard({ img_bg, title, demo_url, code_url, type }) {

  function getOutlineClass(type) {
    if (type == 'pbi') {
      return "flex w-full h-full flex-col rounded-md overflow-hidden bg-white shadow-lightYellow shadow-[0_0px_4px]";
    } else if (type == 'python') {
      return "flex w-full h-full flex-col rounded-md overflow-hidden bg-white shadow-lightBlue shadow-[0_0px_4px]";
    }
  }

  function getLabel(type) {
    if (type == 'pbi') {
      return (
        <p className="px-2 h-full text-mediumYellow min-w-max ml-2 ring-mediumYellow ring-2 rounded-sm font-interBold text-sm overflow-hidden lg:text-[0.75rem]">POWER BI</p>
      );
    } else if (type == 'python') {
      return (
        <p className="px-2 h-full text-lightBlue min-w-max ml-2 ring-lightBlue ring-2 rounded-sm font-interBold text-sm overflow-hidden lg:text-[0.75rem]">PYTHON</p>
      );
    }
  }

  function getShadowClass(type) {
    if (type == 'pbi') {
      return "link-shadow-pbi";
    } else if (type == 'python') {
      return "link-shadow-python";
    }
  }

  function getHoverClass(type) {
    if (type == 'pbi') {
      return "project-link text-lg hover:text-mediumYellow";
    } else if (type == 'python') {
      return "project-link text-lg hover:text-lightBlue";
    }
  }

  return (
    <div className={getOutlineClass(type)}>
      <div className={`flex flex-row h-44 ${ img_bg }`}></div>
      <div className="px-6 py-3 text-gray">
        <div className="flex flex-row items-center justify-between">
          <Link 
            href={{
              pathname: `/${title}` ,
              query: {
                demo_url: `${demo_url}`,
                title: `${title}`,
              }
            }}
            className="py-2 text-xl font-interBold relative no-underline lg:text-md"><span className={getShadowClass(type)}>{title}</span></Link>
        </div>
        <div className="flex flex-row items-center justify-between py-3 font-interRegular text-md lg:text-sm">
          <Link href={code_url} target="_blank" className={getHoverClass(type)}><FaGithub /></Link>
          {getLabel(type)}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;