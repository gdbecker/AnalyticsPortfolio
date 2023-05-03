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

Selection of DAX measures used to automate the math and visuals in the report
```DAX
Total Revenue Budget = 
CALCULATE(
    SUM('P&L Data Budget'[Adjusted Value]), 
    'P&L Data Budget'[Account Name] = "Total Income"
)
```

```DAX
7 - MTD Gross Margin = [1 - MTD PY Gross Margin] + [3 - Avg Ticket Price] + [4 - Materials] + [5 - Labor] + [6 - Other]
```

```DAX
Color Formating - TTM = 
SWITCH ( 
    SELECTEDVALUE('TTM Appendix'[Calculation Category 1]),
    "TTM Revenue", 
        SWITCH(
            SELECTEDVALUE('TTM Appendix'[Calculation Category 2]),
            "Entity One", " #006400",
            "Entity Two", "#118DFF",
            "Entity Three", "#BB3385",
            "Entity Four",
                SWITCH(
                    SELECTEDVALUE('TTM Appendix'[Calculation Category 3]),
                    "TTM", "Red",
                    "#AA6C39"
                ),
            "Blue"
        ),
    "TTM Gross Profit",
        SWITCH(
            SELECTEDVALUE('TTM Appendix'[Calculation Category 2]),
            "Entity One"", " #006400",
            "Entity Two", "#118DFF",
            "Entity Three", "#BB3385",
            "Entity Four",
                SWITCH(
                    SELECTEDVALUE('TTM Appendix'[Calculation Category 3]),
                    "TTM", "Red",
                    "#AA6C39"
                ),
            "Blue"
        ),
    "TTM Gross Margin",
        SWITCH(
            SELECTEDVALUE('TTM Appendix'[Calculation Category 2]),
            "Entity One"", " #006400",
            "Entity Two", "#118DFF",
            "Entity Three", "#BB3385",
            "Entity Four",
                SWITCH(
                    SELECTEDVALUE('TTM Appendix'[Calculation Category 3]),
                    "TTM", "Red",
                    "#AA6C39"
                ),
            "Blue"
        ),
    "TTM Adjusted EBITDA",
        SWITCH(
            SELECTEDVALUE('TTM Appendix'[Calculation Category 2]),
            "Entity One"", " #006400",
            "Entity Two", "#118DFF",
            "Entity Three", "#BB3385",
            "Entity Four",
                SWITCH(
                    SELECTEDVALUE('TTM Appendix'[Calculation Category 3]),
                    "TTM", "Red",
                    "#AA6C39"
                ),
            "Blue"
        ),
    "Blue"
)
```

## Useful Resources

- Tip/trick: You can easily connect to your organization's internal SharePoint site with this URL as a data source in Power BI: https://{organization_name}.sharepoint.com/sites/{site_name}/
  - This has come in handy whenever I've needed SharePoint as a data source