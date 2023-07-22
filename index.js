const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const ContactusRouter=require("./router/contactUs")



const app = express();
(async () => {
  app.use(express.json());
  app.use(cors({
    origin:"*"
  }));
  app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
  app.use("/contactus",ContactusRouter)
  mongoose.set("strictQuery", false);
  await mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connected to the database"))
    .catch((err) => console.log(err));
})();

const PORT = process.env.PORT;
app.listen(PORT || 3000, () => {
  console.log(`App is listening to the port ${PORT}`);
});
