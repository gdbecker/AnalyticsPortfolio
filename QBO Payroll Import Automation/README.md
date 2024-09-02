# QBO Payroll Import Automation

There was an internal team whose work with a client had time-consuming processes to cleanse and prepare QuickBooks Online data. I was able to step in and help them save time on a few, including this preparing this payroll import, by using Power BI and Power Query.

### [Live Demo](https://app.powerbi.com/view?r=eyJrIjoiYjg4Zjc0NGUtMmY2Mi00ODY3LWI2M2YtYTBhMzIzY2IzZjUzIiwidCI6ImY3N2E4MGM5LTY5MTAtNGJkYy1iNjFiLTgxNzA2NmQ1NmI0NiIsImMiOjJ9)

!["Report"](./QBO%20Payroll%20Import%20Automation.jpg)

## Project Details
- [QBO Payroll Import Automation](#qbo-payroll-import-automation)
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

This was an unusual project because instead of preparing a dashboard for client use, I was actually making an automation tool, and I was working with one of our internal teams at the firm instead of speaking with the client directly. It was great practice and a challenge to understand the existing process for how our team was preparing this payroll report for QBO and then how to translate those steps into Power BI.

There were two standard reports the team was able to download from another source, as well as three mapping tables to translate the raw data into info that QBO would understand - I started by combining these into 5 tabs in a standard import Excel file. The end result needed to be a table with a set of certain columns which the team could import into QBO via TPI right away, so I imported each of the tabs into Power Query, and duplicated the query for "Inv Accounting Detail" because there I needed to separate out the credits and debits into separate columns. The final "TPI Import" query is the only one that needed to be loaded into the data model, and combined each of the three data source queries along with mapping table details.

Using this tool allowed our internal team to cut down time working on their client's payroll data from one week to a single hour. It felt super satisfying making a tool for them they could easily use and help ease their workload!

Files included for view in this project:
- [`QBO Payroll Import Automation.pdf`](./QBO%20Payroll%20Import%20Automation.pdf)

## By the Numbers

- < 1 month of development time
- 2 colleagues collaborated with
- 1 report pages
- 2 data sources
- 3 queries connected to data sources

## Tools Used

- Excel
- Power BI
  - DAX
  - Power Query

## Data Engineering Pipeline

!["Pipeline"](./QBO%20Payroll%20Import%20Automation%20Pipeline.png)

## Data Model

!["Data Model"](./QBO%20Payroll%20Import%20Automation%20Data%20Model.JPG)

## What I learned

Below are some code snippets I'm proud of from this project:

"Wages Payable Detail" Import: Power Query script
```M
let
    Source = Excel.Workbook(File.Contents("\QBO Payroll Import Automation\Power BI Payroll Import File.xlsx"), null, true),
    #"Wages Payable Detail_Sheet" = Source{[Item="Wages Payable Detail",Kind="Sheet"]}[Data],
    #"Promoted Headers" = Table.PromoteHeaders(#"Wages Payable Detail_Sheet", [PromoteAllScalars=true]),
    #"Changed Type" = Table.TransformColumnTypes(#"Promoted Headers",{{"Client ID", Int64.Type}, {"Client Name", type text}, {"EE ID", type text}, {"Employee Name", type text}, {"Pay Date", type date}, {"Pay Code", type text}, {"Pay Code Description", type text}, {"Pay Amount", type number}, {"Hours/Units", type number}, {"Pay Code Hours or Units", type text}}),
    #"Merged Queries" = Table.NestedJoin(#"Changed Type", {"Client Name"}, #"Mapping - Class and Location", {"Client Name"}, "Mapping - Class and Location", JoinKind.LeftOuter),
    #"Expanded Mapping - Class and Location" = Table.ExpandTableColumn(#"Merged Queries", "Mapping - Class and Location", {"QBO Class", "QBO Location"}, {"QBO Class", "QBO Location"}),
    #"Renamed Columns" = Table.RenameColumns(#"Expanded Mapping - Class and Location",{{"QBO Class", "Class"}, {"QBO Location", "Store"}}),
    #"Removed Columns" = Table.RemoveColumns(#"Renamed Columns",{"Client Name"}),
    #"Renamed Columns1" = Table.RenameColumns(#"Removed Columns",{{"Pay Date", "TxnDate"}}),
    #"Removed Columns1" = Table.RemoveColumns(#"Renamed Columns1",{"Client ID", "EE ID", "Employee Name", "Pay Code", "Hours/Units", "Pay Code Hours or Units"}),
    #"Filtered Rows" = Table.SelectRows(#"Removed Columns1", each ([Pay Code Description] <> "AUTO REIMBURSEMENT" and [Pay Code Description] <> "EXPENSES Non Taxed")),
    #"Merged Queries1" = Table.NestedJoin(#"Filtered Rows", {"Pay Code Description"}, #"Mapping - Pay Code", {"Pay Code Description"}, "Mapping - Pay Code", JoinKind.LeftOuter),
    #"Expanded Mapping - Pay Code" = Table.ExpandTableColumn(#"Merged Queries1", "Mapping - Pay Code", {"QBO Account"}, {"QBO Account"}),
    #"Removed Columns2" = Table.RemoveColumns(#"Expanded Mapping - Pay Code",{"Pay Code Description"}),
    #"Renamed Columns2" = Table.RenameColumns(#"Removed Columns2",{{"QBO Account", "Account"}, {"Pay Amount", "Debits"}})
in
    #"Renamed Columns2"
```

"Inv Accounting Detail" Import: Power Query script for just debit amounts
```M
let
    Source = Excel.Workbook(File.Contents("\QBO Payroll Import Automation\Power BI Payroll Import File.xlsx"), null, true),
    #"Inv Accounting Detail_Sheet" = Source{[Item="Inv Accounting Detail",Kind="Sheet"]}[Data],
    #"Promoted Headers" = Table.PromoteHeaders(#"Inv Accounting Detail_Sheet", [PromoteAllScalars=true]),
    #"Changed Type" = Table.TransformColumnTypes(#"Promoted Headers",{{"Client ID", Int64.Type}, {"Client Name", type text}, {"Invoice Date", type date}, {"Cost Center", type text}, {"Invoice Number", Int64.Type}, {"Invoice Total", type number}, {"Bill Code", type text}, {"Bill Code Description", type text}, {"GL Code", type text}, {"Credit Amount", type number}}),
    #"Merged Queries" = Table.NestedJoin(#"Changed Type", {"Client Name"}, #"Mapping - Class and Location", {"Client Name"}, "Mapping - Class and Location", JoinKind.LeftOuter),
    #"Expanded Mapping - Class and Location" = Table.ExpandTableColumn(#"Merged Queries", "Mapping - Class and Location", {"QBO Class", "QBO Location"}, {"QBO Class", "QBO Location"}),
    #"Renamed Columns" = Table.RenameColumns(#"Expanded Mapping - Class and Location",{{"QBO Class", "Class"}, {"QBO Location", "Store"}}),
    #"Removed Columns" = Table.RemoveColumns(#"Renamed Columns",{"Client Name"}),
    #"Renamed Columns1" = Table.RenameColumns(#"Removed Columns",{{"Invoice Date", "TxnDate"}}),
    #"Removed Columns1" = Table.RemoveColumns(#"Renamed Columns1",{"Client ID", "Cost Center", "Invoice Number", "Bill Code", "GL Code"}),
    #"Filtered Rows" = Table.SelectRows(#"Removed Columns1", each ([Bill Code Description] <> "GROSS WAGES")),
    #"Merged Queries1" = Table.NestedJoin(#"Filtered Rows", {"Bill Code Description"}, #"Mapping - Bill Code", {"Bill Code Description"}, "Mapping - Bill Code", JoinKind.LeftOuter),
    #"Expanded Mapping - Bill Code" = Table.ExpandTableColumn(#"Merged Queries1", "Mapping - Bill Code", {"QBO Account"}, {"QBO Account"}),
    #"Removed Columns2" = Table.RemoveColumns(#"Expanded Mapping - Bill Code",{"Bill Code Description"}),
    #"Renamed Columns2" = Table.RenameColumns(#"Removed Columns2",{{"QBO Account", "Account"}}),
    #"Removed Columns3" = Table.RemoveColumns(#"Renamed Columns2",{"Invoice Total"}),
    #"Renamed Columns3" = Table.RenameColumns(#"Removed Columns3",{{"Credit Amount", "Debits"}})
in
    #"Renamed Columns3"
```

"Inv Accounting Detail" Import: Power Query script for just credit amounts
```M
let
    Source = Excel.Workbook(File.Contents("\QBO Payroll Import Automation\Power BI Payroll Import File.xlsx"), null, true),
    #"Inv Accounting Detail_Sheet" = Source{[Item="Inv Accounting Detail",Kind="Sheet"]}[Data],
    #"Promoted Headers" = Table.PromoteHeaders(#"Inv Accounting Detail_Sheet", [PromoteAllScalars=true]),
    #"Changed Type" = Table.TransformColumnTypes(#"Promoted Headers",{{"Client ID", Int64.Type}, {"Client Name", type text}, {"Invoice Date", type date}, {"Cost Center", type text}, {"Invoice Number", Int64.Type}, {"Invoice Total", type number}, {"Bill Code", type text}, {"Bill Code Description", type text}, {"GL Code", type text}, {"Credit Amount", type number}}),
    #"Merged Queries" = Table.NestedJoin(#"Changed Type", {"Client Name"}, #"Mapping - Class and Location", {"Client Name"}, "Mapping - Class and Location", JoinKind.LeftOuter),
    #"Expanded Mapping - Class and Location" = Table.ExpandTableColumn(#"Merged Queries", "Mapping - Class and Location", {"QBO Class", "QBO Location"}, {"QBO Class", "QBO Location"}),
    #"Renamed Columns" = Table.RenameColumns(#"Expanded Mapping - Class and Location",{{"QBO Class", "Class"}, {"QBO Location", "Store"}}),
    #"Removed Columns" = Table.RemoveColumns(#"Renamed Columns",{"Client Name"}),
    #"Renamed Columns1" = Table.RenameColumns(#"Removed Columns",{{"Invoice Date", "TxnDate"}}),
    #"Removed Columns1" = Table.RemoveColumns(#"Renamed Columns1",{"Client ID", "Cost Center", "Invoice Number", "Bill Code", "GL Code"}),
    #"Filtered Rows" = Table.SelectRows(#"Removed Columns1", each ([Bill Code Description] <> "GROSS WAGES")),
    #"Merged Queries1" = Table.NestedJoin(#"Filtered Rows", {"Bill Code Description"}, #"Mapping - Bill Code", {"Bill Code Description"}, "Mapping - Bill Code", JoinKind.LeftOuter),
    #"Expanded Mapping - Bill Code" = Table.ExpandTableColumn(#"Merged Queries1", "Mapping - Bill Code", {"QBO Account"}, {"QBO Account"}),
    #"Removed Columns2" = Table.RemoveColumns(#"Expanded Mapping - Bill Code",{"Bill Code Description"}),
    #"Renamed Columns2" = Table.RenameColumns(#"Removed Columns2",{{"QBO Account", "Account"}}),
    #"Multiplied Column" = Table.TransformColumns(#"Renamed Columns2", {{"Credit Amount", each _ * -1, type number}}),
    #"Removed Columns3" = Table.RemoveColumns(#"Multiplied Column",{"Credit Amount", "Account"}),
    #"Grouped Rows" = Table.Group(#"Removed Columns3", {"TxnDate", "Class", "Store"}, {{"Invoice Total", each List.Average([Invoice Total]), type nullable number}}),
    #"Added Custom" = Table.AddColumn(#"Grouped Rows", "Account", each "Payroll Wages Payable"),
    #"Changed Type1" = Table.TransformColumnTypes(#"Added Custom",{{"Account", type text}}),
    #"Renamed Columns3" = Table.RenameColumns(#"Changed Type1",{{"Invoice Total", "Credits"}})
in
    #"Renamed Columns3"
```

"TPI Import": final Power Query result
```M
let
    Source = Table.Combine({#"Inv Accounting Detail - Debit Amounts", #"Inv Accounting Detail - Credit Amounts", #"Wages Payable Detail"}),
    #"Added Custom" = Table.AddColumn(Source, "Description", each null),
    #"Added Custom1" = Table.AddColumn(#"Added Custom", "Name", each null),
    #"Changed Type" = Table.TransformColumnTypes(#"Added Custom1",{{"Description", type text}, {"Name", type text}}),
    #"Sorted Rows" = Table.Sort(#"Changed Type",{{"Credits", Order.Descending}})
in
    #"Sorted Rows"
```

## Useful Resources

- [Power BI: Advanced Editor](https://www.myonlinetraininghub.com/tips-for-using-the-power-query-advanced-editor) - I've discovered the Advanced Editor view of the backend queries to be a huge help in not just changing a query data source, but also adding in custom transformation steps 
- [Get a color pallette from photos](https://www.myonlinetraininghub.com/tips-for-using-the-power-query-advanced-editor) - I like making a .json file for each project I work on that has all of the theme's styles, based on a client's existing branding. Helps to make it personal and also let's me focus more on presenting info
