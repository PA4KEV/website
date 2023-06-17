module Page 

open System
open System.Threading.Tasks
open Microsoft.AspNetCore.Http
open Giraffe

[<CLIMutable>]
type Page = {
    id: int
    title: string
    subtitle: string
    content: string
}

type PageDb() =

    let mutable allPages : Page list = []

    member this.GetAllPosts = fun() -> allPages 

    member this.AddPost (newPage : Page) =
        allPages <- (newPage::allPages)
        allPages

type PageServiceTree = {
    getPageDb : unit -> PageDb
}

let getPostsHttpHandler (serviceTree: PageServiceTree) =
    fun (next : HttpFunc) (ctx : HttpContext) ->
        json (serviceTree.getPageDb().GetAllPosts()) next ctx

let createPostHttpHandler (serviceTree: PageServiceTree) =
    fun (next : HttpFunc) (ctx : HttpContext) ->
        task {
            let! newPostJson = ctx.BindJsonAsync<Page>()
            serviceTree.getPageDb().AddPost(newPostJson) |> ignore
            return! json (newPostJson) next ctx
        }

