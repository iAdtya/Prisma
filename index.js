import  express  from "express";
import cookieParser from "cookie-parser";
import userRouter from "./routes/userRoutes.js";

import dotenv from "dotenv";
dotenv.config();

const app = express();
// todo regular middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// todo cookie middleware
app.use(cookieParser());

// todo routes
app.use("/api",userRouter)

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
