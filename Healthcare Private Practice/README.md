# Healthcare Private Practice

These are a set of Power BI demos intended to go to market for existing Elliott Davis healthcare clients. My director had experience in Tableau so some of the functionality has was used to was not natively built-in with this app, so this was a great challenge to push myself with what Power BI is capable of technically in order to provide a better solution. I also tested this project with a bit of Python scripting.

### [Live Demo](https://app.powerbi.com/view?r=eyJrIjoiNDkwYjZlMGQtNmM3MS00YWJjLThjNGEtMGY0MzBjNmI1NGIwIiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9)

!["Report"](./Healthcare%20Private%20Practice.jpg)

## Project Details
- [Healthcare Private Practice](#healthcare-private-practice)
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

Current Elliott Davis teams engaged with healthcare clients wanted to see what Power BI was capable of and what data analytics could offer to them to add greater value, so my team stepped in to help. We focused first on a couple of clients and using their financial and production data to discover what insights could be drawn from what they have. My director at the time was more familiar with Tableau and the native functionalities it has. As he requested specific items I realized I needed to test myself in finding clever solutions, since Power BI is a bit more manual than other BI tools out there. The intent was to move these demo dashboards to market and provide clients an additional offering of great value.

Files included for view in this project:
- **Healthcare Private Practice.pdf**: Masked file version that was developed

## By the Numbers

- 2-3 months of development time
- 5 colleagues collaborated with
- 10 report pages
- 1 data source
- 18 queries connected to data source

## Tools Used

- Excel
- Power BI
  - DAX
  - Power Query
- SharePoint (data source)

## Data Engineering Pipeline

!["Pipeline"](./Healthcare%20Private%20Practice%20Pipeline.png)

## Data Model

!["Data Model"](./Healthcare%20Private%20Practice%20Data%20Model.JPG)

## What I learned

Below are some code snippets I'm proud of from this project:

Conditional formatting DAX measure based on a selected buffer percentage (controlling the threshold to seeing an indicator light)
```DAX
SGA YTD/Target (Main Page) CF = 
    IF([SGA YTD/Target (Main Page)] < (-1 * [Selected Buffer]),1,
    IF([SGA YTD/Target (Main Page)] >= (-1 * [Selected Buffer]) && [SGA YTD/Target (Main Page)] <= [Selected Buffer], 2,
    IF([SGA YTD/Target (Main Page)] > [Selected Buffer], 3)))
```

DAX measure for switching which data model relationship to use based on a selected category
```DAX
# Unique Patients (Variable Category) = 
    SWITCH(
        TRUE(),
        ----------- Clinic Category -----------
        SELECTEDVALUE('Production Legend Categories'[Field]) = "Clinic",
        CALCULATE(
            'Measures - Production'[# Unique Patients],
            USERELATIONSHIP('Production Legend Categories'[Category], 'Production Summary'[Clinic])
        ),

        ----------- Provider Name Category -----------
        SELECTEDVALUE('Production Legend Categories'[Field]) = "Provider",
        CALCULATE(
            'Measures - Production'[# Unique Patients],
            USERELATIONSHIP('Production Legend Categories'[Category], 'Production Summary'[Provider])
        ),
        BLANK()
    )
```

Making a custom union table with DAX to allow for users to select a category dynamically to slice by
```DAX
Production Legend Categories = 
    UNION(
        DISTINCT(SELECTCOLUMNS(
            'Production Summary',
            "Category", 'Production Summary'[Clinic],
            "Field", "Clinic",
            "Sort Order", RIGHT('Production Summary'[Clinic],1)
        )),
        DISTINCT(SELECTCOLUMNS(
            'Production Summary',
            "Category", 'Production Summary'[Provider],
            "Field", "Provider",
            "Sort Order", TRIM(RIGHT('Production Summary'[Provider],2)) + 10
        )),
        ROW("Category", "Multi", "Field", "Clinic", "Sort Order", 10)
    )
```

## Useful Resources

- [Power BI: Filter by a measure in a slicer](https://www.youtube.com/watch?v=AZAL-QPn5Zc) - Filtering visuals by DAX measure values is not natively supported in Power BI but this video helped me find a clever solution
- [Power BI: Dynamic axes and legends](https://www.youtube.com/watch?v=8e8a3o1w51M) - Perfect for making visuals with dynamic axes so users can pick what category they want to view by