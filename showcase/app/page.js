import React from 'react';
import ProjectCard from './components/ProjectCard';

 function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full p-10 bg-gray md:items-start 2xl:px-52">

      <h1 className="px-2 h-full text-mediumYellow min-w-max ring-mediumYellow ring-2 rounded-sm font-interBold text-sm overflow-hidden">POWER BI</h1>
      
      <div className="flex flex-col w-full pt-5 pb-10 gap-7 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

      <div className="flex flex-row justify-center">
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
      </div>
    </main>
  )
}

export default Home;
