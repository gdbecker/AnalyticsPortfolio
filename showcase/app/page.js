import React from 'react';
import ProjectCard from './components/ProjectCard';

 function Home() {
  return (
    <main className="flex flex-col gap-7 w-full p-10 items-center justify-between bg-gray md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <ProjectCard 
        img_bg="bg-3-column-card"
        title="Healthcare Private Practice V1"
        demo_url="https://app.powerbi.com/view?r=eyJrIjoiMDZhMmQyZjItNzIyNy00Nzk2LThkOGYtNWZiZDIwZTgyZTY2IiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9&embedImagePlaceholder=true"
        code_url="https://github.com/gdbecker/AnalyticsPortfolio/tree/main/01%20-%20Healthcare%20Practice%20Demos"
      />

    </main>
  )
}

export default Home;
