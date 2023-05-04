# 09 - Internal Use Work Tracker

Coming soon!

## Project Details
- [Details](#details)
- [By the Numbers](#by-the-numbers)
- [Tools Used](#tools-used)
- [What I learned](#what-i-learned)
- [Useful resources](#useful-resources)

## Details

Coming soon!

Files included for view in this project:
- Internal Use Work Tracker.pdf
  - Masked file version that was developed

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

- [Get a color pallette from photos](https://www.myonlinetraininghub.com/tips-for-using-the-power-query-advanced-editor) - I like making a .json file for each project I work on that has all of the theme's styles, based on a client's existing branding. Helps to make it personal and also let's me focus more on presenting info 