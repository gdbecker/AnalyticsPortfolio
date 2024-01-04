import React from 'react'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa';
import styles from '../styles/dynamicStyles';

function ProjectCard({ index, id, img, title, code_url, type }) {

  function getCSS(category, type) {
    return styles[category][type];
  }

  function getLabel(type) {
    return (
      <p className={`px-2 h-full w-fit my-1 ${getCSS('label', type)} ring-2 rounded-sm font-interBold text-sm overflow-hidden lg:text-[0.75rem]`}>{type.toUpperCase()}</p>
    );
  }

  return (
    <div className={`flex w-full flex-col rounded-md overflow-hidden bg-white ${getCSS('outline', type.split(",")[0])} shadow-[0_0px_4px]`} x-intersect="$el.classList.add('flip-in-ver-left')">
      <div 
        className={"flex flex-row h-44 bg-top bg-no-repeat bg-cover"}
        style={{
          backgroundImage: `url(${ img }.jpg)`
        }}
      >
      </div>
      <div className="flex-auto grid grid-cols-1 px-5 py-3 pb-1 text-gray">
        <div className="flex-row">
          <Link 
            href={{
              pathname: `/${id}`
            }}
            className="flex py-2 text-xl font-interBold relative no-underline lg:text-md"><span className={`link-shadow-${type.split(",")[0].replace(" ","")}`}>{title}</span></Link>
        </div>
        <div className="grid grid-cols-2 items-end justify-between w-full py-3 font-interRegular text-md lg:text-sm">
          <Link href={code_url} target="_blank" className={`flex flex-row project-link text-lg ${getCSS('hover', type.split(",")[0])}`}><FaGithub /> <p className="text-sm pl-2">Learn More</p></Link>
          <div className="flex flex-col items-end justify-end">
            <div className="flex flex-col items-end">
              {type.split(",").map((t) => getLabel(t))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;