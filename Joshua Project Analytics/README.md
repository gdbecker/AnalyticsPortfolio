# Joshua Project Analytics

!["Joshua Project"](./Design%20Files/Joshua_Project_Transparent_Logo_Full.png)

Coming Soon

### [Live Demo]()

!["Report"](./news-dashboard_Page_1.jpg)

## Project Details
- [Joshua Project Analytics](#joshua-project-analytics)
    - [Live Demo](#live-demo)
  - [Project Details](#project-details)
  - [Details](#details)
  - [By the Numbers](#by-the-numbers)
  - [Tools Used](#tools-used)
  - [Data Engineering Pipeline](#data-engineering-pipeline)
  - [Data Model](#data-model)
  - [Useful Resources](#useful-resources)

## Details

This was a great project to complete as someone starting out with Fabric and figuring out how to build a sustainable analytics solution; for this case that was constructing a workflow for Bing News Search analytics.

Starting out, I created a new Bing News Search resource in Azure after signing up for a free account. The resource provided authorization keys which were needed to insert into the headers of the API request. In Fabric, I created a new workspace called "Bing News Analytics Project" to contain all the items that I'd need to manage throughout, and started with a new Data Factory Pipeline called "news-ingestion-pipeline". Adding a "copy data" activity allows to establish which data source you'd like to connect and any configuration options, so for this case that was the "REST" source option. Here, I could add the endpoint for the Bing News Search API, add in authorization key headers from Azure, any query parameters to narrow down the results (like US-based articles and limiting to 100) and be able to test the connection to make sure the data was being pulled correctly. All the results were contained in a single .json file which was saved to a new Lakehouse called "bing_lake_db".

!["1_DataFactory"](./Process/1_DataFactory.JPG)
*Initial data pipeline with the copy activity*

!["2_Lakehouse"](./Process/2_Lakehouse.JPG)
*Lakehouse .json data preview*

A new notebook was created called "process-bing-news" which was the central point for data transformation. PySpark was used to pull in the .json file, run multiple commands to extract the data including the "explode" method, and compile all the crucial article information into a single dataframe. An if-statement was used to make sure only articles were selected if there were categories and thumbnail images present for the article. Incremental loading was established at the end of the notebook to add only new articles to the delta table back in bing_lake_db only if the table already exists. A try/catch block was used for the main logic here.

!["3_ProcessBingNews"](./Process/3_ProcessBingNews.JPG)
*Process Bing News notebook*

Another new notebook was made called "news-sentiment-analysis", and here is where Synapse ML was used. A pre-trained model was imported for sentiment analysis, and using PySpark, the delta table from the lakehouse was loaded in and assigned sentiment labels based on this model. Incremental loading was also established here with the same logic as in the previous notebook for new articles, and to load back into a lakehouse table.

!["4_NewsSentimentAnalysis"](./Process/4_NewsSentimentAnalysis.JPG)
*News Sentiment Analysis notebook*

!["5_Lakehouse"](./Process/5_Lakehouse.JPG)
*New Lakehouse view with both delta tables*

!["6_DataModel"](./Process/6_DataModel.JPG)
*Semantic model after loading into the Lakehouse*

Next up was creating a Power BI report with the cleaned and analyzed Bing data. I started out by aut-generating a report from the core semantic model called "news-dashboard" that included the cleaned delta table with sentiment labels from the notebook machine learning model. Another report page was developed that included measures added to the semantic model (percentages for how many articles are positive, neutral, or negative sentiments) and a table with key data fields. The auto-generated report page was redesigned as well as the custom page with a Bing .json theme I made to match the feel for the product.

!["7_Dashboard1"](./Process/7_Dashboard1.jpg)
*Custom report page*

!["8_Dashboard2"](./Process/8_Dashboard2.jpg)
*Auto-generated report page*

Once the report pages were designed and built, one of the final steps for the project was to complete the Data Factory pipeline. Going back to "news-ingestion-pipeline", two more activities were added upon completion of the previous steps: both of them notebook steps. One was for the first notebook called "process-bing-news" and the second for "news-sentiment-analysis". A parameter was created for the first "Copy data" activity to allow flexibility for which search term to use when using the GET request for the Bing API.

!["9_DataFactory"](./Process/9_DataFactory.JPG)
*Completed Data Factory pipeline*

The final step was to add a trigger with Data Activator from the custom Power BI report page. I established an alert for the measure calculating the percentage of positive articles by clicking on the card visual, and then selecting "Set alert". A Reflex item was created in another pane that allows you to configure the trigger settings for the visual and where to send the alert notification, whether that's through email or a Teams message. For this one, I chose Teams message and then selected the Reflex item back in the workspace to view the details. A time series trend up top shows when triggers happened, and many other configuration and monitoring tools are here, including who to send notifications to.

!["10_DataActivator"](./Process/10_DataActivator.JPG)
*Data Activator trigger for when the percentage of positive articles is greater than 0*

An end-to-end test was conducted to make sure the entire analytics solution performed as expected, from running the pipeline with a new search term in the parameter (such as "sports" or "movies") and checking out Reflex Data Activator and sending a test alert. This was an awesome project to become more comfortable with Fabric and build an analytics project from scratch!

!["11_WorkspaceItems"](./Process/11_WorkspaceItems.JPG)
*Workspace items for this project*

Files included for view in this project:
- **Bing News Analysis Project.pdf**: Result analysis dashboard, showcasing latest articles and sentiment labels
- **process-bing-news.ipynb**: PySpark notebook for processing the .json news data from the API
- **news-sentiment-analysis.ipynb**: PySpark notebook for using an Azure Synapse sentiment machine learning model

## By the Numbers

- < 1 month of development time
- 1 colleagues collaborated with
- 1 report page
- 1 data source
- 1 query connected to data source

## Tools Used

- Fabric 
  - Lakehouse
  - Data Factory pipeline
  - Dataflow Gen2
  - Data Activator
- Power BI
  - DAX
  - Power Query

## Data Engineering Pipeline

!["Pipeline"](./Bing%20News%20Analysis%20Project%20Pipeline.JPG)

## Data Model

!["Data Model"](./Bing%20News%20Analysis%20Project%20Data%20Model.JPG)

## Useful Resources

- [Joshua Project API Documentation](https://api.joshuaproject.net/)