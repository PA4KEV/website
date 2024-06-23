Elm - Maybe Map
===============

Here, a tooltip title attribute needs to be added if it is **Just**.

```elm
let   
    divAttributes =
        [ HA.classList
            [ ( "my-div", True ) ]
        ]

    combinedAttributes = 
        case settings.tooltip of
            Just tooltip ->
                divAttributes ++ [ HA.title tooltip ]
            
            Nothing ->
                divAttributes
in
H.div
    combinedAttributes
    [ content ]
        
```

This can be easier written with the [Maybe.map](https://package.elm-lang.org/packages/elm/core/latest/Maybe#map) and [Maybe.withDefault](https://package.elm-lang.org/packages/elm/core/latest/Maybe#withDefault) functions.

```elm

let
    divAttributes =
        [ HA.classList
            [ ( "my-div", True ) ]
        ]
    
    tooltipAttribute =
        Maybe.map (\tooltip -> [ HA.title tooltip ]) settings.tooltip |> Maybe.withDefault []
        -- or you can do:
        settings.tooltip |> Maybe.map (\tooltip -> [ HA.title tooltip ]) |> Maybe.withDefault []

in
H.div
    (divAttributes ++ tooltipAttribute)
    [ content ]
```