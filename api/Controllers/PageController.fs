namespace api.Controllers

open System
open Microsoft.AspNetCore.Mvc

[<Route("api/[controller]")>]
[<ApiController>]
type PageController() =
    inherit ControllerBase()

    [<HttpGet>]
    member this.Get() =
        Ok("Hello, World!")
