# Current Client Analytics Demo

After working through Healthcare Practice Demos, I was able to borrow quite of a few of the new functionalities I developed to make a potential addendum dashboard series for an existing Elliott Davis client. The main interest was analyzing how loans were paid off over time, and being able to slice and dice categories by different measures. It was satisfying being able to test different visuals and how they would work best given the provided data and what needed to be seen.

### [Live Demo](https://app.powerbi.com/view?r=eyJrIjoiYWJhNTBhY2ItNzE4MS00YjEzLTliMWMtN2ViMDNhMTdlYmYxIiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9)

!["Report"](./Demo%20Dashboard.jpg)

## Project Details
- [Details](#details)
- [By the Numbers](#by-the-numbers)
- [Tools Used](#tools-used)
- [Data Engineering Pipeline](#data-engineering-pipeline)
- [Data Model](#data-model)
- [What I learned](#what-i-learned)
- [Useful resources](#useful-resources)

## Details

This one was a great encouragement for me to make sure I stay diligent in documenting and saving all the work I do because sometimes you never know when it might need to be dusted off again. I first worked on this project early on in my time at Elliott Davis, but the dashboard set didn't move past my creating and sharing it with our internal lead on the enagegment. About a year later interest was sparked once more, and I was able to pull this back out, get myself reacquainted with what I made and make further adjustments and updates. Now our internal leader wants to use this dashboard set as a monthly addendum to his existing client engagement, which not only adds greater value for them but also gets the word out on the significant insights that can be drawn from data analytics. 

Files included for view in this project:
- Demo Dashboard.pdf
  - Masked file version that was developed

## By the Numbers

- 2 months of development time
- 4 colleagues collaborated with
- 9 report pages
- 1 data source
- 3 queries connected to data source

## Tools Used

- Excel
- Power BI
  - DAX
  - Power Query
- SharePoint (data source)

## Data Engineering Pipeline

!["Pipeline"](./Demo%20Dashboard%20Pipeline.png)

## Data Model

!["Data Model"](./Demo%20Dashboard%20Data%20Model.JPG)

## What I learned

Below are some code snippets I'm proud of from this project:

Custom DAX table to allow users to dynamically select categories to slice by
```DAX
LT Legend Categories = 
    UNION(
        DISTINCT(SELECTCOLUMNS(
            'Loan Tape',
            "Category", 'Loan Tape'[Law Firm],
            "Field", "Law Firm"
        )),
        DISTINCT(SELECTCOLUMNS(
            'Loan Tape',
            "Category", 'Loan Tape'[Facility],
            "Field", "Facility"
        )),
        DISTINCT(SELECTCOLUMNS(
            'Loan Tape',
            "Category", 'Loan Tape'[Type of Accident],
            "Field", "Type of Accident"
        ))
    )
```

DAX table filter that allows measures to be used in slicers
```DAX
Number Filter - Accounts = GENERATESERIES(0, [Number of Accounts], 1)
```

This measure, combined with above, allows measures to be used in slicers
```DAX
Measure Filter - Accounts = 
    VAR MinValue = MIN('Number Filter - Accounts'[Value])
    VAR MMaxValue = MAX('Number Filter - Accounts'[Value])
    VAR CurrentMeasureValue = [Number of Accounts]

    RETURN
        IF(CurrentMeasureValue >= MinValue && CurrentMeasureValue <= MMaxValue,
            1,
            0
        )
```

## Useful Resources

- [Power BI: Filter by a measure in a slicer](https://www.youtube.com/watch?v=AZAL-QPn5Zc) - Filtering visuals by DAX measure values is not natively supported in Power BI but this video helped me find a clever solution
- [Power BI: Dynamic axes and legends](https://www.youtube.com/watch?v=8e8a3o1w51M) - Perfect for making visuals with dynamic axes so users can pick what category they want to view by