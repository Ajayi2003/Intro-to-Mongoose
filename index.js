const server = require("express")
const DatabaseConnect = require("./Config/database")

const port = 4201
const app = server()
app.use(server.json())
DatabaseConnect()


app.get("/",(req, res)=>{
    try {
        return res.status(200).json({
            message: "Server is running"
        })
        
    } catch (error) {
        return res.status(404).json({
            message: "Server is not running"
        })
        

        
    }

})

app.listen(port,()=>{
    console.log("Server is on", port)
})