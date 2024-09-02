# Medical Billing Service Provider Dashboards

This was a fun one for many reasons: this client approached us in need of automating a handful of reports they already used, as well as developing a set of brand new ones that would help them clean up their business processes and discover new insights. It was also fantastic experience working on another healthcare industry-related project and finding out more about their business in each week we collaborated. It was very much a partnership between us from the beginning - making sure we understood their math & logic to work through the DAX challenges we faced, as well as diving into their forecasting. 

### [Live Demo](https://app.powerbi.com/view?r=eyJrIjoiMDZiZGJjMDEtM2U5My00MWJiLTgyYjgtNzRiNDFmZDRjZGVhIiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9)

!["Report"](./Medical%20Billing%20Service%20Provider%20Dashboards.jpg)

## Project Details
- [Medical Billing Service Provider Dashboards](#medical-billing-service-provider-dashboards)
    - [Live Demo](#live-demo)
  - [Project Details](#project-details)
  - [Details](#details)
  - [By the Numbers](#by-the-numbers)
  - [Tools Used](#tools-used)
  - [Data Engineering Pipeline](#data-engineering-pipeline)
  - [Data Model](#data-model)
  - [What I learned](#what-i-learned)
  - [Useful Resources](#useful-resources)

## Details

In the same vein as other client projects, we first approached our engagement by exploring the client's existing data and reports, asking questions each week during our status meetings and working sessions to ensure understanding. For our scope we agreed on a mixed set of reports: several that they already used during internal update calls, as well as a few new ones they wanted developed so they could streamline their business logic in order to make better informed decisions (including a forecast and week-by-week variance report).

We ultimately landed on three data sources to build out our data model: QuickBooks Online for current financial data, Salesforce for prospecting, and an Excel file in Sharepoint to contain static information. My colleague and I had great practice building out a model between all three to effectively connect the sources together, as well as powering through the numerous DAX challenges that came up due to the nature of our client's calculation complexity. Between the math verification and developing new reports, this project gave me a lot of practice and comfort in collaborating with clients remotely, remain flexible in fine-tuning our model and report structure, as well as overcoming DAX challenges as creatively as possible. I'm still amazed we were able to accomplish everything we did with this one! We had a great time with this client and delivered a reporting solution they were happy with to accurately and ethically display their data for better analysis and understanding.

Files included for view in this project:
- [`Medical Billing Service Provider Dashboards.pdf`](./Medical%20Billing%20Service%20Provider%20Dashboards.pdf): Masked file version that was developed

## By the Numbers

- 3 months of development time
- 5 colleagues collaborated with
- 9 report pages
- 3 data sources
- 17 queries connected to data sources

## Tools Used

- Excel
- Power BI
  - DAX
  - Power Query
- QuickBooks Online (data source)
- Salesforce (data source)
- SharePoint (data source)

## Data Engineering Pipeline

!["Pipeline"](./Medical%20Billing%20Service%20Provider%20Dashboards%20Pipeline.png)

## Data Model

!["Data Model"](./Medical%20Billing%20Service%20Provider%20Dashboards%20Data%20Model.jpg)

## What I learned

Below are some code snippets I'm proud of from this project:

DAX formula for a custom virtual table, needed for a complex set of client calculations
```DAX
CLV = 
VAR summary = 
SUMMARIZECOLUMNS(
    'Date Table'[Month Start],
    'Profit & Loss'[CustomerRef.name],
    "Total Sales", [Revenue],
    "Client Count", [# Distinct Clients],
    "Previous Month", 
        CALCULATE(
            MAX('Date Table'[Month Start]),
            FILTER( 
                ALL('Date Table'),
                'Date Table'[Index] < MAX( 'Date Table'[Index] )
            )
        ),
     "Next Month", 
        CALCULATE(
            MIN('Date Table'[Month Start]),
            FILTER( 
                ALL('Date Table'),
                'Date Table'[Index] > MIN( 'Date Table'[Index] )
            )
        ),
    "Client Count Previous Month",
        CALCULATE(
            [# Distinct Clients],
            FILTER( 
                ALL('Date Table'),
                'Date Table'[Month Start] = CALCULATE(MAX('Date Table'[Month Start]), FILTER(ALL('Date Table'), 'Date Table'[Index] < MAX( 'Date Table'[Index])))
            )
        ),
    "Total Sales Previous Month",
       CALCULATE(
            [Revenue],
            FILTER( 
                ALL('Date Table'),
                'Date Table'[Month Start] = CALCULATE(MAX('Date Table'[Month Start]), FILTER(ALL('Date Table'), 'Date Table'[Index] < MAX( 'Date Table'[Index])))
            )
        ),
    "Total Sales Next Month",
       CALCULATE(
            [Revenue],
            FILTER( 
                ALL('Date Table'),
                'Date Table'[Month Start] = CALCULATE(MIN('Date Table'[Month Start]), FILTER(ALL('Date Table'), 'Date Table'[Index] > MIN( 'Date Table'[Index])))
            )
        )
)

RETURN summary
```

Using a DAX SWITCH to dynamically insert a measure based on the table row header
```DAX
RETURN
SWITCH(
    SELECTEDVALUE('CLV Table Labels'[Category]), 
    "Gross Margin % (Assumed)", [CLV - Gross Margin % (Assumed)],
    "Monthly Churn", [CLV - Monthly Churn],
    "Average Monthly Revenue Per Customer", [CLV - Average Total Sales],
    "LTV", [CLV - LTV],
    "Total Sales", [CLV - Total Sales]
)
```

Dynamic formatting based on above calculation
```DAX
SELECTEDVALUE (
    'CLV Table Labels'[Format],
    "\$#,0.00;(\$#,0.00);\$#,0.00"
)
```

## Useful Resources

- [DAX: Calculating Week by Week Variance](https://community.fabric.microsoft.com/t5/Desktop/Variance-over-week-DAX/m-p/479504) - Helpful resource I used from Microsoft Fabric online discussion threads about how to efficiently calculate week by week variance for a measure
- [Leverage Power BI Service Workspaces](https://learn.microsoft.com/en-us/power-bi/fundamentals/service-get-started) - My team and I have gotten into the practice of making online workspaces in Power BI Service which you can publish your .pbix files. Makes it super easy to quickly share work and findings, as well as give colleagues different levels of access depending on what they need
- [Power BI: Date Tables](https://www.youtube.com/watch?v=WybnTHDl-AM) - Quickly generate date tables to use in your data model