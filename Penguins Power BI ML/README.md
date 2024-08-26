# Penguins Power BI ML Project

Beyond client projects and engagements I wanted to spend some time learning on my own other features Power BI has and what else it's capable of, and I stumbled across a couple of awesome tutorials from [Microsoft](https://learn.microsoft.com/en-us/power-bi/connect-data/service-tutorial-build-machine-learning-model) and [TheOyinbooke](https://www.youtube.com/watch?app=desktop&v=LTlaq9mpJj8) on YouTube, [Github link here](https://github.com/theoyinbooke/Machine-Learning-with-Power-BI/tree/main). This is a mini project that combines aspects of the [ML tutorial project](../ML%20Tutorial%20Project/) and my [Python penguins body mass analysis](../Penguins%20Analysis/).

### [Live Demo](https://app.powerbi.com/view?r=eyJrIjoiOGZmY2NlMmItMjBlZC00YjgxLWJlYzQtOGFhYzliMWRmZmU2IiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9)

!["Report"](./Penguins%20Power%20BI%20ML_Page_1.jpg)

## Project Details
- [ML Tutorial Project](#ml-tutorial-project)
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

After working on the [ML tutorial project](../ML%20Tutorial%20Project/), I wanted to try ML tools I learned alongside my penguins Python analysis I completed, and see how Power BI's ML model handled predicting a penguin's body mass. I created a data flow in Power BI service and uploaded the same delays dataset as before, transformed as needed with Power Query and initiated an ML model with that data flow - the result was a "Pre-fitted Soft Voting Regressor" model with the top predictor of a penguin's body mass being 'species is Gentoo'.

After applying the ML model, I imported the "enriched" datasets into Power BI desktop and built the same explanations report I did in the tutorial, but I also wanted to explore and analyze more of the results. I built a few more reports, one to analyze how the different factors affected each of the major fields influencing predictions (island, sex, species, and year), another to dig into the prediction accuracy, and an additional to take a look at how different calculations correlate against each other. All pages allow users to switch the category to view by for better dynamic filtering.

I'm all for ongoing learning and development and learn best by doing and getting my hands dirty. This was a great way to explore more of Power BI's capabilities for client projects!

Files included for view in this project:
- **Penguins Power BI ML.pdf**

## By the Numbers

- < 1 month of development time
- 3 report pages
- 1 data source
- 1 Power BI Service Data Flow
- 3 queries connected to data source

## Tools Used

- Excel/CSV (data source)
- Power BI
  - DAX
  - Power Query
- Power BI Service
  - Data flow
  - Machine learning model

## Data Engineering Pipeline

!["Pipeline"](./Penguins%20Power%20BI%20ML%20Pipeline.png)

## Data Model

!["Data Model"](./Penguins%20Power%20BI%20ML%20Data%20Model.JPG)

## What I learned

Below are some code snippets I'm proud of from this project:

Measuring the error between actual body mass and predicted body mass from the model
```DAX
Error = 'Penguins enriched Body Mass'[Body Mass.RegressionResult] - 'Penguins enriched Body Mass'[body_mass_g]
```

One of the dynamic measures on the correlation scatter chart
```DAX
Measure Selection - X Axis (Variable Category) = 
IF(ISCROSSFILTERED('Measure Selection - X Axis'[Measure - X Axis]),
SWITCH(True(),
    VALUES('Measure Selection - X Axis'[Measure - X Axis]) = "Ave Actual Mass", [Ave Actual Mass (Variable Category)],
    VALUES('Measure Selection - X Axis'[Measure - X Axis]) = "Ave Contribution", [Ave Contribution (Variable Category)],
    VALUES('Measure Selection - X Axis'[Measure - X Axis]) = "Ave Error Mass", [Ave Error Mass (Variable Category)],
    VALUES('Measure Selection - X Axis'[Measure - X Axis]) = "Ave Regression Result", [Ave Regression Result (Variable Category)],
    VALUES('Measure Selection - X Axis'[Measure - X Axis]) = "Total", [Total (Variable Category)],
    BLANK()),BLANK())
```

Selecting values for dynamic filtering and selection
```DAX
Legend Categories = 
UNION(
    DISTINCT(SELECTCOLUMNS(
        'Penguins',
        "Category", 'Penguins'[island],
        "Field", "Island"
    )),
    DISTINCT(SELECTCOLUMNS(
        'Penguins',
        "Category", 'Penguins'[sex],
        "Field", "Sex"
    )),
    DISTINCT(SELECTCOLUMNS(
        'Penguins',
        "Category", 'Penguins'[species],
        "Field", "Species"
    )),
    DISTINCT(SELECTCOLUMNS(
        'Penguins',
        "Category", 'Penguins'[year],
        "Field", "Year"
    ))
)
```

## Useful Resources

- Resource: Microsoft has a handy guide for getting started with machine learning models in Power BI and using them in your reports - [take a look!](https://learn.microsoft.com/en-us/power-bi/connect-data/service-tutorial-build-machine-learning-model)