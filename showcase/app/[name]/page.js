'use client'
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'
import { IoChevronBack } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';

import { collection, getDocs } from 'firebase/firestore';
import { db } from './../services/firebase.config';

 function ProjectPage() {

  // Firebase db variables
  const collectionRef = collection(db, "projects");
  const [project, setProject] = useState([]);

  // State variables
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname()

  // Get specific project
  const getProjects = async () => {
    await getDocs(collectionRef).then((project) => {
      let projectData = project.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      projectData.filter(function(p) {
        return p.id == pathname.slice(1);
      });
      setProject(projectData[0])
      console.log(projectData[0])
      setIsLoading(false)
    }).catch((err) => {
      console.log(err);
    })
  }

  // Set up app for viewing
  useEffect(() => {
    getProjects();
  }, [])

  function getHoverClass(type) {
    if (type == 'Power BI') {
      return "flex flex-row hover:text-mediumYellow";
    } else if (type == 'Python') {
      return "flex flex-row hover:text-lightBlue";
    } else if (type == 'Machine Learning') {
      return "flex flex-row hover:text-purple";
    }
  }

  function getShadowClass(type) {
    if (type == 'Power BI') {
      return "flex w-full min-h-screen rounded-md shadow-lightYellow shadow-[0_0px_2px]";
    } else if (type == 'Python') {
      return "flex w-full min-h-screen rounded-md shadow-lightBlue shadow-[0_0px_2px]";
    } else if (type == 'Machine Learning') {
      return "flex w-full min-h-screen rounded-md shadow-purple shadow-[0_0px_2px]";
    }
  }

  if (!isLoading) {
    return (
      <main className="flex flex-col w-full min-h-screen p-10 justify-center bg-gray 2xl:px-36">

        <h1 className="pb-6 font-interBold text-center text-white text-xl">{project.title}</h1>

        <div className="grid grid-cols-2 pb-3 items-end justify-between text-white text-md font-interRegular">
          <a href="/" className={getHoverClass(project.type)}><span className="pt-1 pr-2"><IoChevronBack /></span> Back</a>
          <a href={project.code_url} target="_blank" className={`justify-end ${getHoverClass(project.type)}`}><span className="pt-1 pr-2"><FaGithub /></span> Learn More</a>
        </div>
        <iframe 
          src={project.demo_url}
          height="800" 
          frameborder="0" 
          scrolling="auto" 
          title="Project Demo"
          className={getShadowClass(project.type)}>
        </iframe>
      </main>
    )
  }
}

export default ProjectPage;