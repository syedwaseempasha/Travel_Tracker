import dotenv from "dotenv"
import connectDB from "./database/db.js"
import app from "./app.js"

dotenv.config({
    path: '/env'
})

connectDB()
.then(() =>{
    const port = process.env.PORT || 8000
    app.listen(process.env.port, () =>{
        console.log(`server is running on port : ${port} `);
    })
})
.catch((err) =>{
    console.log("mongoDB connection failed !!!", err);
})