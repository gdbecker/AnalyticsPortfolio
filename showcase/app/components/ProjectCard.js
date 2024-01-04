import React from 'react'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa';

function ProjectCard({ index, id, img, title, code_url, type }) {

  function getLabelColor(type) {
    switch(type) {
      case 'Power-BI':
        return 'lightyellow';
      case 'Python':
        return 'lightBlue';
      case 'Machine-Learning':
        return 'purple';
      case 'Automation':
        return 'darkRed';
      default:
        return '';
    }
  }

  function getOutlineClass(type) {
    return `shadow-${getLabelColor(type)}`
    switch(type) {
      case 'PowerBI':
        return 'shadow-lightyellow';
      case 'Python':
        return 'shadow-lightBlue';
      case 'MachineLearning':
        return 'shadow-purple';
      case 'Automation':
        return 'shadow-darkRed';
      default:
        return '';
    }

    // if (type == "Power BI") {
    //   return "shadow-lightYellow";
    // } else if (type == "Python") {
    //   return "shadow-lightBlue";
    // } else if (type == "Machine Learning") {
    //   return "shadow-purple";
    // } else if (type == "Automation") {
    //   return "shadow-darkRed";
    // }
  }

  function getLabel(type) {

    return (
      <p className={`px-2 h-full text-${getLabelColor(type)} w-fit my-1 ring-${getLabelColor(type)} ring-2 rounded-sm font-interBold text-sm overflow-hidden lg:text-[0.75rem]`}>${type.replace("-","").toUpperCase()}</p>
    );

    if (type == "Power BI") {
      return (
        <p className="px-2 h-full text-mediumYellow w-fit my-1 ring-mediumYellow ring-2 rounded-sm font-interBold text-sm overflow-hidden lg:text-[0.75rem]">POWER BI</p>
      );
    } else if (type == "Python") {
      return (
        <p className="px-2 h-full text-lightBlue min-w-max my-1 ring-lightBlue ring-2 rounded-sm font-interBold text-sm overflow-hidden lg:text-[0.75rem]">PYTHON</p>
      );
    } else if (type == "Machine Learning") {
      return (
        <p className="px-2 h-full text-purple min-w-max my-1 ring-purple ring-2 rounded-sm font-interBold text-sm overflow-hidden lg:text-[0.75rem]">MACHINE LEARNING</p>
      );
    } else if (type == "Automation") {
      return (
        <p className="px-2 h-full text-darkRed min-w-max my-1 ring-darkRed ring-2 rounded-sm font-interBold text-sm overflow-hidden lg:text-[0.75rem]">AUTOMATION</p>
      );
    }
  }

  function getShadowClass(type) {
    return `link-shadow-${type}`;
    if (type == "Power BI") {
      return "link-shadow-pbi";
    } else if (type == "Python") {
      return "link-shadow-python";
    } else if (type == "Machine Learning") {
      return "link-shadow-ml";
    } else if (type == "Automation") {
      return "link-shadow-auto";
    }
  } 

  function getHoverClass(type) {
    return `hover:text-${getLabelColor(type)}`
    switch(type) {
      case 'PowerBI':
        return 'hover:text-mediumYellow';
      case 'Python':
        return 'hover:text-lightBlue';
      case 'MachineLearning':
        return 'hover:text-purple';
      case 'Automation':
        return 'hover:text-darkRed';
      default:
        return '';
    }

    // if (type == "Power BI") {
    //   return "hover:text-mediumYellow";
    // } else if (type == "Python") {
    //   return "hover:text-lightBlue";
    // } else if (type == "Machine Learning") {
    //   return "hover:text-purple";
    // } else if (type == "Automation") {
    //   return "hover:text-darkRed";
    // }
  }

  return (
    <div className={`flex w-full flex-col rounded-md overflow-hidden bg-white ${`shadow-${getLabelColor(type)}`} shadow-[0_0px_4px]`} x-intersect="$el.classList.add('flip-in-ver-left')">
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
            className="flex py-2 text-xl font-interBold relative no-underline lg:text-md"><span className={`link-shadow-${type.split(",")[0]}`}>{title}</span></Link>
        </div>
        <div className="grid grid-cols-2 items-end justify-between w-full py-3 font-interRegular text-md lg:text-sm">
          <Link href={code_url} target="_blank" className={`flex flex-row project-link text-lg ${`hover:text-${getLabelColor(type.split(",")[0])}`}`}><FaGithub /> <p className="text-sm pl-2">Learn More</p></Link>
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