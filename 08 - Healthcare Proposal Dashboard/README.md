# 08 - Healthcare Proposal Dashboard

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
- Healthcare Proposal Dashboard.pdf
  - Masked file version that was developed

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

- [Get a color pallette from photos](https://www.myonlinetraininghub.com/tips-for-using-the-power-query-advanced-editor) - I like making a .json file for each project I work on that has all of the theme's styles, based on a client's existing branding. Helps to make it personal and also let's me focus more on presenting info than on colors 