const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const history = require('connect-history-api-fallback');
const landingRouter = require("./routes/landingRouter");
app.use((req, res, next) => {
  req.requestTime = new Date().toString();
  console.log(req.requestTime);
  next();
});

app.use(history({
	rewrites: [
		{ from: /\/*/, to: (context) => {
			console.log(context.parsedUrl.pathname);
			if(context.parsedUrl.pathname.indexOf('/asset-manifest.json') == 0
			   || context.parsedUrl.pathname.indexOf('/img') == 0
			   || context.parsedUrl.pathname.indexOf('/static') == 0
			   || context.parsedUrl.pathname.indexOf('/api') == 0
			   || context.parsedUrl.pathname.indexOf('/manifest.json') == 0
			   || context.parsedUrl.pathname.indexOf('/robots.txt') == 0){
				return context.parsedUrl.pathname;
			}
			else return '/index.html'}
		},
	]
}));




app.use(morgan("dev"));
app.use(express.json()); //Enables req reading

app.use(express.static(path.join(__dirname, "public")));
app.use("/", express.static("../withus-build"));
app.use("/withus/api/v1/landing", landingRouter);

module.exports = app;
