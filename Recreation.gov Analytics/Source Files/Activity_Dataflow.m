let
  Source = Lakehouse.Contents([]),
  #"Navigation 1" = Source{[workspaceId = "fb8c5c0a-2620-4db1-9e75-976ad2f69b69"]}[Data],
  #"Navigation 2" = #"Navigation 1"{[lakehouseId = "57295ad7-476c-4050-80d4-def33926306d"]}[Data],
  #"Navigation 3" = #"Navigation 2"{[Id = "Files", ItemKind = "Folder"]}[Data],
  #"Navigation 4" = #"Navigation 3"{[Name = "ActivityData"]}[Content],
  #"Expanded Attributes" = Table.ExpandRecordColumn(#"Navigation 4", "Attributes", {"Content Type", "Kind", "Size", "Group", "Owner", "Permissions"}, {"Content Type", "Kind", "Size", "Group", "Owner", "Permissions"}),
  #"Filtered hidden files" = Table.SelectRows(#"Expanded Attributes", each [Attributes]?[Hidden]? <> true),
  #"Invoke custom function" = Table.AddColumn(#"Filtered hidden files", "Transform file", each #"Transform file"([Content])),
  #"Removed other columns" = Table.SelectColumns(#"Invoke custom function", {"Transform file"}),
  #"Expanded Transform file" = Table.ExpandTableColumn(#"Removed other columns", "Transform file", {"CURRENT_COUNT", "TOTAL_COUNT", "LIMIT", "OFFSET", "QUERY", "RECDATA"}, {"CURRENT_COUNT", "TOTAL_COUNT", "LIMIT", "OFFSET", "QUERY", "RECDATA"}),
  #"Expanded RECDATA" = Table.ExpandRecordColumn(#"Expanded Transform file", "RECDATA", {"ActivityID", "ActivityName", "ActivityParentID", "RecAreaActivityDescription", "RecAreaActivityFeeDescription", "RecAreaID"}, {"ActivityID", "ActivityName", "ActivityParentID", "RecAreaActivityDescription", "RecAreaActivityFeeDescription", "RecAreaID"}),
  #"Removed columns" = Table.RemoveColumns(#"Expanded RECDATA", {"CURRENT_COUNT", "TOTAL_COUNT", "LIMIT", "OFFSET", "QUERY", "ActivityParentID", "RecAreaActivityDescription", "RecAreaActivityFeeDescription"}),
  #"Changed column type" = Table.TransformColumnTypes(#"Removed columns", {{"ActivityID", type text}, {"ActivityName", type text}, {"RecAreaID", type text}}),
  #"Filtered rows" = Table.SelectRows(#"Changed column type", each ([RecAreaID] <> null))
in
  #"Filtered rows"