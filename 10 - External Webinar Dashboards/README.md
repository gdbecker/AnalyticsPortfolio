# 10 - External Webinar Dashboards

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
- Webinar Part 1.pdf
  - Covered a masked version of a client project one of my colleagues and I worked on
- Webinar Part 2.pdf
  - Masked file version of 03 Automated Medical Financial Reporting
- Webinar Part 4.pdf
  - Masked file version a client project one of my colleagues worked on
- (There is a part 3 but was blank for the purpose of presenting)

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

- [Get a color pallette from photos](https://www.myonlinetraininghub.com/tips-for-using-the-power-query-advanced-editor) - I like making a .json file for each project I work on that has all of the theme's styles, based on a client's existing branding. Helps to make it personal and also let's me focus more on presenting info than on colors 