import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import connect from "../db";
import globalRouter from "./router/globalRouter";
import adminRouter from "./router/adminRouter";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

connect();

app.set("view engine", "pug");
//app.use(helmet());
app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname, "/assets")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", globalRouter);
app.use("/admin", adminRouter);

app.listen(PORT, () => {
  console.log(`${PORT} server`);
});
