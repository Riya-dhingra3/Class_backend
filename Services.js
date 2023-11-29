const express=require("express");
const app=express();


app.use(express.json());

// Routes
const routes=require("./Routes/userRoutes");
app.use("/api",routes);

// Controller
require("./Middleware/Database");

app.listen(3000,()=>{
    console.log("Server connected on port 3000")
})
