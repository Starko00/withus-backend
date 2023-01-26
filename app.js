const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const history = require("connect-history-api-fallback");
const landingRouter = require("./routes/landingRouter");
const blogRouter = require("./routes/blogRouter")
const cors = require('cors')
const contactRouter = require('./routes/contactRouter')
//  Req time loging 
app.use((req, res, next) => {
  req.requestTime = new Date().toString();
  console.log(req.requestTime);
  next();
});

app.use(
  cors({
    origin: "*",

    credentials: true,
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  })
);
// Rendering and access:
app.use(
  history({
    rewrites: [
      {
        from: /\/*/,
        to: (context) => {
          console.log(context.parsedUrl.pathname);
          if (
            context.parsedUrl.pathname.indexOf("/asset-manifest.json") == 0 ||
            context.parsedUrl.pathname.indexOf("/img") == 0 ||
            context.parsedUrl.pathname.indexOf("/static") == 0 ||
            context.parsedUrl.pathname.indexOf("/api") == 0 ||
            context.parsedUrl.pathname.indexOf("/manifest.json") == 0 ||
            context.parsedUrl.pathname.indexOf("/robots.txt") == 0 ||
            context.parsedUrl.pathname.indexOf("/public") == 0 ||
            context.parsedUrl.pathname.indexOf("/blogImgs") == 0 
          ) {
            return context.parsedUrl.pathname;
          } else return "/index.html";
        },
      },
    ],
  })
);

//Loging activity
app.use(morgan("dev"));
app.use(express.json()); //Enables req reading



//Server static serving current = react-build (app)
app.use("/", express.static("../withus-build"));
//Public access
app.use("/static",express.static(path.join(__dirname, "public")));
//Routes - Router
app.use("/api/withus/v1/", landingRouter);
app.use("/api/withus/v1/blog/", blogRouter);
app.use("/api/withus/v1/contact", contactRouter )

module.exports = app;
