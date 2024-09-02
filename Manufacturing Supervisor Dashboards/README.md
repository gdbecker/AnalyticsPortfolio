# Manufacturing Supervisor Dashboards

After working on several healthcare and private equity financial reports, it felt great delving into the operational side of a business, specifically in the manufacturing industry. For this one I was able to help our client explore and understand more from their existing data, drawing connections and insights they haven't seen before to better understand how they can train and equip their staff. This dashboard series explored questions like: "Are my employees improving over time?" "How are our different markets stack up against each other?" "Who among a supervisor's employees might need further training?"

### [Live Demo](https://app.powerbi.com/view?r=eyJrIjoiNjJhNjgyMjgtNDBjYy00N2E1LWJkN2MtNWJmYmRmODU3MTM1IiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9)

!["Report"](./Manufacturing%20Supervisor%20Dashboards.jpg)

## Project Details
- [Manufacturing Supervisor Dashboards](#manufacturing-supervisor-dashboards)
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

Similar to the Manufacturing Client Demo project, this one started out by exploring the client's existing data and reports. What did they most want to see and understand? What data sources did they have, could I connect to them directly, and how could I develop the best long-term solution given what I had? After developing an initial set of operational reports, more individuals from the client began attending meetings to give feedback so the set of reports shown here was the result of taking an iterative approach. Taking it a step at a time to first present what was possible and then fine-tuning it further worked out wonderfully. I especially enjoyed figuring out how to display the trend indicator arrows on a couple of the pages for each employee, and they change depending on if you want to see their trends for the past two months or year-to-date. It was a great challenge to learn more about this client's business to be able to accurately and ethically display their data for greater understanding. 

Files included for view in this project:
- [`Manufacturing Supervisor Dashboard.pdf`](./Manufacturing%20Supervisor%20Dashboards.pdf): Masked file version that was developed

## By the Numbers

- 2 months of development time
- 10 colleagues collaborated with
- 5 report pages
- 3 data source
- 3 queries connected to data sources

## Tools Used

- Excel
- Power BI
  - DAX
  - Power Query
- SharePoint (data source)

## Data Engineering Pipeline

!["Pipeline"](./Manufacturing%20Supervisor%20Dashboards%20Pipeline.png)

## Data Model

!["Data Model"](./Manufacturing%20Supervisor%20Dashboards%20Data%20Model.JPG)

## What I learned

Below are some code snippets I'm proud of from this project:

DAX formula for custom color formatting
```DAX
Background Formating - TimeCodeName = 
SWITCH ( 
    SELECTEDVALUE('Combined Scrub Exports'[TimeCodeName]),
    "F014-6", "#00B0F0",
    "F013", "#FF0000",
    "F014-15", "#C6EFCE",
    "F014-12", "#FFFF00",
    "2-F014-2", "#FFFF00",
    "F010", "#FFFF00",
    "F014-5", "#FFEB9C",
    "F007", "#9BC2E6",
    "F012", "#FFC7CE",
    "#FFFFFF"
)
```

Using a DAX SWITCH and USERELATIONSHIP to let users control which category to view by
```DAX
% Change - % Complete (Variable Category) = 
    SWITCH(
        TRUE(),
        ----------- MTD -----------
        SELECTEDVALUE('Indicator Symbols'[Time Trend]) = "MTD",
        CALCULATE(
            [% Change - % Complete - MTD]
        ),

        ----------- YTD -----------
        SELECTEDVALUE('Indicator Symbols'[Time Trend]) = "YTD",
        CALCULATE(
            [% Change - % Complete - YTD]
        ),

        BLANK()
    )
```

DAX UNION table to combine fields from multiple tables
```DAX
Legend Categories = 
    UNION(
        DISTINCT(SELECTCOLUMNS(
            FILTER('Combined Tech Data', AND('Combined Tech Data'[STATUS] <> "(Removed)", 'Combined Tech Data'[STATUS] <> BLANK())),
            "Category", 'Combined Tech Data'[STATE],
            "Field", "State"
        )),
        DISTINCT(SELECTCOLUMNS(
            FILTER('Combined Tech Data', AND('Combined Tech Data'[STATUS] <> "(Removed)", 'Combined Tech Data'[STATUS] <> BLANK())),
            "Category", 'Combined Tech Data'[SUPERVISOR NAME],
            "Field", "Supervisor"
        ))
    )
```

## Useful Resources

- [Power BI: Filter by a measure in a slicer](https://www.youtube.com/watch?v=AZAL-QPn5Zc) - Filtering visuals by DAX measure values is not natively supported in Power BI but this video helped me find a clever solution
- [Power BI: Dynamic axes and legends](https://www.youtube.com/watch?v=8e8a3o1w51M) - Perfect for making visuals with dynamic axes so users can pick what category they want to view by
- [Power BI: Date Tables](https://www.youtube.com/watch?v=WybnTHDl-AM) - Quickly generate date tables to use in your data model