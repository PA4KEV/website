Elm - DRY
=========

DRY means: "[Don't Repeat Yourself](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)".

This page contains some common mistakes I make when writing Elm code and how I processed feedback afterwards to improve it.


```elm
let
    render item =
        case warning item of
            Just (Error tooltip) ->
                [ Html.text <| text item
                , Html.i
                    [ HtmlAttributes.class "icon-error"
                    , HtmlAttributes.title tooltip
                    ]
                ]
            -- Another case, very similar to the one above.
            Just (Warning tooltip) ->
                [ Html.text <| text item
                , Html.i
                    [ HtmlAttributes.class "icon-warning"
                    , HtmlAttributes.title <| getWarningTooltip tooltip
                    ]
                ]
            
            Nothing ->
                [ Html.text <| text item ]

```

```elm
let
    render item =
        let
            createHtml class tooltip =
                [ Html.text <| text item
                , Html.i
                    [ HtmlAttributes.class class
                    , HtmlAttributes.title tooltip
                    ]
                ]
        in
        case warning item of
            Just (Error tooltip) ->
                createHtml "icon-error" tooltip
            
            Just (Warning tooltip) ->
                createHtml "icon-warning" (getWarningTooltip tooltip)

            Nothing ->
                [ Html.text <| text item ]
```
