require("dotenv").config();
var express = require("express");
var app = express();
// app.get("/", (req, res)=>{
//     res.send("Hello  Express ")
// })

// app.use("/public", express.static(__dirname + "/public"));
// app.use((req, res, next) => {
//   console.log(req.method + " " + req.path + " -  " + req.ip);
//   next();
// });

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// app.get("/json", (req, res)=>{
//     res.json({"message": "Hello json"});
// });

app.get("/json", (req, res) => {
  console.log(process.env);
  if (process.env.MESSAGE_STYLE == "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
});

app.get(
  "/user",
  (req, res, next) => {
    req.time = new Date().toString();
    next();
  },
  (req, res) => {
    res.send({ time: req.time });
  }
);

app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word });
});

app.get('/name', (req, res, next)=>{

    console.log("query: ", req.query);
    next();
})
module.exports = app;
