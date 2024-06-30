Elm - Maybe AndThen
===================

Given are these functions, **hasPrecedingReleasedVersions** and **getSelectedItemIndex**, need to be optimized.


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

Currently, **getSelectedItemIndex** is defined as such:

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

But using [Maybe.andThen](https://package.elm-lang.org/packages/elm/core/latest/Maybe#andThen) will allow to get rid of the **Nothing -> Nothing** here.
Also the **List.filter** and **List.head** combination can be shortened with a **List.find**.

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

Finally, define a custom funcion to determine the boolean:

```elm

itemIsReleased : VersionData id -> Bool
itemIsReleased versionData =
    case versionData of
        WorkingVersion _ ->
            False
        ReleasedVersion
            True

```

The original function can now be changed to:

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