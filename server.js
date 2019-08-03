import express, { urlencoded, json, static } from "express";
import { connect } from "mongoose";
import exphbs from "express-handlebars";

var PORT = process.env.PORT || 3000;

var app = express();
import routes from "./Solutions/routes";

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

connect(MONGODB_URI);

app.listen(PORT, function() {
  console.log("Listening on port: " + PORT);
});
