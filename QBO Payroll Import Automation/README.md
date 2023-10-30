# QBO Payroll Import Automation

Coming soon!

### [Live Demo]()

!["Report"](./QBO%20Payroll%20Import%20Automation.jpg)

## Project Details
- [Details](#details)
- [By the Numbers](#by-the-numbers)
- [Tools Used](#tools-used)
- [Data Engineering Pipeline](#data-engineering-pipeline)
- [Data Model](#data-model)
- [What I learned](#what-i-learned)
- [Useful resources](#useful-resources)

## Details

Coming soon!

Files included for view in this project:
- QBO Payroll Import Automation.pdf

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

- [Running Python in Power BI](https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-python-scripts) - Handy guide from Microsoft regarding getting Python set up within Power BI, and to use as a data source
- [Python Visualizations in Power BI](https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-python-visuals) - Another Microsoft guide to run Python scripts on report pages to create visualizations
