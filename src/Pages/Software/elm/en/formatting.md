## Formatting

You can add a docstring to an elm function like this:

```elm


{- Render the Elm icon. -}


elmIcon : E.Element msg
elmIcon =

```

But upon formatting, 2 new lines are automatically added.

By adding a "|" pipe character, the docstring will get appended to the top op the function header.

```elm


{-| Render the Elm icon.
-}
elmIcon : E.Element msg
elmIcon =

```
