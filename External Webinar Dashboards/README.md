# External Webinar Dashboards

On April 27, 2023 I was a panelist for an external webinar Elliott Davis hosted about data analytics and how businesses could leverage data in their workplaces. The dashboards in this set are the ones I screenshared during the event, while three of my colleagues voiced-over and talked about the business cases, what we did to help solve, as well as deliver a quick demo of how Power BI works. It was a huge success and one of the firm's most popular webinars to date, and helped garner much more interest in analytics and discovering the power behind their data.

!["Webinar Part 1.jpg"](./Webinar%20Part%201.jpg)

## Project Details
- [Details](#details)
- [By the Numbers](#by-the-numbers)
- [Tools Used](#tools-used)
- [What I learned](#what-i-learned)
- [Useful resources](#useful-resources)

## Details

The first dashboard displayed is a masked version of a current e-commerce client, who needed a solution to help them track orders as they migrated from one processing system to another. During the webinar we discussed their business problem in more detail, as well as show how the report visuals interact with each other to answer performance questions. Part 2 is actually another redacted version of 03 Automated Medical Financial Reporting, and the pages here are the few we displayed during the call. The key idea was to demonstrate how Power BI can do more than traditional analytics dashboards; you can also create full-fledged automated reports that look like PDFs. The last two parts went hand-in-hand to give out audience a quick demo into how Power BI works but building out a map visual as well as a standard P&L table. 

Files included for view in this project:
- Webinar Part 1.pdf
  - Covered a masked version of a client project my colleagues and I worked on
- Webinar Part 2.pdf
  - Masked file version of 03 Automated Medical Financial Reporting
- Webinar Part 4.pdf
  - Masked file version a client project one of my colleagues worked on; this is where we did most of the demo
- (There is a part 3 but was blank for the purpose of presenting a blank file for the demo)

## By the Numbers

- 1 month of development time
- 6 colleagues collaborated with
- 6 report pages
- 3 data sources
- 56 queries connected to data sources across these three files

## Tools Used

- Python
- Excel
- Power BI
  - DAX
  - Power Query
- QuickBooks Online (data source)
- AWS (data source)
- SharePoint (data source)

## What I learned

Below are some code snippets I'm proud of from this project:

DAX measure to only calculate based on activating an inactive relationship
```DAX
Sum of Amount = 
CALCULATE(
    SUM('AWS [invoices]'[amount]),
    USERELATIONSHIP('AWS [invoices]'[name], 'AWS S3 [vendors]'[name])
)
```

Use variables in a similar way to JavaScript and use them in a Return statement for a DAX measure
```DAX
Margin = 

var invoice = 
CALCULATE(
    SUMX('AWS S3 [items]', 
        'AWS S3 [items]'[cost] * 
        'AWS S3 [items]'[quantity]), 
    'AWS S3 [vendors]'[name] <> "Shipper",
    NOT(CONTAINSSTRING('AWS S3 [items]'[sku_number], "###"))
)

Return
    IF([Price] - invoice <> 0, BLANK(), [Revenue] - [Cost])
```

Combine multiple DAX formulas into one to modularize calculation steps
```DAX
Total without Tax = 
[Sales Revenue] + [Shipping] + [Protection Plan] + [Restocking Fee] + [Discount]
```

## Useful Resources

- [Power BI: Python Data Source](https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-python-scripts) - I discovered how easy it is to use Python as a data source directly in Power BI, it is indeed powerful. I've used it in the first file of this webinar set to pull data from AWS. 