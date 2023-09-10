import express from "express";
import initWeb from "./routes/webinit";
import viewEngine from "./config/viewEngine";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
viewEngine(app);
initWeb(app);
dbConnect();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT} port`);
});
