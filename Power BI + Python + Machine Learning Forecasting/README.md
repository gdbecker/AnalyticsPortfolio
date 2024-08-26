# Power BI + Python + Machine Learning Forecasting

My director asked one of my colleagues and I to try building a machine learning model to predict revenue, using either R or Python. The key idea was to spend time investing in research for building a scalable model that could be used for potential future engagements with clients to add greater value. This was a great challenge not only putting together concepts I taught myself in an online Python machine learning course, but also think strategically about our work and what we could help customers unlock with their information for better decision making.

### [Live Demo](https://app.powerbi.com/view?r=eyJrIjoiNTY4NmVhOTEtNzMyNy00MTI1LThmNjQtOGMzNzEyNjMxYjZjIiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9)

!["Report"](./Power%20BI%20+%20Python%20+%20Machine%20Learning%20Forecasting.jpg)

## Project Details
- [Power BI + Python + Machine Learning Forecasting](#power-bi--python--machine-learning-forecasting)
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

In order to show clients the art of what was possible with machine learning and analysis, my colleague and I had to find datasets that would be funneled into the model to predict revenue, and we also needed raw revenue numbers to test our models against. I used Python as the base for this project, and found a handful of free economic sources to predict Walmart revenue data available via press releases. I first tested out all API and web scraping connections with Jupyter notebooks to ensure that data was being collected accurately per month, and tested merging all datasets to overlap on the same months. From there I branched into linear and KNN regression models and tested each for model strength and to display how accurate they were predicting Walmart's revenue based on various economic factors. The key challenge at the end was to combine my Python code with Power BI and it felt great merging my code within this environment to make refreshing easy, plus being able to quickly view how each model performed. I also included an exploratory tab to view the merged dataset and how the various factors stack up.

Economic datasets gathered with Python:
- [GDP from US Bureau of Economic Analysis](https://apps.bea.gov/api/data)
- [Price index from US Bureau of Economic Analysis](https://apps.bea.gov/api/data)
- [Gas prices from US Energy Information Administration](https://api.eia.gov/v2/petroleum/pri/gnd/data/?frequency=monthly&data[0]=value&facets[product][]=EPM0&facets[duoarea][]=NUS&start=1990-08&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000&api_key=Bdgf7N1rGlQoLjcn00cdRrll3eM11ohy2I3TTJvE)
- [Annual commercial carbon-dioxide emissions from US Energy Information Administration](https://api.eia.gov/v2/co2-emissions/co2-emissions-aggregates/data/?frequency=annual&data[0]=value&facets[stateId][]=US&facets[sectorId][]=CC&facets[fuelId][]=TO&start=1970&sort[0][column]=period&sort[0][direction]=desc&offset=0&length=5000&api_key=Bdgf7N1rGlQoLjcn00cdRrll3eM11ohy2I3TTJvE)
- [Population from US Census Bureau](https://www.census.gov/data/tables/time-series/dec/popchange-data-text.html)

Files included for view in this project:
- **Power BI + Python + Machine Learning Forecasting.pdf**
- **01 - Revenue - Linear Regression.ipynb**: Jupyter notebook containing linear regression ML code
- **02 - Revenue - KNN Regression.ipynb**: Jupyter notebook containing KNN regression ML code

## By the Numbers

- 2 months of development time
- 2 colleagues collaborated with
- 3 report pages
- 6 data sources
- 6 queries connected to data sources

## Tools Used

- Excel
- Power BI
  - DAX
  - Power Query
- Python

## Data Engineering Pipeline

!["Pipeline"](./Power%20BI%20+%20Python%20+%20Machine%20Learning%20Forecasting%20Pipeline.png)

## Data Model

!["Data Model"](./Power%20BI%20+%20Python%20+%20Machine%20Learning%20Forecasting%20Data%20Model.JPG)

## What I learned

Below are some code snippets I'm proud of from this project:

Web scraper for getting GDP data from US Bureau of Economic Analysis
```Python
# Initial variables
dates = []
values = []

# Getting data from Bureau of Economic Analysis API, 1 year at a time
url = "https://apps.bea.gov/api/data"
parameters = {
    "UserID": "90974B6B-A7A5-4CBF-A6F9-E553BEEB0B25",
    "method": "getdata",
    "datasetname": "GDPByIndustry",
    "ResultFormat": "JSON",
    "Frequency": "Q",
    "Industry": "ALL",
    "TableID": "1",
    "Year": "ALL"
}

response = requests.get(url=url, params=parameters)
response.raise_for_status()
data = response.json()["BEAAPI"]["Results"][0]["Data"]

for d in data:
    if d["IndustrYDescription"] == "Gross domestic product":
        quarter = d["Quarter"]
        month = 0

        if quarter == "I":
            month = 1
        elif quarter == "II":
            month = 4
        elif quarter == "III":
            month = 7
        elif quarter == "IV":
            month = 10

        for x in range(3):
            date = str(month) + "/1/" + d["Year"]
            dates.append(date)
            values.append(float(d["DataValue"]))
            month += 1

# Make GDP dictionary, assign to a DataFrame, convert to csv
data_dict = {
    "Date": dates,
    "GDP_Value": values
}

df_gdp = pd.DataFrame(data_dict)
```

Setting up training and testing sets
```Python
x = df.drop(['Revenue_Value', "Date"], axis=1).values
y = df['Revenue_Value'].values

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.3, random_state=101)
```

Plotting predictions vs actuals
```Python
g = sns.jointplot(x=y_test, y=predictions, data=None, kind='reg', joint_kws={'line_kws':{'color':'orange'}})
g.set_axis_labels('Actual', 'Predictions', fontsize=12)
```

## Useful Resources

- [Running Python in Power BI](https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-python-scripts) - Handy guide from Microsoft regarding getting Python set up within Power BI, and to use as a data source
- [Python Visualizations in Power BI](https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-python-visuals) - Another Microsoft guide to run Python scripts on report pages to create visualizations
