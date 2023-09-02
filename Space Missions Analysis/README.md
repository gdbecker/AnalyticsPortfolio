# Space Missions Analysis

Python data science project from Anglea Yu's course [100 Days of Code: Python on Udemy](https://www.udemy.com/course/100-days-of-code/). This is a professional portfolio project to showcase what I learned from the 100 day challenge.

!["Space Missions Analysis.jpg"](./Space%20Missions%20Analysis.jpg)

## Project Details
- [Details](#details)
- [Link to Demo](#link-to-demo)
- [Tools Used](#tools-used)
- [What I learned](#what-i-learned)

## Details

This analysis digs into the [Space Missions Launches](https://www.kaggle.com/datasets/sefercanapaydn/mission-launches) dataset from Kaggle. Loads data in, cleans as necessary for NaN or null values, and explores the data via a series of questions.

## Link to Demo

[Kaggle Notebook](https://www.kaggle.com/code/garrettbecker/space-missions-analysis/notebook)

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

Answering the question: How has the dominance of launches changed over time between the different players?
```python
line_chart = px.line(
    launches_by_year_by_org,
    x=launches_by_year_by_org["year"],
    y=launches_by_year_by_org["Date"],
    color=launches_by_year_by_org["Organisation"],
    hover_name=launches_by_year_by_org["Organisation"]
)

line_chart.update_layout(
    xaxis_title="Year",
    yaxis_title="Number of Launches"
)

line_chart.show()
```

Charting the number of launches per year
```python
plt.figure(figsize=(8,4), dpi=200)

with sns.axes_style("darkgrid"):
    ax = sns.scatterplot(
        data=num_launches_per_year,
        x=num_launches_per_year.index,
        y=num_launches_per_year.values,
        color="dodgerblue"
    )

    ax.set(
        xlabel="Year",
        ylabel="Number of Launches"
    )
```
