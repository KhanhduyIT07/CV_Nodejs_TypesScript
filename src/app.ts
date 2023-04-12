import express from "express";
import indexRouter from "./routers/index";
import aboutRouters from "./routers/about";
import path from "path";
import { connect } from "./config/connectDB";
const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello Word");
// });
//config views
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views/"));
//config public
app.use(express.static(path.join(__dirname, "public")));

connect();
app.use("/", indexRouter);
app.use("/abouts", aboutRouters);
app.listen(3000, () => {
  console.log("sever runing okkk !!!");
});