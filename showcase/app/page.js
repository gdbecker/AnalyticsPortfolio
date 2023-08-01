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
        return p.type.includes(type) && p.title.toLowerCase().includes(projectName.toLowerCase());
      });

      setFilteredProjects(f);
    } else if (type != "All" && type != "Filter by Type") {
      var f =  projects.filter(function(p) {
        return p.type.includes(type);
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
    let allTypes = projects.map(p => p.type.split(","));
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
      setProjects(projectData)
      setFilteredProjects(projectData)
      grabTypes(projectData)
      setIsLoading(false)
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
          This is a collection of selected projects I've worked on during my time as an analyst & consultant at Elliott Davis, as well 
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

          {filteredProjects.map(({ id, img_bg, title, demo_url, code_url, type  }, index) =>
            <ProjectCard 
              index={index}
              id={id}
              img_bg={img_bg}
              title={title}
              demo_url={demo_url}
              code_url={code_url}
              type={type}
            />
          )}

        </div>

        {/* <h1 className="px-2 mb-2 h-full text-mediumYellow min-w-max ring-mediumYellow ring-2 rounded-sm font-interBold text-sm overflow-hidden">POWER BI</h1> */}
        
        {/* <div className="flex flex-col w-full pt-5 pb-10 gap-7 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ProjectCard 
            img_bg="bg-healthcare-private-practice-v1"
            title="Healthcare Private Practice V1"
            demo_url="https://app.powerbi.com/view?r=eyJrIjoiMDZhMmQyZjItNzIyNy00Nzk2LThkOGYtNWZiZDIwZTgyZTY2IiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9&embedImagePlaceholder=true"
            code_url="https://github.com/gdbecker/AnalyticsPortfolio/tree/main/01%20-%20Healthcare%20Practice%20Demos"
            type="pbi"
          />

          <ProjectCard 
            img_bg="bg-healthcare-private-practice-v2"
            title="Healthcare Private Practice V2"
            demo_url="https://app.powerbi.com/view?r=eyJrIjoiMjA2MjJkMzYtYTM5OC00OWM1LWJmOWQtMTM5ZWE3NzM4OGU5IiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9&embedImagePlaceholder=true"
            code_url="https://github.com/gdbecker/AnalyticsPortfolio/tree/main/01%20-%20Healthcare%20Practice%20Demos"
            type="pbi"
          />

          <ProjectCard 
            img_bg="bg-healthcare-ongoing-dashboard"
            title="Healthcare Ongoing Dashboard"
            demo_url="https://app.powerbi.com/view?r=eyJrIjoiNDA3OGRkMzgtOTljNC00MjhhLWIwNzgtMGNhZWE5N2M5ZTg5IiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9&embedImagePlaceholder=true"
            code_url="https://github.com/gdbecker/AnalyticsPortfolio/tree/main/02%20-%20Healthcare%20Ongoing%20Dashboard"
            type="pbi"
          />

          <ProjectCard 
            img_bg="bg-automated-medical"
            title="Automated Medical Financial Reporting"
            demo_url="https://app.powerbi.com/view?r=eyJrIjoiZTY3M2RmMmUtODhmYi00MDBmLWJkMDEtNWUwMTY4ZDMxYTk0IiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9&embedImagePlaceholder=true"
            code_url="https://github.com/gdbecker/AnalyticsPortfolio/tree/main/03%20-%20Automated%20Medical%20Financial%20Reporting"
            type="pbi"
          />

          <ProjectCard 
            img_bg="bg-private-equity"
            title="Private Equity Financial Reporting Automation"
            demo_url="https://app.powerbi.com/view?r=eyJrIjoiZmNhNDg1NjctZGNiMy00YWI3LWEyN2YtOWY1NGY0MDZkYTNjIiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9&embedImagePlaceholder=true"
            code_url="https://github.com/gdbecker/AnalyticsPortfolio/tree/main/04%20-%20Private%20Equity%20Financial%20Reporting%20Automation"
            type="pbi"
          />

          <ProjectCard 
            img_bg="bg-current-client-demo"
            title="Current Client Analytics Demo"
            demo_url="https://app.powerbi.com/view?r=eyJrIjoiYWJhNTBhY2ItNzE4MS00YjEzLTliMWMtN2ViMDNhMTdlYmYxIiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9&embedImagePlaceholder=true"
            code_url="https://github.com/gdbecker/AnalyticsPortfolio/tree/main/05%20-%20Current%20Client%20Analytics%20Demo"
            type="pbi"
          />

          <ProjectCard 
            img_bg="bg-client-proposal"
            title="Client Proposal Dashboard"
            demo_url="https://app.powerbi.com/view?r=eyJrIjoiZWE0YjMwZWYtMGQ3My00YjNjLTkzNTctN2IxMDVkZjdkYjRmIiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9&embedImagePlaceholder=true"
            code_url="https://github.com/gdbecker/AnalyticsPortfolio/tree/main/06%20-%20Client%20Proposal%20Dashboard"
            type="pbi"
          />

          <ProjectCard 
            img_bg="bg-group-case-study"
            title="Group Case Study Demo"
            demo_url="https://app.powerbi.com/view?r=eyJrIjoiMWM5NWI0MjUtMmRhYy00ZDkzLWJiNjUtNzlmM2M3ZGE2MjZmIiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9&embedImagePlaceholder=true"
            code_url="https://github.com/gdbecker/AnalyticsPortfolio/tree/main/07%20-%20Group%20Case%20Study%20Demo"
            type="pbi"
          />

          <ProjectCard 
            img_bg="bg-healthcare-proposal"
            title="Healthcare Proposal Dashboard"
            demo_url="https://app.powerbi.com/view?r=eyJrIjoiMzNlMWYxZmYtZDAyMC00YjhhLTgxOGUtZWI0NWU1ZWE5OWUyIiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9&embedImagePlaceholder=true"
            code_url="https://github.com/gdbecker/AnalyticsPortfolio/tree/main/08%20-%20Healthcare%20Proposal%20Dashboard"
            type="pbi"
          />

          <ProjectCard 
            img_bg="bg-internal-work"
            title="Internal Use Work Tracker"
            demo_url="https://app.powerbi.com/view?r=eyJrIjoiYjRmOGJiMDUtM2M3Mi00MTVhLWE3NzgtYzNiYWUwMzNjOWM5IiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9&embedImagePlaceholder=true"
            code_url="https://github.com/gdbecker/AnalyticsPortfolio/tree/main/09%20-%20Internal%20Use%20Work%20Tracker"
            type="pbi"
          />

          <ProjectCard 
            img_bg="bg-external-webinar"
            title="External Webinar Dashboards"
            demo_url="https://app.powerbi.com/view?r=eyJrIjoiODFiZmVhYzYtMDQyOC00YzI1LTg4MDYtYzM5ODgwOWZmMjIwIiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9&embedImagePlaceholder=true"
            code_url="https://github.com/gdbecker/AnalyticsPortfolio/tree/main/10%20-%20External%20Webinar%20Dashboards"
            type="pbi"
          />
        </div>

        <div className="flex flex-row justify-center mb-2">
          <h1 className="px-2 h-full text-lightBlue min-w-max ring-lightBlue ring-2 rounded-sm font-interBold text-sm overflow-hidden">PYTHON</h1>
          <span className="mx-2 h-full text-white min-w-max ring-gray ring-2 rounded-sm font-interBold text-sm overflow-hidden">+</span>
          <h1 className="px-2 h-full text-purple min-w-max ring-purple ring-2 rounded-sm font-interBold text-sm overflow-hidden">MACHINE LEARNING</h1>
        </div>
        
        <div className="flex flex-col w-full pt-5 pb-10 gap-7 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <ProjectCard 
            img_bg="bg-space-missions"
            title="Space Missions Analysis"
            demo_url="https://www.kaggle.com/embed/garrettbecker/space-missions-analysis?kernelSessionId=132508838"
            code_url="https://github.com/gdbecker/AnalyticsPortfolio/tree/main/11%20-%20Space%20Missions%20Analysis"
            type="python"
          />

          <ProjectCard 
            img_bg="bg-fatal-force"
            title="Fatal Force Analysis"
            demo_url="https://www.kaggle.com/embed/garrettbecker/fatal-force-analysis?kernelSessionId=132688822"
            code_url="https://github.com/gdbecker/AnalyticsPortfolio/tree/main/12%20-%20Fatal%20Force%20Analysis"
            type="python"
          />

          <ProjectCard 
            img_bg="bg-determinants-earnings"
            title="Determinants of Earnings Analysis"
            demo_url="https://www.kaggle.com/embed/garrettbecker/determinants-of-earnings-analysis?kernelSessionId=132695898"
            code_url="https://github.com/gdbecker/AnalyticsPortfolio/tree/main/13%20-%20Determinants%20of%20Earnings%20Analysis"
            type="python"
          />

          <ProjectCard 
            img_bg="bg-penguins-part-1"
            title="Penguins Analysis"
            demo_url="https://www.kaggle.com/embed/garrettbecker/penguins-analysis-part-1-exploration?kernelSessionId=132706684"
            code_url="https://github.com/gdbecker/AnalyticsPortfolio/tree/main/14%20-%20Penguins%20Analysis"
            type="python"
          />

          <ProjectCard 
            img_bg="bg-penguins-part-2"
            title="Penguins Linear & Logistic ML"
            demo_url="https://www.kaggle.com/embed/garrettbecker/penguins-analysis-part-2-linear-and-logistic-ml?kernelSessionId=132702797"
            code_url="https://github.com/gdbecker/AnalyticsPortfolio/tree/main/14%20-%20Penguins%20Analysis"
            type="ml"
          />

          <ProjectCard 
            img_bg="bg-penguins-part-3"
            title="Penguins Decision Trees & Random Forests ML"
            demo_url="https://www.kaggle.com/embed/garrettbecker/penguins-analysis-part-3-dt-rf-ml?kernelSessionId=132708952"
            code_url="https://github.com/gdbecker/AnalyticsPortfolio/tree/main/14%20-%20Penguins%20Analysis"
            type="ml"
          />

          <ProjectCard 
            img_bg="bg-penguins-part-4"
            title="Penguins K-Nearest Neighbors & K-Means Clustering ML"
            demo_url="https://www.kaggle.com/embed/garrettbecker/penguins-analysis-part-4-knn-k-means-ml?kernelSessionId=132710769"
            code_url="https://github.com/gdbecker/AnalyticsPortfolio/tree/main/14%20-%20Penguins%20Analysis"
            type="ml"
          />

          <ProjectCard 
            img_bg="bg-penguins-part-5"
            title="Penguins Principal Component Analysis ML"
            demo_url="https://www.kaggle.com/embed/garrettbecker/penguins-analysis-part-5-pca-ml?kernelSessionId=132710862"
            code_url="https://github.com/gdbecker/AnalyticsPortfolio/tree/main/14%20-%20Penguins%20Analysis"
            type="ml"
          />

          <ProjectCard 
            img_bg="bg-airlines-part-1"
            title="Airline Delays Analysis"
            demo_url="https://www.kaggle.com/embed/garrettbecker/airlines-analysis-part-1-exploration?kernelSessionId=132720009"
            code_url="https://github.com/gdbecker/AnalyticsPortfolio/tree/main/15%20-%20Airlines%20Delays%20Analysis"
            type="python"
          />

          <ProjectCard 
            img_bg="bg-airlines-part-2"
            title="Airline Delays Linear & Logistic ML"
            demo_url="https://www.kaggle.com/embed/garrettbecker/airlines-analysis-part-2-linear-logistic-ml?kernelSessionId=132804408"
            code_url="https://github.com/gdbecker/AnalyticsPortfolio/tree/main/15%20-%20Airlines%20Delays%20Analysis"
            type="ml"
          />

          <ProjectCard 
            img_bg="bg-airlines-part-3"
            title="Airline Delays Decision Trees & Random Forests ML"
            demo_url="https://www.kaggle.com/embed/garrettbecker/airlines-analysis-part-3-dt-rf-ml?kernelSessionId=132807406"
            code_url="https://github.com/gdbecker/AnalyticsPortfolio/tree/main/15%20-%20Airlines%20Delays%20Analysis"
            type="ml"
          />

          <ProjectCard 
            img_bg="bg-airlines-part-4"
            title="Airline Delays K-Nearest Neighbors & K-Means Clustering ML"
            demo_url="https://www.kaggle.com/embed/garrettbecker/airlines-analysis-part-4-knn-k-means-ml?kernelSessionId=132817792"
            code_url="https://github.com/gdbecker/AnalyticsPortfolio/tree/main/15%20-%20Airlines%20Delays%20Analysis"
            type="ml"
          />

          <ProjectCard 
            img_bg="bg-airlines-part-5"
            title="Airline Delays Principal Component Analysis ML"
            demo_url="https://www.kaggle.com/embed/garrettbecker/airlines-analysis-part-5-pca-ml?kernelSessionId=132820053"
            code_url="https://github.com/gdbecker/AnalyticsPortfolio/tree/main/15%20-%20Airlines%20Delays%20Analysis"
            type="ml"
          />
        </div> */}
      </main>
    )
  }
  
}

export default Home;
