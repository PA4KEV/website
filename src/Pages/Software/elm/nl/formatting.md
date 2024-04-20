## Formatting

Je kunt op deze manier een docstring toevoegen aan een elm functie:

```elm


{- Render the Elm icon. -}


elmIcon : E.Element msg
elmIcon =

```

Maar bij het herstructureren van code, worden automatisch 2 lijnen toegevoegd.

Door een pipe character "|" toe te voegen, wordt de docstring wel vastgemaakt aan de functie-header.


```elm


{-| Render the Elm icon.
-}
elmIcon : E.Element msg
elmIcon =

```
