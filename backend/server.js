import express from "express" ;
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/users.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
dotenv.config();
const port = 5000 || process.env.PORT;


app.use(express.json());
app.use((cookieParser()));

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.get("/",(req,res)=>{
    res.send("Om Namashivaya!!!");

})



app.listen(port,()=>{
    connectToMongoDB();
    console.log(`listening on port ${port}`);
});