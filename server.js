const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: "./.env" }); // Config of ENV
const port = process.env.PORT || 3000; //ENV PORT READING

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB).then(() => {
  console.log("DB connected");
});

app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
    credentials:true, 
    methods: "OPTIONS,GET,PUT,DELETE,POST,PATCH",
  })
);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
