# Internal Use Work Tracker

This was a great challenge because instead of creating dashboards for clients, now I was tasked with helping to develop a work tracker for internal use. Two of my colleagues worked on this one before I hopped on, and from their work I helped communicate with a few members of upper level leadership to bring it home. The overall idea was to gradually replace the existing solution to track work over time that was housed on one platform, and move it into Power BI - with the goal of course to create something even better. Many people from different service lines and divisions would be using this tool so the end result needed to be flexible but specific enough for their needs.

### [Live Demo](https://app.powerbi.com/view?r=eyJrIjoiYjRmOGJiMDUtM2M3Mi00MTVhLWE3NzgtYzNiYWUwMzNjOWM5IiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9)

!["Report"](./Internal%20Use%20Work%20Tracker.jpg)

## Project Details
- [Internal Use Work Tracker](#internal-use-work-tracker)
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

While on my portion the development time was about a month, this project was happening in iterative stages between the two colleagues who were on this before me. On each phase the solution was getting better and better, and most of my role was to combine different aspects of both previous dashboards and combine them into one, establishing a common look and feel across all pages. I worked with my director a few other upper level business leaders to discuss their feedback, what they wanted to see or have removed, and communicate what would be best to see across the firm. Many people would be using this new tool to track their work and engagements, and so the dashboards needed to be flexible enough for data views they are used to, but also specific to focus on only the data they need. Overall this was a great challenge to develop dashboards just for the firm's internal use which not only ultimately showed others the data views they needed to make decisions, but also the power behind data analytics and what could be offered to their clients.

Files included for view in this project:
- **Internal Use Work Tracker.pdf**: Masked file version that was developed

## By the Numbers

- 1 month of development time
- 4 colleagues collaborated with
- 6 report pages
- 1 data source
- 2 queries connected to data source

## Tools Used

- Excel
- Power BI
  - DAX
  - Power Query
- SharePoint (data source)

## Data Engineering Pipeline

!["Pipeline"](./Internal%20Use%20Work%20Tracker%20Pipeline.png)

## Data Model

!["Data Model"](./Internal%20Use%20Work%20Tracker%20Data%20Model.JPG)

## What I learned

Below are some code snippets I'm proud of from this project:

DAX formula for custom color formatting
```DAX
Background Formating - Stages = 
SWITCH ( 
    SELECTEDVALUE('Table'[Stage]),
    "Stage 1", "#003594",
    "Stage 2", "#e57200",
    "Stage 3", "#f5c799",
    "Stage 4", "#0082ba",
    "Stage 5", "#00ab8e",
    "Stage 6", "#a59c94",
    "#c8c9c7"
)
```

Using a DAX SWITCH and USERELATIONSHIP to let users control which category to view by
```DAX
Sum Forecasted Amount (Variable Category) = 
    SWITCH(
        TRUE(),
        ----------- Month Category -----------
        SELECTEDVALUE('Opportunities Created by Cadence'[Cadence]) = "Month",
        CALCULATE(
            [Sum Forecasted Amount],
            USERELATIONSHIP('Table'[Created Month], 'Opportunities Created by Cadence'[Date])
        ),

        ----------- Week Category -----------
        SELECTEDVALUE('Opportunities Created by Cadence'[Cadence]) = "Week",
        CALCULATE(
            [Sum Forecasted Amount],
            USERELATIONSHIP('Table'[Created Week (Monday Start)], 'Opportunities Created by Cadence'[Date])
        ),

        ----------- Quarter Category -----------
        SELECTEDVALUE('Opportunities Created by Cadence'[Cadence]) = "Quarter",
        CALCULATE(
            [Count of RowNumber],
            USERELATIONSHIP('Table'[Created Quarter], 'Opportunities Created by Cadence'[Date])
        ),
        BLANK()
    )
```

DAX UNION table to combine fields from multiple tables
```DAX
Legend Categories = 
    UNION(
        DISTINCT(SELECTCOLUMNS(
            'Table',
            "Category", 'Table'[Name],
            "Field", "Name"
        )),
        DISTINCT(SELECTCOLUMNS(
            'Table',
            "Category", 'Table'[Position],
            "Field", "Position"
        )),
        DISTINCT(SELECTCOLUMNS(
            'Table',
            "Category", 'Table'[Specialty Group],
            "Field", "Specialty Group"
        )),
        DISTINCT(SELECTCOLUMNS(
            'Table',
            "Category", 'Table'[Office Location],
            "Field", "Market"
        )),
        DISTINCT(SELECTCOLUMNS(
            'Table',
            "Category", 'Table'[Service Line],
            "Field", "Service Line"
        ))
    )
```

## Useful Resources

- [Leverage Power BI Service Workspaces](https://learn.microsoft.com/en-us/power-bi/fundamentals/service-get-started) - My team and I have gotten into the practice of making online workspaces in Power BI Service which you can publish your .pbix files. Makes it super easy to quickly share work and findings, as well as give colleagues different levels of access depending on what they need