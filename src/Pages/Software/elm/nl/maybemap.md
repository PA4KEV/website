Elm - Maybe Map
===============

hier moet een tooltip als title attribuut worden toegevoegd als deze **Just** is.

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

Dit kan makkelijker met de [Maybe.map](https://package.elm-lang.org/packages/elm/core/latest/Maybe#map) en [Maybe.withDefault](https://package.elm-lang.org/packages/elm/core/latest/Maybe#withDefault) functies.

```elm

let
    divAttributes =
        [ HA.classList
            [ ( "my-div", True ) ]
        ]
    
    tooltipAttribute =
        Maybe.map (\tooltip -> [ HA.title tooltip ]) settings.tooltip |> Maybe.withDefault []

in
H.div
    (divAttributes ++ tooltipAttribute)
    [ content ]
```