open Microsoft.AspNetCore.Builder
open Microsoft.AspNetCore.Cors.Infrastructure
open Microsoft.AspNetCore.Hosting
open Microsoft.Extensions.Hosting
open Microsoft.Extensions.DependencyInjection

open Giraffe
open Giraffe.EndpointRouting

open Page

// Sources:
// https://hamy.xyz/labs/2022-12-simple-fsharp-web-api-giraffe
// https://hamy.xyz/labs/2023-01-fsharp-giraffe-endpoint-routing
// https://github.com/SIRHAMY/fsharp-giraffe-blog-api-example


(* Web App Configuration *)

let pageDb = new PageDb()

let serviceTree = {
    getPageDb = fun() -> pageDb
}

let endpointsList = [
    GET [
        routef "page/%i" (fun (id : int) ->
            // text ($"/anInt: hit with val: {anInt}"))
            getPageByIdHttpHandler serviceTree id)
    ]
]

(* Infrastructure Configuration *)

let configureCors (builder : CorsPolicyBuilder) =
    builder
        .WithOrigins(
            "http://localhost:5218",
            "https://localhost:5218",
            "http://localhost:3000",
            "https://localhost:3000")
       .AllowAnyMethod()
       .AllowAnyHeader()
       |> ignore

let configureApp (app : IApplicationBuilder) =
    app
        .UseRouting()
        .UseCors(configureCors)
        .UseEndpoints(fun e -> e.MapGiraffeEndpoints(endpointsList))
    |> ignore


let configureServices (services : IServiceCollection) =
    // Add Giraffe dependencies
    services.AddCors()    |> ignore
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