# Determinants of Earnings Analysis

Python data science project from Anglea Yu's course [100 Days of Code: Python on Udemy](https://www.udemy.com/course/100-days-of-code/). This is a professional portfolio project to showcase what I learned from the 100 day challenge.

!["Determinants of Earnings Analysis.jpg"](./Determinants%20of%20Earnings%20Analysis.jpg)

## Project Details
- [Details](#details)
- [Link to Demo](#link-to-demo)
- [Tools Used](#tools-used)
- [What I learned](#what-i-learned)

## Details

This analysis digs into the [Determinants of Earnings Datasets](https://www.kaggle.com/datasets/garrettbecker/determinants-of-earnings-datasets) from Kaggle. Loads data in, cleans as necessary for NaN or null values, and explores the data via a series of questions.

## Link to Demo

[Kaggle Notebook](https://www.kaggle.com/code/garrettbecker/determinants-of-earnings-analysis/notebook)

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

Answers the questions: How good our regression is also depends on the residuals - the difference between the model's predictions ( 𝑦̂ 𝑖 ) and the true values ( 𝑦𝑖 ) inside y_train. Do you see any patterns in the distribution of the residuals?
```python
plt.figure(dpi=100)
plt.scatter(x=predicted_vals,
            y=residuals,
            c='indigo', 
            alpha=0.6)  

plt.title('Residuals vs. Predicted Values (Simple Linear Regression)', fontsize=17)
plt.xlabel('Predicted Earnings $\hat y _i$', fontsize=14)
plt.ylabel('Residuals', fontsize=14)

plt.axhline(y=0, color= 'r', ls='--')

plt.show()
```

Analyze the Estimated Values & Regression Residuals
```python
# Original Regression of Actual vs. Predicted Prices
plt.figure(dpi=100)
plt.scatter(x=y_train, y=predicted_vals, c='indigo', alpha=0.6)
plt.plot(y_train, y_train, color='cyan')
plt.title(f'Actual vs Predicted Earnings: $y _i$ vs $\hat y_i$', fontsize=17)
plt.xlabel('Actual Earnings 000s $y _i$', fontsize=14)
plt.ylabel('Prediced Earnings 000s $\hat y _i$', fontsize=14)
plt.show()

# Residuals vs Predicted values
plt.figure(dpi=100)
plt.scatter(x=predicted_vals, y=residuals, c='indigo', alpha=0.6)
plt.title('Residuals vs Predicted Values', fontsize=17)
plt.xlabel('Predicted Earnings $\hat y _i$', fontsize=14)
plt.ylabel('Residuals', fontsize=14)
plt.show()
```
