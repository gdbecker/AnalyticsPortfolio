# ML Tutorial Project

Beyond client projects and engagements I wanted to spend some time learning on my own other features Power BI has and what else it's capable of, and I stumbled across a couple of awesome tutorials from [Microsoft](https://learn.microsoft.com/en-us/power-bi/connect-data/service-tutorial-build-machine-learning-model) and [TheOyinbooke](https://www.youtube.com/watch?app=desktop&v=LTlaq9mpJj8) on YouTube, [Github link here](https://github.com/theoyinbooke/Machine-Learning-with-Power-BI/tree/main). This tutorial is a mini project that explored a few of the AI functions behind the scenes in Power Query as well as standing up a full ML model in Power BI Service's Power Query. 

### [Live Demo](https://app.powerbi.com/view?r=eyJrIjoiZjIyMmU3Y2QtZDA5OC00MDNmLTlmZjEtOWY0NzkxYmU3MGRjIiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9)


!["Report"](./ML%20Tutorial%20Project.jpg)

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

This was a great project to learn and get some practice in Power BI's machine learning capabilities, and I liked that it made more use of the online Power BI Service platform to make it happen. It walked through uploading a basic Excel dataset, building a data flow, and from there crafting a machine learning model to train the testing data. You can set the variables to build your prediction, set the model type and adjust how long you want to train for (the longer the better) and at the end you receive a analysis report to help you understand the final model. From there you can apply the ML model to your data flow and import "enriched" tables with predictions and detailed explanatory factors into Power BI desktop to analyze further which is what I did with this mini-project.

I'm all for ongoing learning and development and learn best by doing and getting my hands dirty. This was a great way to explore more of Power BI's capabilities for client projects!

Files included for view in this project:
- ML Tutorial Project.pdf

## By the Numbers

- < 1 month of development time
- 1 report page
- 1 data source
- 1 Power BI Service Data Flow
- 1 query connected to data source

## Tools Used

- Excel (data source)
- Power BI
  - DAX
  - Power Query
- Power BI Service
  - Data flow
  - Machine learning model

## Data Engineering Pipeline

!["Pipeline"](./ML%20Tutorial%20Project%20Pipeline.png)

## Data Model

!["Data Model"](./ML%20Tutorial%20Project%20Data%20Model.JPG)

## What I learned

Below are some code snippets I'm proud of from this project:

Selection of DAX measures used to automate the math and visuals in the report
```DAX
Total = 
CALCULATE(
    DISTINCTCOUNT('Table1 enriched Purchase explanations'[Purchase.ExplanationIndex])
)
```

```DAX
Contribution % = 
DIVIDE(
    [Total],
    CALCULATE([Total], ALL('Table1 enriched Purchase explanations'[ExplanationsDisplayText]))
)
```

## Useful Resources

- Resource: Microsoft has a handy guide for getting started with machine learning models in Power BI and using them in your reports - [take a look!](https://learn.microsoft.com/en-us/power-bi/connect-data/service-tutorial-build-machine-learning-model)