# Healthcare Proposal Dashboard

Instead of a generic demo dashboard, my manager needed a set of dashboard reports to show to a healthcare client in an effort to set up an engagement. We borrowed from existing datasets given to us from this client in order to create what is seen here. From initial conversations they were interested in seeing how their different service lines performed by year across different categories, as well as find out if their current Excel reporting package could be automated in Power BI or be made more efficiently in general. I focused on these ideas when working on this one. 

### [Live Demo](https://app.powerbi.com/view?r=eyJrIjoiMzNlMWYxZmYtZDAyMC00YjhhLTgxOGUtZWI0NWU1ZWE5OWUyIiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9)

!["Report"](./Healthcare%20Proposal%20Dashboard.jpg)

## Project Details
- [Healthcare Proposal Dashboard](#healthcare-proposal-dashboard)
    - [Live Demo](#live-demo)
  - [Project Details](#project-details)
  - [Details](#details)
  - [By the Numbers](#by-the-numbers)
  - [Tools Used](#tools-used)
  - [Data Engineering Pipeline](#data-engineering-pipeline)
  - [Data Model](#data-model)
  - [What I learned](#what-i-learned)
  - [Useful Resources](#useful-resources)

## Details

As one of the first client-related projects I worked on, this was a good test for me to base my dashboard work on what the client already had, but then push myself to think about what else could be helpful to show in order to draw more insights. My manager communictaed that although this client wanted to see how an existing reporting package could be made more efficiently, they were also curious about what else is within their data they may need to pay attention to. I worked to compile visuals into a topic per page, and thoughts about business questions that they could ask when they view a report and how the visuals help provide findings.

Files included for view in this project:
- [`Healthcare Proposal Dashboard.pdf`](./Healthcare%20Proposal%20Dashboard.pdf): Masked file version that was developed

## By the Numbers

- < 1 month of development time
- 3 colleagues collaborated with
- 7 report pages
- 1 data source
- 14 queries connected to data source

## Tools Used

- Excel
- Power BI
  - DAX
  - Power Query
- SharePoint (data source)

## Data Engineering Pipeline

!["Pipeline"](./Healthcare%20Proposal%20Dashboard%20Pipeline.png)

## Data Model

!["Data Model"](./Healthcare%20Proposal%20Dashboard%20Data%20Model.JPG)

## What I learned

Below are some code snippets I'm proud of from this project:

DAX date table construction
```DAX
DateTable = 
    CALENDAR(
        MIN('Home Health - Monthly'[Month and Year]),
        TODAY()
    )
```

Add a custom DAX calculated column
```DAX
Year-Quarter = DateTable[Year] & "-" & DateTable[Quarter]
```

Standard DAX year to date formula
```DAX
YTD Net Revenue = 
    TOTALYTD(
        SUM('Corporate Consolidated - Monthly'[Net Revenue]),
        DateTable[Date]
    )
```

## Useful Resources

- [Get a color pallette from photos](https://www.myonlinetraininghub.com/tips-for-using-the-power-query-advanced-editor) - I like making a .json file for each project I work on that has all of the theme's styles, based on a client's existing branding. Helps to make it personal and also let's me focus more on presenting info