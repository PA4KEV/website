Elm - Maybe AndThen
===================

Gegeven zijn deze functies: **hasPrecedingReleasedVersions** en **getSelectedItemIndex**. Deze moeten aangepast worden.


```elm

hasPrecedingReleasedVersions =
    case getSelectedItemIndex data.versionData of
        Just index ->
            Array.slice 0 index data.versionData.allItems
                |> Array.toList
                |> List.any
                    (\item ->
                        case item of
                            ReleasedVersion _ ->
                                True
                            _ ->
                                False
                    )
        Nothing ->
            False
```

Momenteel is **getSelectedItemIndex** zo gedefineerd:

```elm

getSelectedItemIndex : Model id -> Maybe Int
getSelectedItemIndex model =
    case getSelectedItem model of
        Just selected ->
            Array.toIndexedList model.allItems
                |> List.filter (\( _, item ) -> item == selected)
                |> List.head
                |> Maybe.map Tuple.first

        Nothing ->
            Nothing


```

Door een [Maybe.andThen](https://package.elm-lang.org/packages/elm/core/latest/Maybe#andThen) te gebruiken, kunnen we de **Nothing -> Nothing** weglaten.
Ook de **List.filter** en **List.head** combinatie kan verkort werden met een **List.find**.

```elm

getSelectedItemIndex : Model id -> Maybe Int
getSelectedItemIndex model =
    getSelectedItem model
        |> Maybe.andThen
            (\selected ->
                Array.toIndexedList model.allItems
                    |> List.find (\( _, item ) -> item == selected)                
                    |> Maybe.map Tuple.first
            )


```

Ten slotte, defineer een nieuwe functie om de boolean te achterhalen:

```elm

itemIsReleased : VersionData id -> Bool
itemIsReleased versionData =
    case versionData of
        WorkingVersion _ ->
            False
        ReleasedVersion
            True

```

De originele functie kan nu veranderd worden naar:

```elm

hasPrecedingReleasedVersions =
    case getSelectedItemIndex data.versionData of
        Just index ->
            Array.slice 0 index data.versionData.allItems
                |> Array.toList
                |> List.any itemIsReleased
        Nothing ->
            False
```