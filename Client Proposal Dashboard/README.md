# Client Proposal Dashboard

As my director was planning for potential engagements, he was looking for a template demo dashboard we could have on hand which we could easily customize for proposals. One of my colleagues started this one and I helped fine-tune the data model and take it further visually to produce the result seen here. The key idea is not only to display how we could personalize Power BI reports towards a potential client, but also showcase the basic yet powerful capabilities in these reports - from filtering, to visual interactivity, and all the way to maps and time trends.

### [Live Demo](https://app.powerbi.com/view?r=eyJrIjoiZWE0YjMwZWYtMGQ3My00YjNjLTkzNTctN2IxMDVkZjdkYjRmIiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9)

!["Report"](./Client%20Proposal%20Dashboard.jpg)

## Project Details
- [Client Proposal Dashboard](#client-proposal-dashboard)
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

One of my colleagues started off working on this one and developed the initial dashboard view and backend data model, pulling from a SharePoint Excel file, and I took it further when my director asked me to customize the file for a new proposal. It's become a standard practice for me to make a .json style file with brand colors from a client's logo to import into Power BI as a theme, and then further customize the background and other features to help make it feel like theirs. This project also turned out to be a good Excel challenge in figuring out how to create a seasonality line trend but based on dummy data. I became more familiar with the INDEX Excel function along with making a column of cumulative weights on the data table to draw from randomly, so I could control the ratio of dates we needed to see in the model. This way we could make custom dummy seasonality trends dependent upon the client's industry. Attention to detail is key.

Files included for view in this project:
- **Client Proposal Dashboard.pdf**: Example proposal dashboard, contains dummy data to show what Power BI can do

## By the Numbers

- < 1 month of development time
- 2 colleagues collaborated with
- 1 report page
- 1 data source
- 5 queries connected to data source

## Tools Used

- Excel
- Power BI
  - DAX
  - Power Query
- SharePoint (data source)

## Data Engineering Pipeline

!["Pipeline"](./Client%20Proposal%20Dashboard%20Pipeline.png)

## Data Model

!["Data Model"](./Client%20Proposal%20Dashboard%20Data%20Model.JPG)

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

- [Excel: INDEX Function](https://support.microsoft.com/en-us/office/index-function-a5dcf0dd-996d-40a4-a822-b56b061328bd) - I was able to customize the mock data for seasonality trends by using the INDEX Excel function - simply add a cumulative weight column when selecting a random value and you can adjust the ratio of dates/categories for the data