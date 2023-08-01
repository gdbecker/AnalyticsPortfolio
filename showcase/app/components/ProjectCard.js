import React from 'react'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa';

function ProjectCard({ index, id, img_bg, title, demo_url, code_url, type }) {

  function getOutlineClass(type) {
    if (type == 'Power BI') {
      return "shadow-lightYellow";
    } else if (type == 'Python') {
      return "shadow-lightBlue";
    } else if (type == 'Machine Learning') {
      return "shadow-purple";
    }
  }

  function getLabel(type) {
    if (type == 'Power BI') {
      return (
        <p className="px-2 h-full text-mediumYellow w-fit my-1 ring-mediumYellow ring-2 rounded-sm font-interBold text-sm overflow-hidden lg:text-[0.75rem]">POWER BI</p>
      );
    } else if (type == 'Python') {
      return (
        <p className="px-2 h-full text-lightBlue min-w-max my-1 ring-lightBlue ring-2 rounded-sm font-interBold text-sm overflow-hidden lg:text-[0.75rem]">PYTHON</p>
      );
    } else if (type == 'Machine Learning') {
      return (
      // <div className="flex flex-col items-end">
        // <p className="px-2 h-full text-lightBlue max-w-fit my-1 ring-lightBlue ring-2 rounded-sm font-interBold text-sm overflow-hidden lg:text-[0.75rem]">PYTHON</p>
        <p className="px-2 h-full text-purple min-w-max my-1 ring-purple ring-2 rounded-sm font-interBold text-sm overflow-hidden lg:text-[0.75rem]">MACHINE LEARNING</p>
      // </div>
      );
    }
  }

  function getShadowClass(type) {
    if (type == 'Power BI') {
      return "link-shadow-pbi";
    } else if (type == 'Python') {
      return "link-shadow-python";
    } else if (type == 'Machine Learning') {
      return "link-shadow-ml";
    }
  } 

  function getHoverClass(type) {
    if (type == 'Power BI') {
      return "hover:text-mediumYellow";
    } else if (type == 'Python') {
      return "hover:text-lightBlue";
    } else if (type == 'Machine Learning') {
      return "hover:text-purple";
    }
  }

  return (
    <div className={`flex w-full flex-col rounded-md overflow-hidden bg-white ${ getOutlineClass(type) } shadow-[0_0px_4px]`}>
      <div className={`flex flex-row h-44 ${ img_bg }`}></div>
      <div className="flex-auto grid grid-cols-1 px-5 py-3 pb-1 text-gray">
        <div className="flex-row">
          <Link 
            // href={{
            //   pathname: `/${title}` ,
            //   query: {
            //     demo_url: `${demo_url}`,
            //     title: `${title}`,
            //     code_url: `${code_url}`,
            //     type: `${type}`,
            //   }
            // }}
            href={{
              pathname: `/${id}`
            }}
            className="flex py-2 text-xl font-interBold relative no-underline lg:text-md"><span className={getShadowClass(type.split(",")[0])}>{title}</span></Link>
        </div>
        <div className="grid grid-cols-2 items-end justify-between w-full py-3 font-interRegular text-md lg:text-sm">
          <Link href={code_url} target="_blank" className={`flex flex-row project-link text-lg ${ getHoverClass(type.split(",")[0]) }`}><FaGithub /> <p className="text-sm pl-2">Learn More</p></Link>
          {/* <div className="flex flex-col items-end justify-end">
            {getLabel(type)}
          </div> */}
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