const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
require('dotenv').config()

//ROUTES REQ
const User = require("./routes/User.js")
const auth = require("./routes/Auth.js")


const port = process.env.PORT || 5000

mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB Connect Successfull");
  } catch (error) {
    console.log(error);
  }
};



//midleware
app.use(express.json())
app.use(cors())


//ROUTES
app.use("/user",User)
app.use("/auth",auth)

app.listen(port,()=>{
    connect()
    console.log(`Server started on ${port}`);
    
})