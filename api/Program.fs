open System
open Microsoft.AspNetCore.Builder
open Microsoft.AspNetCore.Hosting
open Microsoft.Extensions.Hosting
open Microsoft.Extensions.Logging
open Microsoft.Extensions.DependencyInjection

open Page
open Giraffe

// Sources:
// https://hamy.xyz/labs/2022-12-simple-fsharp-web-api-giraffe
// https://github.com/SIRHAMY/fsharp-giraffe-blog-api-example

(* Web App Configuration *)

let webApp =
    let pageDb = new PageDb()

    let serviceTree = {
        getPageDb = fun() -> pageDb
    }

    choose[
        route "/" >=> text "iamanapi"
        subRoute "/posts"
            (choose [
                route "" >=> GET >=> warbler (fun _ ->
                    (getPostsHttpHandler serviceTree))
                route "/create"
                    >=> POST
                    >=> warbler (fun _ ->
                        (createPostHttpHandler serviceTree))
            ])
    ]

(* Infrastructure Configuration *)

let configureApp (app : IApplicationBuilder) =
    app.UseGiraffe (webApp)

let configureServices (services : IServiceCollection) =
    // Add Giraffe dependencies
    services.AddGiraffe() |> ignore

[<EntryPoint>]
let main _ =
    Host.CreateDefaultBuilder()
        .ConfigureWebHostDefaults(
            fun webHostBuilder ->
                webHostBuilder
                    .Configure(configureApp)
                    .ConfigureServices(configureServices)
                    |> ignore)
        .Build()
        .Run()
    0