module Main exposing (..)

import Browser
import Element as E
import Element.Font as EF exposing (alignRight)
import Element.Region as ER
import Html as H exposing (Html, br, div, hr, p)
import Html.Attributes as HA
import String exposing (fromInt)


type alias ImageInfo =
    { src : String
    , description : String
    }


type alias Model =
    { backgroundColour : Maybe E.Color
    , images : List ImageInfo
    }


type Msg
    = MsgChangeColours


modelInit : Model
modelInit =
    { backgroundColour = Nothing --Just E.rgb255 0xEE 0xEE 0xFF
    , images = generateImageList 1 55
    }


generateImageList : Int -> Int -> List ImageInfo
generateImageList start end =
    List.range start end
        |> List.map (\n -> { src = "images/tekeningen/michael-aben-" ++ fromInt n ++ ".webp", description = "" })


main : Program () Model Msg
main =
    Browser.sandbox
        { init = modelInit
        , view = viewLayout
        , update = update
        }


viewLayout : Model -> Html Msg
viewLayout model =
    E.layoutWith
        { options =
            [ E.focusStyle
                { backgroundColor = model.backgroundColour
                , borderColor = Nothing
                , shadow = Nothing
                }
            ]
        }
        [ E.padding 22
        ]
        (viewArtImages model)


viewTitle : E.Element msg
viewTitle =
    E.paragraph
        [ EF.bold
        , EF.size 28
        , ER.heading 1
        ]
        [ E.text "Michaël Aben's Tekeningen: Een Creatieve Wereld Ontdekt."
        ]


text1 : String
text1 =
    "Welkom in de wereld van Michaël Aben. Onze \"ome Michel\" genoot altijd erg veel van tekenen en het gebruik van kleuren om iets moois te maken. Hij had een grote liefde voor geometrische vormen zoals pyramides. Ook tekende hij graag gebouwen en soms gezichten. Hier vind je een collectie van zijn passie."


viewContent : E.Element msg
viewContent =
    let
        elmLink =
            E.link [] { label = E.text "Elm", url = "https://elm-lang.org/" }

        matsubaraLink =
            E.link [] { label = E.text "Kevin Matsubara", url = "https://matsubara.nl/" }
    in
    E.column
        [ E.paddingXY 0 10
        , ER.mainContent
        ]
        [ E.paragraph
            [ EF.size 18
            , E.paddingXY 0 20
            ]
            [ E.text text1 ]
        , E.paragraph
            [ EF.size 18
            , E.paddingXY 0 10
            ]
            [ E.text "Mensen zoals jij, kleuren het leven net iets mooier." ]
        , E.paragraph
            [ EF.size 14
            , E.paddingXY 0 10
            ]
            [ E.text "☼ 5 december 1947", E.html (br [] []), E.text "† 19 oktober 2023" ]
        , E.paragraph
            [ EF.size 18
            , E.paddingXY 0 10
            ]
            [ E.text "Aan alle mooie liedjes komt ooit eens een eind. Een kort en mooi verhaal, dat plotseling verdwijnt." ]
        , E.paragraph
            [ EF.size 18
            , E.paddingXY 0 10
            ]
            [ E.text "Onthou vooral het ritme en neurie het of zing, zo blijft dat mooiste lied een top herinnering." ]
        , E.paragraph
            [ EF.size 14
            , E.paddingXY 0 5
            ]
            [ E.html (hr [] []), E.text "Deze website is gemaakt in ", elmLink, E.text " door ", matsubaraLink, E.text "." ]
        ]


update : Msg -> Model -> Model
update _ model =
    model


elmIcon : E.Element msg
elmIcon =
    let
        icon =
            E.image
                []
                { src = "images/elm-icon.webp"
                , description = "elm icon"
                }
    in
    E.link [ E.centerX ]
        { label = icon, url = "https://elm-lang.org/" }


mainImage : E.Element msg
mainImage =
    E.image
        [ E.paddingXY 0 20
        , E.centerX
        ]
        { src = "images/michel-aben.webp", description = "Michel Aben" }


viewArtImages : Model -> E.Element msg
viewArtImages model =
    E.column []
        (viewTitle
            :: viewContent
            :: elmIcon
            :: mainImage
            :: List.map viewArtImage model.images
        )


viewArtImage : ImageInfo -> E.Element msg
viewArtImage imageInfo =
    E.image
        [ E.width (E.maximum 600 E.fill)
        , E.centerX
        , E.paddingXY 0 20
        ]
        { src = imageInfo.src
        , description = imageInfo.description
        }
