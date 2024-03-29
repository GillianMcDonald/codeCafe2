const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const PORT = 8000;
const logger = require("morgan");

const indexRouter = require("./routes/index");

const app = express();

app.use(cors());

//use Body parser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(logger("dev"));

// SET PUBLICE FOLDERS
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
 next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
 // set locals, only providing error in development
 res.locals.message = err.message;
 res.locals.error = req.app.get("env") === "development" ? err : {};

 // render the error page
 res.status(err.status || 500);
 res.render("error");
});


app.listen(PORT, () => {
 console.log(`Server runing on http://localhost:${PORT}`);
});
