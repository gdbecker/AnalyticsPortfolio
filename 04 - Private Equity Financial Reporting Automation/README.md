# 04 - Private Equity Financial Reporting Automation

In a similar vein as 03 Automated Medical Financial Reporting, this one was another good challenge in transforming a client's existing financial reporting deck into a fully automated Power BI report. I took over this project half-way in and helped finish it up week by week, ensuring that the math and design matched what they needed. There were also some tricky formatting needs they had that was a good test to push myself in what I can develop in Power BI.

## Project Details
- [Details](#details)
- [By the Numbers](#by-the-numbers)
- [Tools Used](#tools-used)
- [What I learned](#what-i-learned)
- [Useful resources](#useful-resources)

## Details

Coming soon!

Files included for view in this project:
- Private Equity Financial Reporting Automation.pdf
  - Masked file version that is currently being used by the client

## By the Numbers

- 3 months of development time
- 5 colleagues collaborated with
- 15 report pages
- 1 data source
- 29 queries connected to data source

## Tools Used

- Excel
- Power BI
  - DAX
  - Power Query
- SharePoint (data source)

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