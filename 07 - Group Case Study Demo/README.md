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
  - Separate file one of my colleagues made, dummy data used
- Case Study Demo - Combined.pdf
  - All of our separate demos put into one file
- Case Study Demo - GB.pdf
  - Separate file I made, dummy data used
- Retail Sample Demo - NT.pdf
  - Separate file one of my colleagues made, dummy data used
- Sample Data Set - HB.pdf
  - Separate file one of my colleagues made, dummy data used

## By the Numbers

- < 1 month of development time
- 3 colleagues collaborated with
- 20 report pages
- 1 data source
- 14 queries connected to data source

## Tools Used

- Excel
- Power BI
  - DAX
  - Power Query
- SharePoint (data source)

## What I learned

Below are some code snippets from my colleagues and I from this project:

```DAX
Cumulative Sales Forecast = 
    CALCULATE( 'Sales Forecasting'[Sales Forecast], 
        FILTER(ALLSELECTED('Date Table'[Date]),
            'Date Table'[Date] <= MAX('Date Table'[Date])
        )
    )
```

```DAX
Total Sales = 
    CALCULATE(
        SUM(Lokad_SalesOrders[PO Amount]),
        ALLEXCEPT('Date Table','Date Table'[Date])
    )
```

```DAX
Cumulative Inventory Forecast = 
    CALCULATE( 'Inventory Sales based on Sales Orders'[Inventory Qty Forecast], 
        FILTER(ALLSELECTED('Date Table'[Date]),
            'Date Table'[Date] <= MAX('Date Table'[Date])
        )
    )
```

## Useful Resources

- [Power BI: Advanced Editor](https://www.myonlinetraininghub.com/tips-for-using-the-power-query-advanced-editor) - I've discovered the Advanced Editor view of the backend queries to be a huge help in not just changing a query data source, but also adding in custom transformation steps 