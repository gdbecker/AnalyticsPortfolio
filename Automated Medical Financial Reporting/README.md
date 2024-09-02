# Automated Medical Financial Reporting

This was a great challenge with my manager to develop a solution for a client who had a manual and very time-consuming reporting process and needed something more efficient - not just for automating, but also making Power BI look less like a traditional dashboard and more like a printed report. We were able to help this client cut down their time from 1.5 weeks to about 1 day of making this report. This project was also featured in "External Webinar Dashboards and Case Study" and Blog Posts.

### [Live Demo](https://app.powerbi.com/view?r=eyJrIjoiZTY3M2RmMmUtODhmYi00MDBmLWJkMDEtNWUwMTY4ZDMxYTk0IiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9)

!["Report"](./Automated%20Medical%20Financial%20Reporting.jpg)

## Project Details
- [Automated Medical Financial Reporting](#automated-medical-financial-reporting)
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

Before jumping into this one, Elliott Davis was asked, "Can you help us automate reports to save time and meet the needs of our customers? We spend too much time on report creation, limiting our ability to focus on analysis." This project was a great exercise in stretching my understanding of what Power BI is capable of: not only can we use the app for traditional data analytics, but we can also develop automated reporting solutions to help organizations save time and care for their people better. I developed this file with ease of use and simple data connections in mind, so that our client could spend less time worrying about the technical details behind the scenes when data is refreshed through Power BI pipelines, and more time on crafting the report's narrative to share to business executives.

We were able to include automated narrative text boxes in addition to the standard line trends and pie charts displayed in this report. I thought it was neat how we could set up an Excel 'manual imports' sheet that captured the necessary values to fill in those automated narrative portions seamlessly. All in all, we helped this client cut down on their reporting time by 85%, shortening report building from 1.5 weeks to about a day.

Files included for view in this project:
- [`Automated Medical Financial Reporting.pdf`](./Automated%20Medical%20Financial%20Reporting.pdf): Masked file version that is currently being used by the client

## By the Numbers

- 4 months of development time
- 4 colleagues collaborated with
- 10 report pages
- 1 data source
- 11 queries connected to data source

## Tools Used

- Excel
- Power BI
  - DAX
  - Power Query
- SharePoint (data source)

## Data Engineering Pipeline

!["Pipeline"](./Automated%20Medical%20Financial%20Reporting%20Pipeline.png)

## Data Model

!["Data Model"](./Automated%20Medical%20Financial%20Reporting%20Data%20Model.JPG)

## What I learned

Below are some code snippets I'm proud of from this project:

Selection of DAX measures used to automate the math and visuals in the report
```DAX
All Programs - Acuity, Facility = 
CALCULATE(
    AVERAGE('Volume and Acuity Team'[Value]),
    'Volume and Acuity Team'[Team Name] = BLANK() && 'Volume and Acuity Team'[Metrics] = "Acuity, Facility"
)
```

```DAX
Per Coding Summary - % = 
CALCULATE(
    DIVIDE(
        CALCULATE(COUNT('Summary Sheet'[Original Visit Level - Severity])),
        CALCULATE(COUNT('Summary Sheet'[Original Visit Level - Severity]), ALL('Summary Sheet')) + 0),
    USERELATIONSHIP('Reference - Summary Sheet'[Code], 'Summary Sheet'[Original Visit Level])
) + 0
```

```DAX
Actual Billed Charges = CALCULATE(SUM('Summary Sheet'[Amount Billed]))
```

## Useful Resources

- Tip/trick: In order to achieve the pdf-like report view, I first exported one of the client's pdf report pages as a .png file, and then used that image as the background in the Power BI file. I overlaid text boxes/styles until I matched the needed design.