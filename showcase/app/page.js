import React from 'react';
import ProjectCard from './components/ProjectCard';

 function Home() {
  return (
    <main className="flex flex-col gap-7 w-full p-10 items-center justify-between bg-gray md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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

    </main>
  )
}

export default Home;
