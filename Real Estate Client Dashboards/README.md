# Real Estate Client Dashboards

There was an existing real estate tax client of the firm that was interested in a reporting solution for a few of their KPIs, and my team was able to step in and help. After exploring several options of what we could do, we decided on building reports with a new platform we had not used yet, Google Looker, to increase our analytics and reporting capabilities.

### [Live Demo](https://lookerstudio.google.com/embed/reporting/c258c8a7-f73d-4e4c-a64a-bfc30a01b4c6/page/j2R3D)

!["Report"](./Real%20Estate%20Client%20Dashboards.jpg)

## Project Details
- [Real Estate Client Dashboards](#real-estate-client-dashboards)
    - [Live Demo](#live-demo)
  - [Project Details](#project-details)
  - [Details](#details)
  - [By the Numbers](#by-the-numbers)
  - [Tools Used](#tools-used)
  - [Data Engineering Pipeline](#data-engineering-pipeline)
  - [What I learned](#what-i-learned)
  - [Useful Resources](#useful-resources)

## Details

This was a tricky one at first simply because we didn't have Google Looker experience with clients yet before starting. But before we signed the engagement, it did make most sense to go this route because this real estate client already was using Google for all their business and operations, and it would be less expensive for them in the long run to use a built-in tool that seamlessly connected with their sources. I got to dive straight in and figure everything out from scratch - from pulling in Google Sheets data sources, to writing calculations, to crafting the layouts and visuals. While there are some things that are similar to Power BI, such as the UI and generally how building reports work, there were still quite a bit that was different which needed extra time to figure out. Especially figuring out how to incorporate our client's metric calculations. It was so different that it was cumbersome at times getting it to work, but it's always worth persevering to find a solution to make it work; sometimes half the battle is just getting the math to work and work correctly!

The other tricky part was figuring out how these dashbaords would connect to their data, and we worked all this out beforehand. Appfolio Property Manager does have an API reporting systems can connect to for easy updates, but it required a higher paying tier to access. We settled on exporting certain Appfolio reports into csv files, which our client would maintain by copying/pasting the data into our Google Sheets, and then a manual refresh button in Looker would show the changes.

Files included for view in this project:
- **Real Estate Client Dashboards.pdf**: Masked file version that was developed

## By the Numbers

- 1 month of development time
- 3 colleagues collaborated with
- 7 report pages
- 6 data sources
- 6 queries connected to data sources

## Tools Used

- Google Looker
- Google Sheets (data source - contains exports from Appfolio)

## Data Engineering Pipeline

!["Pipeline"](./Real%20Estate%20Client%20Dashboards%20Pipeline.png)

## What I learned

Below are some code snippets I'm proud of from this project:

Calculated field for our client's average annual return (this was tricky getting to finally work!)
```LookML
(
	NARY_MAX(2012, 0) +
    NARY_MAX(2013, 0) +
    NARY_MAX(2014, 0) +
    NARY_MAX(2015, 0) +
    NARY_MAX(2016, 0) +
    NARY_MAX(2017, 0) +
    NARY_MAX(2018, 0) +
    NARY_MAX(2019, 0) +
    NARY_MAX(2020, 0) +
    NARY_MAX(2021, 0) +
    NARY_MAX(2022, 0) +
    NARY_MAX(2023, 0) +
    (
    	NARY_MAX(((Total 2024 Amount / DATE_DIFF(Current Date, Current Year)) * 365) / Cash Invested, 0)
    )
) / Average Annual Return Denominator
```

Return on Assets calculation
```LookML
SUM(Net Income) / SUM(Assets)
```

Weighted return on trailing twelve months (felt awesome getting this one to work)
```DAX
(
  (Market Value Divided / Total Market Value Divided) * 
  ((Distributions to Date / Cash Invested) / Time of Ownership)
) * (Total Last 12 Months Amount / Cash Invested)
```

## Useful Resources

- [Google Looker Calculated Fields](https://support.google.com/looker-studio/answer/6299685?hl=en#zippy=%2Cin-this-article) - Helpful reference guide I bookmarked to assist writing calculated fields for these dashboards