import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";

dotenv.config({
    path: './.env'
});

const app = express();

const startServer = async () => {
  try {
           await connectDB();

        app.on("error", (error) => {    // to check if there are any errors 
        console.log("ERROR", error);
        throw error;
    });


    app.listen(process.env.PORT || 8000, () => {   // app will listen
        console.log(` Server is running at port :     
            ${process.env.PORT}`);                 

    });
} catch (err) {
    console.log("MONGO db connection failed !!! ", err);
    
}
}

startServer();

