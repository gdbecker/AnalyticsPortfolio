'use client'
import React, { useState, useEffect } from 'react';
import LoadingPage from './loading';
import ProjectCard from './components/ProjectCard';
import { BiSearch } from 'react-icons/bi'
import { BiChevronDown } from 'react-icons/bi'
import { collection, getDocs, doc } from 'firebase/firestore';
import { db } from './services/firebase.config';

function Home() {

  // Firebase db variables
  const collectionRef = collection(db, "projects");
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // State variables
  const [isLoading, setIsLoading] = useState(true);
  const [projectSearch, setProjectSearch] = useState('');
  const [typeSelect, setTypeSelect] = useState('Filter by Type');
  const [types, setTypes] = useState([]);

  // Update project to search
  const onChangeProjectSearch = (e) => {
    setProjectSearch(e.currentTarget.value);

    filterProjects(e.currentTarget.value, typeSelect);
  }

  // Update type to filter
  const handleTypeChange = (e) => {
    setTypeSelect(e.target.name);

    filterProjects(projectSearch, e.target.name);
  };

  // Filter by project name search and type
  const filterProjects = (projectName, type) => {
    if (projectName != "" && type != "All" && type != "Filter by Type") {
      var f =  projects.filter(function(p) {
        return p.types.includes(type) && p.title.toLowerCase().includes(projectName.toLowerCase());
      });

      setFilteredProjects(f);
    } else if (type != "All" && type != "Filter by Type") {
      var f =  projects.filter(function(p) {
        return p.types.includes(type);
      });

      setFilteredProjects(f);
    } else if (projectName != "") {
      var f =  projects.filter(function(p) {
        return p.title.toLowerCase().includes(projectName.toLowerCase());
      });

      setFilteredProjects(f);
    } else {
      setFilteredProjects(projects);
    }
  }

  // Get project types list
  const grabTypes = (projects) => {
    let allTypes = projects.map(p => p.types);
    let allTypesMerge = allTypes.flat(1);
    let typeList = [...new Set(allTypesMerge)].sort();

    typeList = typeList.map(p => {
      return({type: p});
    });

    typeList.unshift({type: "Filter by Type"})

    setTypes(typeList);
  }

  // Get all projects
  const getProjects = async () => {
    await getDocs(collectionRef).then((project) => {
      let projectData = project.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      projectData.sort(function (first, second) {
        if (first.title < second.title) {
          return -1;
        }
        if (first.title > second.title) {
          return 1;
        }
        return 0;
      });
      setProjects(projectData);
      setFilteredProjects(projectData);
      grabTypes(projectData);
      setIsLoading(false);
    }).catch((err) => {
      console.log(err);
    })
  }

  // Set up app for viewing
  useEffect(() => {
    getProjects();
  }, [])

  if (isLoading) {
    return (
      <LoadingPage />
    )
  }

  if (!isLoading) {
    return (
      <main className="flex flex-col items-center justify-center w-full h-full p-10 bg-gray md:items-center 2xl:px-36">

        <h1 className="pb-9 font-interRegular text-justify text-white leading-7 md:w-[50vw]">
          This is a collection of selected projects I've worked on during my professional career so far, as well 
          as a few Python data analysis projects. Before joining I had no prior experience in Power BI or any business intelligence 
          development, and it has been wonderful to aid clients in discovering more about their data while also building aesthetically 
          pleasing frontend dashboards to present insights. All PDFs in Github are exports of .pbix files I've worked on, and the data is 
          scrubbed/modified to protect client identities. Take a look and explore the projects I've worked on, view more details in Github
          and play with a demo right here!
        </h1>

        <div className="flex flex-col w-full py-5 justify-between md:flex-row">
          <div className="flex flex-row w-full items-center justify-between pl-5 shadow-md rounded-md bg-white md:w-[40%]">
            <h1 className="font-interRegular text-gray"><BiSearch /></h1>
            <input 
              className="flex w-full p-4 bg-white text-gray text-xs font-interRegular rounded-md focus:outline-none"
              placeholder="Search for a project!"
              id="projectSearch" 
              type="text" 
              value={projectSearch}
              onChange={e => onChangeProjectSearch(e)}
            />
          </div>
          <details className="flex dropdown w-[100%] my-4 md:my-0 md:w-[28%] lg:w-[20%] xl:w-[15%]">
          <summary className="flex flex-row items-center justify-between h-full mb-[2px] btn w-full rounded-md border-0 shadow-md no-animation bg-white text-veryDarkBlue-Light hover:bg-white">
            <h1 
              className="flex normal-case text-xs font-interRegular"
            >{typeSelect}</h1>
            <BiChevronDown className="text-sm"/>
          </summary>
          <ul 
            className="flex px-2 py-4 shadow menu dropdown-content z-[1] rounded-md w-full bg-white text-gray"
            
            >
            {types.map((t) => (
              <li
                onClick={(e) => handleTypeChange(e)}
                className="text-xs font-interRegular"
              >
                <a 
                  className="px-4 py-1 rounded-none hover:bg-white"
                  name={t.type}
                >
                  {t.type}
                </a>
              </li>
          ))}
          </ul>
        </details>
        </div>

        <div className="flex flex-col w-full pt-5 pb-10 gap-7 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {filteredProjects.map(({ id, img, title, code_url, types }, index) =>
            <ProjectCard 
              key={index}
              index={index}
              id={id}
              img={img}
              title={title}
              code_url={code_url}
              types={types}
            />
          )}

        </div>
      </main>
    )
  }
  
}

export default Home;
