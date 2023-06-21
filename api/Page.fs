module Page 

open Giraffe
open Microsoft.AspNetCore.Http
open Microsoft.Extensions.Configuration
open System
// open System.Data.SqlClient
open System.IO
open System.Threading.Tasks

open MySqlConnector

[<CLIMutable>]
type Page = {
    Id: int
    Title: string
    Subtitle: string
    Content: string
}

type PageDb() =

    let configuration =
        let builder = new ConfigurationBuilder()
        let path = Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json")
        builder.AddJsonFile(path, optional = false, reloadOnChange = true) |> ignore
        builder.Build()

    let connectionString = configuration.GetConnectionString("Default_docker")
    let defaultPage = {Id = 0 ; Title = "" ; Subtitle= "" ; Content = "<section class=\"my-class\"><strong>404</strong> - Page not found!</section>"}

    let getPage (Id: int) =
        printfn "getPage..."
        printfn "Connection string: %s"  connectionString


        use connection = new MySqlConnection(connectionString)
        // use connection = new SqlConnection(connectionString)
        printfn "getPage > setup connection"
        connection.Open()
        printfn "getPage > connection open"

        let sql = sprintf "SELECT * FROM pages WHERE id=%d" Id
        use command = new MySqlCommand(sql, connection)
        printfn "command defined."
        use reader = command.ExecuteReader()

        printfn "getPage > execute query"

        let rec readData (acc: List<Page>) =
            if reader.Read() then
                let page = {
                    Id = reader.GetInt32(0)
                    Title = reader.GetString(1)
                    Subtitle = reader.GetString(2)
                    Content = reader.GetString(3)
                }
                readData (page :: acc)
            else
                acc
        readData []    

    let mutable allPages : Page list = [
        {Id = 1 ; Title = "Test Title" ; Subtitle= "subtitle" ; Content = "<section class=\"my-class\">This is a <strong>section</strong>!</section>"}
        {Id = 2 ; Title = "Second Title" ; Subtitle= "another subtitle" ; Content = "<section class=\"my-class\">You are on the <strong>second</strong> page!</section>"}
    ]

    let getPageById (id: int) : Page =
        match List.tryFind (fun page -> page.Id = id) allPages with
        | Some page -> page
        | None -> defaultPage

    member this.GetAllPages = fun() -> getPageById 1 

    member this.GetPage = fun(id: int) -> getPage id

    member this.AddPage (newPage : Page) =
        allPages <- (newPage::allPages)
        allPages

type PageServiceTree = {
    getPageDb : unit -> PageDb
}

let getPagesHttpHandler (serviceTree: PageServiceTree) =
    fun (next : HttpFunc) (ctx : HttpContext) ->
        json (serviceTree.getPageDb().GetAllPages()) next ctx

let getPageByIdHttpHandler (serviceTree: PageServiceTree) (id : int)=
    fun (next : HttpFunc) (ctx : HttpContext)->         
        json (serviceTree.getPageDb().GetPage(id)) next ctx

let createPostHttpHandler (serviceTree: PageServiceTree) =
    fun (next : HttpFunc) (ctx : HttpContext) ->
        task {
            let! newPostJson = ctx.BindJsonAsync<Page>()
            serviceTree.getPageDb().AddPage(newPostJson) |> ignore
            return! json (newPostJson) next ctx
        }

