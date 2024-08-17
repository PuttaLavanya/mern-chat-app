import path from "path";
import express from "express" ;
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/users.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";


const __dirname = path.resolve();

dotenv.config();
const port = 5000 || process.env.PORT;




app.use(express.json());
app.use((cookieParser()));

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);


app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// app.get("/",(req,res)=>{
//     res.send("Om Namashivaya!!!");

// })



server.listen(port,()=>{
    connectToMongoDB();
    console.log(`listening on port ${port}`);
});