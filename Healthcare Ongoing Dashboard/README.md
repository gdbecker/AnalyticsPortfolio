# Healthcare Ongoing Dashboard

I was super encouraged when one of the first projects I worked on became a monthly addition to an existing client. My manager and I worked on developing this one together for a couple of months, fine-tuning it with the current engagement team, and this client loved it enough to make an addendum to subscribe for monthly updates on their data. As of now I am maintaining the production version of this file and providing analytics updates for them each month.

### [Live Demo](https://app.powerbi.com/view?r=eyJrIjoiNDA3OGRkMzgtOTljNC00MjhhLWIwNzgtMGNhZWE5N2M5ZTg5IiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9)

!["Report"](./Healthcare%20Ongoing%20Dashboard.jpg)

## Project Details
- [Details](#details)
- [By the Numbers](#by-the-numbers)
- [Tools Used](#tools-used)
- [Data Engineering Pipeline](#data-engineering-pipeline)
- [Data Model](#data-model)
- [What I learned](#what-i-learned)
- [Useful resources](#useful-resources)

## Details

One of the healthcare client teams approached my Data & Analytics group about potentially adding on a dashboard to help them understand and draw deeper insights from their data. As one of the first major projects I worked on at Elliott Davis, it was a delight to find out that this client wanted to subscribe for monthly updates upon completion! They were specifically curious about how their different providers were performing across clinic locations, and also wanted to see each one's service records broken down by patient severity, new/existing patients, and CPT codes. I am proud of the final result and am thankful this has aided them in caring for their patients well.

Files included for view in this project:
- Healthcare Ongoing Dashboard.pdf
  - Masked file version that is currently being used monthly by the client

## By the Numbers

- 2 months of development time
- 3 colleagues collaborated with
- 6 report pages
- 1 data source
- 7 queries connected to data source

## Tools Used

- Excel
- Power BI
  - DAX
  - Power Query
- SharePoint (data source)

## Data Engineering Pipeline

!["Pipeline"](./Healthcare%20Ongoing%20Dashboard%20Pipeline.png)

## Data Model

!["Data Model"](./Healthcare%20Ongoing%20Dashboard%20Data%20Model.JPG)

## What I learned

Below are some code snippets I'm proud of from this project:

Custom DAX table to allow users to adjust how they view the top CPT codes dynamically
```DAX
Top N CPT = GENERATESERIES(1, [# Unique CPT], 1)
```

Series of DAX measures connected to the above table for this functionality
```DAX
Selected N = SELECTEDVALUE('Top N CPT'[Select N])
```

```DAX
CPT Rank Within Selected N = IF([CPT - Rank - (Charges - Gross)] <= [Selected N],1,0)
```

## Useful Resources

- [Power BI: Change measures using slicers](https://www.youtube.com/watch?v=gYbGNeYD4OY) - Clever solution allows users to change a visual's measure value by clicking on a slicer