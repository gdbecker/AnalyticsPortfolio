# Cybersecurity Analytics Report

Another division of the Digital Consulting Practice Group, Cyber & Penetration Testing, had an interest in finding out how analytics could increase their value in service offerings. I was brought on to develop a potential analytics report that the Cyber team could give to their clients before they begin a security engagement as a way to set the stage for their understanding how secure they are, as well as existing vulnerabilities.

### [Live Demo](https://app.powerbi.com/view?r=eyJrIjoiMTliNmEzOGUtZDQyNy00NjlkLTgzZGUtNWVlZmVlZWE2MzYwIiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9)

!["Report"](./Cybersecurity%20Analytics%20Report.jpg)

## Project Details
- [Cybersecurity Analytics Report](#cybersecurity-analytics-report)
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

The challenge for this project was less the visuals/format itself, but more with collaborating with another team to develop the series of reports. We got to learn from each other what we specialize in which made it for a great learning experience. The Cyber team had a set of data sources they usually drew from to give their clients a pre-engagement security screening, and my task was to communicate with them on the best ways to present that information. It was also an interesting case where you want to showcase data well, but it's better of course not to have data to show because the less that's imported, the more secure they are! This report we made aimed to highlight areas within their organization that have security risks and vulnerabilities present to set the stage for their engagement with Elliott Davis.

Files included for view in this project:
- **Cybersecurity Analytics Report.pdf**: Masked file version that was developed

## By the Numbers

- 2 months of development time
- 3 colleagues collaborated with
- 7 report pages
- 1 data source
- 7 queries connected to data source

## Tools Used

- Excel
- Power BI
  - DAX
  - Power Query
- SharePoint (data source)

## Data Engineering Pipeline

!["Pipeline"](./Cybersecurity%20Analytics%20Report%20Pipeline.png)

## Data Model

!["Data Model"](./Cybersecurity%20Analytics%20Report%20Data%20Model.JPG)

## What I learned

Below are some code snippets I'm proud of from this project:

Custom DAX table to allow users to dynamically select categories to slice by
```DAX
Legend Categories = 
    UNION(
        DISTINCT(SELECTCOLUMNS(
            'archive org',
            "Category", 'archive org'[From],
            "Field", "From Date"
        )),
        DISTINCT(SELECTCOLUMNS(
            'archive org',
            "Category", 'archive org'[To],
            "Field", "To Date"
        ))
    )
```

DAX date table that adjusts to the imported data
```DAX
Date Table = CALENDAR(DATE(2000, 1, 1), MAX('archive org'[To]))
```

## Useful Resources

- [Power BI: Date Tables](https://www.youtube.com/watch?v=WybnTHDl-AM) - Quickly generate date tables to use in your data model