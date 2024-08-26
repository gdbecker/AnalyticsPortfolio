let
  Source = Lakehouse.Contents([]),
  #"Navigation 1" = Source{[workspaceId = "fb8c5c0a-2620-4db1-9e75-976ad2f69b69"]}[Data],
  #"Navigation 2" = #"Navigation 1"{[lakehouseId = "57295ad7-476c-4050-80d4-def33926306d"]}[Data],
  #"Navigation 3" = #"Navigation 2"{[Id = "Files", ItemKind = "Folder"]}[Data],
  #"Filtered rows" = Table.SelectRows(#"Navigation 3", each ([Name] = "RecAreaData.json")),
  #"Expanded Attributes" = Table.ExpandRecordColumn(#"Filtered rows", "Attributes", {"Content Type", "Kind", "Size", "Group", "Owner", "Permissions"}, {"Content Type", "Kind", "Size", "Group", "Owner", "Permissions"}),
  #"Filtered hidden files" = Table.SelectRows(#"Expanded Attributes", each [Attributes]?[Hidden]? <> true),
  #"Invoke custom function" = Table.AddColumn(#"Filtered hidden files", "Transform file", each #"Transform file"([Content])),
  #"Removed other columns" = Table.SelectColumns(#"Invoke custom function", {"Transform file"}),
  #"Expanded Transform file" = Table.ExpandTableColumn(#"Removed other columns", "Transform file", {"CURRENT_COUNT", "TOTAL_COUNT", "LIMIT", "OFFSET", "QUERY", "Enabled", "COORDINATES", "TYPE", "Keywords", "LastUpdatedDate", "OrgRecAreaID", "ParentOrgID", "RecAreaAccessibilityText", "RecAreaDescription", "RecAreaDirections", "RecAreaEmail", "RecAreaFeeDescription", "RecAreaID", "RecAreaLatitude", "RecAreaLongitude", "RecAreaMapURL", "RecAreaName", "RecAreaPhone", "RecAreaReservationURL", "Reservable", "StayLimit"}, {"CURRENT_COUNT", "TOTAL_COUNT", "LIMIT", "OFFSET", "QUERY", "Enabled", "COORDINATES", "TYPE", "Keywords", "LastUpdatedDate", "OrgRecAreaID", "ParentOrgID", "RecAreaAccessibilityText", "RecAreaDescription", "RecAreaDirections", "RecAreaEmail", "RecAreaFeeDescription", "RecAreaID", "RecAreaLatitude", "RecAreaLongitude", "RecAreaMapURL", "RecAreaName", "RecAreaPhone", "RecAreaReservationURL", "Reservable", "StayLimit"}),
  #"Removed columns" = Table.RemoveColumns(#"Expanded Transform file", {"CURRENT_COUNT", "TOTAL_COUNT", "LIMIT", "OFFSET", "QUERY", "COORDINATES"}),
  #"Changed column type" = Table.TransformColumnTypes(#"Removed columns", {{"Enabled", type logical}, {"TYPE", type text}, {"Keywords", type text}, {"LastUpdatedDate", type date}, {"OrgRecAreaID", type text}, {"ParentOrgID", type text}, {"RecAreaAccessibilityText", type text}, {"RecAreaDescription", type text}, {"RecAreaDirections", type text}, {"RecAreaEmail", type text}, {"RecAreaFeeDescription", type text}, {"RecAreaID", type text}, {"RecAreaLatitude", type number}, {"RecAreaLongitude", type number}, {"RecAreaMapURL", type text}, {"RecAreaName", type text}, {"RecAreaPhone", type text}, {"RecAreaReservationURL", type text}, {"Reservable", type logical}, {"StayLimit", type text}}),
  #"Kept top rows" = Table.FirstN(#"Changed column type", 30)
in
  #"Kept top rows"