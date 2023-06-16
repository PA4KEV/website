module Database

open System.Data.SqlClient
open Microsoft.Extensions.Configuration
open System.IO

let configuration =
    let builder = new ConfigurationBuilder()
    let path = Path.Combine(Directory.GetCurrentDirectory(), "appsettings.json")
    builder.AddJsonFile(path, optional = false, reloadOnChange = true) |> ignore
    builder.Build()

let connectionString = configuration.GetConnectionString("DefaultConnection")

type Page =
    { Id : int
      Title : string
      Subtitle : string }

let getPages () =
    use connection = new SqlConnection(connectionString)
    connection.Open()

    use command = new SqlCommand("SELECT * FROM basic_pages", connection)

    use reader = command.ExecuteReader()

    let rec readData (acc: List<Page>) =
        if reader.Read() then
            let page = {
                Id = reader.GetInt32(0)
                Title = reader.GetString(1)
                Subtitle = reader.GetString(2)
            }
            readData (page :: acc)
        else
            acc

    readData []
