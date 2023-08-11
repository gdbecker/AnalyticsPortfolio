# 07 - Group Case Study Demo

Earlier on in my time at Elliott Davis my manager was looking for a dashboard pack we could showcase in a variety of settings to get the word out on the Data & Analytics service line at our firm, as well as provide a starter point of conversation for clients interested in adding on analytics for their engagements. A couple of colleagues and I first worked on our own files and individual dummy data models across different industries - and then from which I combined everything into one file we could post online to our Power BI Service Workspace. As with other demos/proposals I worked on this one was a great showcase of what my team and I could do as well as the significant functionality within Power BI.

## Project Details
- [Details](#details)
- [By the Numbers](#by-the-numbers)
- [Tools Used](#tools-used)
- [What I learned](#what-i-learned)
- [Useful resources](#useful-resources)

## Details

The guidelines on this one were loose for the purpose of being able to show anything we had learned in the app up to this point, with the goal of showcasing Power BI's capabilities as best as possible. My manager wanted each of us to choose a different industry to form dummy data in and then create visuals from, so we picked construction, retail and e-commerce as our focal points. Each file had a different style, so when I combined them altogether I established a theme to match Elliott Davis's branding as close as possible. It was a great challenge to start figuring out the Advanced Editor in the Power Query backend in order to copy the data pipelines and sources from other files into one, as well as making sure the three data models were copied exactly.

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