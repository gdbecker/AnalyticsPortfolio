# LEGO Rebrickable Analytics

!["Joshua Project"](./Design%20Files/Joshua_Project_Transparent_Logo_Full.png)



### [Live Demo]()

!["Report"](./)

## Project Details
- [LEGO Rebrickable Analytics](#lego-rebrickable-analytics)
    - [Live Demo](#live-demo)
  - [Project Details](#project-details)
  - [Details](#details)
  - [By the Numbers](#by-the-numbers)
  - [Tools Used](#tools-used)
  - [Data Engineering Pipeline](#data-engineering-pipeline)
  - [Data Model](#data-model)
  - [Useful Resources](#useful-resources)

## Details

This was a great project to complete as someone starting out with Fabric and figuring out how to build a sustainable analytics solution; for this case that was constructing a workflow for Joshua Project.

Before diving in and making Fabric resources, I scoped out Joshua Project's API to learn more. They have a great developer team over there and have laid out in detail everything you need to know to get started - from sample code snippets in different languages to examples of responses to column by column descriptions for each major entity. There are just a few key components available to pull from, and I decided to use the main ones available to build the model later: countries, languages, and people groups. There was also an additional call for a "daily unreached" people group which randomly selects an unreached group everyday, and I decided to pull this in as well to have available on the overview dashboard page. This page was my source of truth for navigating all the mysterious column names and how the entities best fit together.

!["1_APIDocumentation"](./Process/01_APIDocumentation.JPG)
*Joshua Project's API Documentation Page*


Files included for view in this project:
- **LEGO Rebrickable Report.pdf**: Result analysis dashboard

## By the Numbers

- < 1 month of development time
- 0 colleagues collaborated with
- 4 report pages
- 1 data source
- 4 queries connected to data source

## Tools Used

- Fabric 
  - Lakehouse
  - Data Factory pipeline
  - Dataflow Gen2
  - Data Activator
- Power BI
  - DAX
  - Power Query

## Data Engineering Pipeline

!["Pipeline"](./Joshua%20Project%20Analytics%20Pipeline.png)

## Data Model

!["Data Model"](./Joshua%20Project%20Analytics%20Data%20Model.JPG)

## Useful Resources

- [Rebrickable API Documentation](https://rebrickable.com/api/v3/docs/?key=)