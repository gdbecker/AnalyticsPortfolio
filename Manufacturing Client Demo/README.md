# Manufacturing Client Demo

It's always interesting to discover what new challenge you might come across when it comes to a Power BI project - no two are the same. The main goal for this engagement was to redesign and build new reports from the client's existing Power BI environment, so there was less data modeling and engineering involved as much as a greater focus on what reports they currently had available and what other views/functionalities they would like to see. I'm thankful for this one to continue practicing making an effective and beautiful user experience as well as effectively communicating feedback with clients for delivering a better product and service.

### [Live Demo](https://app.powerbi.com/view?r=eyJrIjoiYjFmNzk5M2YtZDQwYy00YTA1LWJmN2UtNzQ2YTI2ZWEwZTczIiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9)

!["Report"](./Manufacturing%20Client%20Demo.jpg)

## Project Details
- [Manufacturing Client Demo](#manufacturing-client-demo)
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

We began this project by first exploring the client's data sources and existing Power BI development - everything from what we could securely access to the existing data model, measures, and visuals. I established a color pallette and overall look and feel for their existing dashboard pages and redesigned those, and the eight reports I included within this project are the new ones I developed for them. It started as an exploration of what else Power BI was capable of and could offer, and after time and feedback narrowed down into the reports shown here for the client to utilize. This engagement also taught me to ask questions and seek understanding, and not to forget the overall business goals of our work in the midst of technical challenges. I love figuring new things out and this was great practice for not losing sight of what we were doing as I solved problems.

Files included for view in this project:
- [`Manufacturing Client Demo.pdf`](./Manufacturing%20Client%20Demo.pdf): Masked file version that was developed

## By the Numbers

- 2 months of development time
- 4 colleagues collaborated with
- 8 report pages
- 1 data source
- 46 queries connected to data source

## Tools Used

- Excel
- Power BI
  - DAX
  - Power Query
- Power BI Data Flows (data source)

## Data Engineering Pipeline

!["Pipeline"](./Manufacturing%20Client%20Demo%20Pipeline.png)

## Data Model

!["Data Model"](./Manufacturing%20Client%20Demo%20Data%20Model.JPG)

## What I learned

Below are some code snippets I'm proud of from this project:

DAX formula for custom color formatting
```DAX
1 - CY Gross Sales (GL) - Background Formatting = "#FFFF00"
```

Using a DAX SWITCH and USERELATIONSHIP to let users control which category to view by
```DAX
GL Amount (Variable Category) = 
    SWITCH(
        TRUE(),
        ----------- Product Line -----------
        SELECTEDVALUE('Legend Categories'[Field]) = "Product",
        CALCULATE(
            [GL Amount],
            USERELATIONSHIP('Legend Categories'[Category], 'dim product'[Desc])
        ),

        ----------- Customer -----------
        SELECTEDVALUE('Legend Categories'[Field]) = "Customer",
        CALCULATE(
            [GL Amount],
            USERELATIONSHIP('Legend Categories'[Category], 'dim customer'[Customer])
        ),
        BLANK()
    )
```

DAX UNION table to combine fields from multiple tables
```DAX
Legend Categories = 
    UNION(
        DISTINCT(SELECTCOLUMNS(
            'dim product',
            "Category", 'dim product'[Desc],
            "Field", "Product"
        )),
        DISTINCT(SELECTCOLUMNS(
            'dim customer',
            "Category", 'dim customer'[Customer],
            "Field", "Customer"
        ))
    )
```

## Useful Resources

- [Power BI: Filter by a measure in a slicer](https://www.youtube.com/watch?v=AZAL-QPn5Zc) - Filtering visuals by DAX measure values is not natively supported in Power BI but this video helped me find a clever solution
- [Power BI: Dynamic axes and legends](https://www.youtube.com/watch?v=8e8a3o1w51M) - Perfect for making visuals with dynamic axes so users can pick what category they want to view by