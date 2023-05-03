# 07 - Group Case Study Demo

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
- Case Study - Sales Forecasting.pdf
  - Example proposal dashboard, contains dummy data to show what Power BI can do
- Case Study Demo - Combined.pdf
  - Example proposal dashboard, contains dummy data to show what Power BI can do
- Case Study Demo - GB.pdf
  - Example proposal dashboard, contains dummy data to show what Power BI can do
- Retail Sample Demo - NT.pdf
  - Example proposal dashboard, contains dummy data to show what Power BI can do
- Sample Data Set - HB.pdf
  - Example proposal dashboard, contains dummy data to show what Power BI can do

## By the Numbers

- < 1 month of development time
- 3 colleagues collaborated with
- 1 report pages
- 1 data source
- 5 queries connected to data source

## Tools Used

- Excel
- Power BI
  - DAX
  - Power Query
- SharePoint (data source)

## What I learned

Below are some code snippets I'm proud of from this project:

```DAX
MTD Revenue = 
IF(
    TOTALMTD(SUM(Transactions[Amount]), Dates[Date]) == BLANK(), 0, 
    TOTALMTD(SUM(Transactions[Amount]), Dates[Date])
)
```

```DAX
MTD % Change YoY = IFERROR(([MTD Revenue] - [LY MTD Revenue]) / [LY MTD Revenue], 0)
```

```DAX
YTD Revenue = TOTALYTD(SUM(Transactions[Amount]), Dates[Date])
```

## Useful Resources

- [Excel: INDEX Function](https://support.microsoft.com/en-us/office/index-function-a5dcf0dd-996d-40a4-a822-b56b061328bd) - I was able to customize the mock data for seasonality trends by using the INDEX Excel function - simply add a cumulative weight column when selecting a random value, and you can adjust the ratio of dates/categories for the data