require("dotenv").config()
const express = require("express")
const session = require("express-session")
const flash = require('connect-flash');
const app = express()

// -- CONTROLLERS -- \\
const dbController = require("./controllers/dbController")

// -- ROUTES -- \\
const userRoute = require("./routes/userRoute")
const adminRoute = require("./routes/adminRoute")

// -- EXPRESS MIDDLEWARE -- \\
app.set("view engine", "ejs")
app.set("views", "views")
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"))
app.use(flash());

app.use(
    session({
        secret: process.env.SESSIONKEY,
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 30 * 60 * 1000 },
    })
);

// -- EXPRESS APP -- \\
app.use((req, res, next) => {
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    next();
});
app.use(userRoute)
app.use(adminRoute)


app.listen(3000, ()=> {
    dbController()
    console.log("App listened on port 3000")
})