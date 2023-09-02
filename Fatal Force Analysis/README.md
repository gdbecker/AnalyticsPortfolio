# Fatal Force Analysis

Python data science project from Anglea Yu's course [100 Days of Code: Python on Udemy](https://www.udemy.com/course/100-days-of-code/). This is a professional portfolio project to showcase what I learned from the 100 day challenge.

!["Fatal Force Analysis.jpg"](./Fatal%20Force%20Analysis.jpg)

## Project Details
- [Details](#details)
- [Link to Demo](#link-to-demo)
- [Tools Used](#tools-used)
- [What I learned](#what-i-learned)

## Details

This analysis digs into the following datasets from Kaggle:
- [Fatal Police Shootings in the US](https://www.kaggle.com/datasets/abhi8923shriv/fatalpoliceshootingsintheus)
- [Percentage of People Below Poverty Level](https://www.kaggle.com/datasets/musti12/percentage-people-below-poverty-level) 
- [Police Killings in the US](https://www.kaggle.com/datasets/azizozmen/police-killings-us) 
- [Sharing Race by City](https://www.kaggle.com/datasets/musti12/sharing-race-by-city) 

Loads data in, cleans as necessary for NaN or null values, and explores the data via a series of questions.

## Link to Demo

[Kaggle Notebook](https://www.kaggle.com/code/garrettbecker/fatal-force-analysis/notebook)

## Tools Used

- Python
- Excel
- numpy
- pandas
- plotly
- matplotlib
- seaborn

## What I learned

Below are some code snippets I'm proud of from this project:

Bar Chart with Subsections Showing the Racial Makeup of Each US State
```python
bar = px.bar(
    df_share_race_city_by_state,
    x="Geographic area",
    y=["share_white", "share_black", "share_native_american", "share_asian", "share_hispanic"],
    title="Percent Race by US State",
    labels={"value": "percent", "variable": "race"}
)

bar.update_layout(
    xaxis_title="US State",
    yaxis_title="Percent Race",
    coloraxis_showscale=False
)

bar.show()
```

Answers the question: Which states are the most dangerous?
```python
fatalities_by_state = df_fatalities["state"].value_counts().reset_index()
fatalities_by_state = fatalities_by_state.sort_values(by="state", ascending=False)

px.choropleth(
    data_frame=fatalities_by_state,
    locations='index',
    locationmode="USA-states", 
    scope="usa",
    color='state',
    color_continuous_scale='matter'
)
```
