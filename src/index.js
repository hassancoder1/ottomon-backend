require("dotenv").config();
const PORT = process.env.PORT || 5000;
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var connectToDB = require("../db/conn.js");
const cors = require("cors");
var indexRouter = require("../routes/index");
// var adminRouter = require("./routes/admin");
var authRouter = require("../routes/auth.js");
var checkoutRoute = require("../routes/checkout.js");
var registerRouter = require("../routes/Register.js");
var usersRouter = require("../routes/users.js");

const productRoute = require("../routes/product.js");
const matterssesRoute = require("../routes/mattresses.js");
const bedsRoute = require("../routes/beds.js");
const salesRoute = require("../routes/sales.js");
const accessoriesRoute = require("../routes/accessories.js");
// const cartRoute=require('./routes/cart')
const serviceRoute = require("../routes/service.js");
const serviceFormRoute = require("../routes/serviceForm.js");
var resetpasswordRouter = require("../routes/reset-password.js");
var userRouter = require("../routes/user.js");
const fileUpload = require("express-fileupload");
var app = express();

app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(express.urlencoded({ extended: true }));
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
app.use("/", indexRouter);
// app.use("/admin", adminRouter);
app.use("/register", registerRouter);
// app.use("/cart", cartRoute);
app.use("/auth", authRouter);
app.use("/users", usersRouter);

app.use("/product", productRoute);
app.use("/mattresses", matterssesRoute);
app.use("/beds", bedsRoute);
app.use("/accessories", accessoriesRoute);
app.use("/sales", salesRoute);
app.use("/service", serviceRoute);
app.use("/checkout", checkoutRoute);
app.use("/serviceForm", serviceFormRoute);
app.use("/api/user", userRouter);
app.use("/reset-password", resetpasswordRouter);
//Initialize DB
connectToDB();

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error", {
    title: "Error", // Add this line to include the title variable
    message: err.message,
    error: err,
  });
});

app.get("/signup", function (req, res) {
  res.render("signin");
});

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});

module.exports = app;
