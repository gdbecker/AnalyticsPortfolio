let
  Source = Lakehouse.Contents([]),
  #"Navigation 1" = Source{[workspaceId = "fb8c5c0a-2620-4db1-9e75-976ad2f69b69"]}[Data],
  #"Navigation 2" = #"Navigation 1"{[lakehouseId = "57295ad7-476c-4050-80d4-def33926306d"]}[Data],
  #"Navigation 3" = #"Navigation 2"{[Id = "Files", ItemKind = "Folder"]}[Data],
  #"Navigation 4" = #"Navigation 3"{[Name = "CampsiteData"]}[Content],
  #"Expanded Attributes" = Table.ExpandRecordColumn(#"Navigation 4", "Attributes", {"Content Type", "Kind", "Size", "Group", "Owner", "Permissions"}, {"Content Type", "Kind", "Size", "Group", "Owner", "Permissions"}),
  #"Filtered hidden files" = Table.SelectRows(#"Expanded Attributes", each [Attributes]?[Hidden]? <> true),
  #"Invoke custom function" = Table.AddColumn(#"Filtered hidden files", "Transform file", each #"Transform file"([Content])),
  #"Removed other columns" = Table.SelectColumns(#"Invoke custom function", {"Transform file"}),
  #"Expanded Transform file" = Table.ExpandTableColumn(#"Removed other columns", "Transform file", {"CURRENT_COUNT", "TOTAL_COUNT", "LIMIT", "OFFSET", "QUERY", "ATTRIBUTES", "CampsiteAccessible", "CampsiteID", "CampsiteLatitude", "CampsiteLongitude", "CampsiteName", "CampsiteReservable", "CampsiteType", "CreatedDate", "ENTITYMEDIA", "FacilityID", "LastUpdatedDate", "Loop", "PERMITTEDEQUIPMENT", "TypeOfUse"}, {"CURRENT_COUNT", "TOTAL_COUNT", "LIMIT", "OFFSET", "QUERY", "ATTRIBUTES", "CampsiteAccessible", "CampsiteID", "CampsiteLatitude", "CampsiteLongitude", "CampsiteName", "CampsiteReservable", "CampsiteType", "CreatedDate", "ENTITYMEDIA", "FacilityID", "LastUpdatedDate", "Loop", "PERMITTEDEQUIPMENT", "TypeOfUse"}),
  #"Removed columns" = Table.RemoveColumns(#"Expanded Transform file", {"CURRENT_COUNT", "TOTAL_COUNT", "LIMIT", "OFFSET", "QUERY", "ENTITYMEDIA"}),
  #"Expanded PERMITTEDEQUIPMENT" = Table.ExpandListColumn(#"Removed columns", "PERMITTEDEQUIPMENT"),
  #"Expanded ATTRIBUTES 2" = Table.ExpandListColumn(#"Expanded PERMITTEDEQUIPMENT", "ATTRIBUTES"),
  #"Filtered rows" = Table.SelectRows(#"Expanded ATTRIBUTES 2", each ([ATTRIBUTES] <> null)),
  #"Expanded ATTRIBUTES 1" = Table.ExpandRecordColumn(#"Filtered rows", "ATTRIBUTES", {"AttributeName", "AttributeValue"}, {"AttributeName", "AttributeValue"}),
  #"Expanded PERMITTEDEQUIPMENT 1" = Table.ExpandRecordColumn(#"Expanded ATTRIBUTES 1", "PERMITTEDEQUIPMENT", {"EquipmentName", "MaxLength"}, {"EquipmentName", "MaxLength"}),
  #"Changed column type" = Table.TransformColumnTypes(#"Expanded PERMITTEDEQUIPMENT 1", {{"AttributeName", type text}, {"AttributeValue", type text}, {"CampsiteAccessible", type text}, {"CampsiteID", type text}, {"CampsiteLatitude", type number}, {"CampsiteLongitude", type number}, {"CampsiteName", type text}, {"CampsiteReservable", type logical}, {"CampsiteType", type text}, {"CreatedDate", type date}, {"LastUpdatedDate", type date}, {"FacilityID", type text}, {"Loop", type text}, {"EquipmentName", type text}, {"MaxLength", type number}, {"TypeOfUse", type text}})
in
  #"Changed column type"