# Manufacturing QuickBooks Analysis

One of our current clients liked what we built for them so much that they wanted us to focus on their financials to produce a new set of reports. This proved to be a great challenge in multiple ways - from connecting to more than one instance of QuickBooks, discovering the best way to bring the data they need in, and deepening our relationship and trust between us and the client. I also enjoyed figuring out how to cleverly manipulate DAX in different ways to achieve certain view they wished to see, including switching between MTD and QTD on the overview page, as well as the summary view table at the end. These new reports gave our client greater insight and transparency into their data to make stronger financial decisions.

!["Report"](./Manufacturing%20Quickbooks%20Analysis.jpg)

## Project Details
- [Details](#details)
- [By the Numbers](#by-the-numbers)
- [Tools Used](#tools-used)
- [Data Engineering Pipeline](#data-engineering-pipeline)
- [Data Model](#data-model)
- [What I learned](#what-i-learned)
- [Useful resources](#useful-resources)

## Details

The first big challenge was figuring out how to bring in the right tables from QuickBooks Online into Power BI - which ones did we need to provide the views they needed to see? How would we combine multiple QBO entities into one consolidated report? I aimed for simplicity and ease of understanding for others in the end: used static Excel files to house the previous QBO entity, having those datasets merge with live connected data for the new entity, and also used a "report" function built-in with the Power BI connector to QBO. This report function uses what is called a "urlfragment" that allows you to pull a specific report directly from QBO instead of finding all the tables needed to make that report - their API documentation gave me insight into the right endpoint to insert. It felt super satisfying being able to keep the data model simple and easy to understand for better maintainability.

I also liked getting to figure out new DAX manipulation to achieve certain views, including switching between MTD and YTD on the main financials page, and building a dynamic summary view on the last page. Both situations required multiple layered measures, calculations that build and stack on top of each other which most of the time needed a "switch" function to make it happen. The effort here allowed our dashboards to be consolidated all on one page, and fewer places for the client to bookmark/save which makes for a better user experience.

Files included for view in this project:
- Manufacturing QuickBooks Analysis.pdf

## By the Numbers

- 1 month of development time
- 2 colleagues collaborated with
- 3 report pages
- 2 data sources
- 5 queries connected to data sources

## Tools Used

- Power BI
  - DAX
  - Power Query
- Excel (data source)
- QuickBooks Online (data source)

## Data Engineering Pipeline

!["Pipeline"](./Manufacturing%20Quickbooks%20Analysis%20Pipeline.png)

## Data Model

!["Data Model"](./Manufacturing%20Quickbooks%20Analysis%20Data%20Model.png)

## What I learned

Below are some code snippets I'm proud of from this project:

For the Summary View Page, I used layered measures to produce the matrix visual.

Bottom layer: basic calculation (Revenue as an example)
```DAX
Revenue = 
CALCULATE(
    SUM('P&L'[Amount]), 
    'P&L'[Category] = "Income"
)
```

Middle layer: switch which basic measure to use depending on the Income Statement section 
```DAX
Summary View Calc = 
SWITCH(
    SELECTEDVALUE('Summary View Sort'[Detail]), 
    "Field Services Revenue", [Revenue - Field Services],
    "ISC Revenue", [Revenue - ISC],
    "Software Revenue", [Revenue - Software],
    "Total Revenue", [Revenue],
    "Cost of Sales", [Cost of Sales],
    "Gross Profit", [Gross Profit],
    "Gross Profit Margin", [Gross Profit Margin],
    "Operating Expenses", [Expenses],
    "Operating Income", [Operating Income],
    "Operating Income %", [Operating Income %],
    "EBITDA", [EBITDA],
    "EBITDA Margin", [EBITDA Margin],
    "Other (Income) / Expenses", [Other (Income) / Expenses],
    "Net Income", [Net Income],
    "Net Income Margin", [Net Income Margin],
    "Addbacks", [Addbacks],
    "EBITDA, As Adjusted w/o Lumen Storm Work", [EBITDA, As Adjusted w/o Lumen Storm Work],
    "EBITDA, As Adjusted Margin w/o Lumen Storm Work", [EBITDA, As Adjusted Margin w/o Lumen Storm Work],
    "EBITDA, As Adjusted w/ Lumen Storm Work", [EBITDA, As Adjusted w/ Lumen Storm Work],
    "EBITDA, As Adjusted Margin w/ Lumen Storm Work", [EBITDA, As Adjusted Margin w/ Lumen Storm Work]
)
```

Top layer: calculate the specific column needed (TTM as an example, adjusted by the month selected)
```DAX
Summary View Calc - TTM = 
VAR MaxDate = SELECTEDVALUE('Date Table'[EOMONTH])
VAR MinDate = EDATE(MaxDate,-12)
VAR Result =
    CALCULATE(
        [Summary View Calc],
        FILTER(ALL('Date Table'),
        'Date Table'[Date] <= MaxDate &&
        'Date Table'[Date] > MinDate)
    )
    
Return
    Result
```

## Useful Resources

- [QuickBooks API Documentation](https://developer.intuit.com/app/developer/qbo/docs/api/accounting/report-entities/profitandlossdetail#query-a-report) I used the "report" function within the QuickBooks to Power BI connector, and also used these docs to figure out the right "urlfragment" to use - this allowed us to pull in a specific report directly into Power BI. The Profit and Loss Detail report had everything we needed to build the dashboards
- [Leverage Power BI Service Workspaces](https://learn.microsoft.com/en-us/power-bi/fundamentals/service-get-started) - My team and I have gotten into the practice of making online workspaces in Power BI Service which you can publish your .pbix files. Makes it super easy to quickly share work and findings, as well as give colleagues different levels of access depending on what they need
