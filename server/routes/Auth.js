const router = require("express").Router();
const User = require("../models/User.js")
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { findById } = require("../models/User.js");

//Register
router.post("/register", async(req,res)=>{
    try {
        const emailFind = await User.findOne({ email: req.body.email });
        if(emailFind){
            res.status(500).send("This email is already in use");
        }else{
            const {email ,password} = req.body
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
         
            const newUser = await new User({
                email,
                password:hashedPassword
            })
            const user = await newUser.save()
            res.status(200).send(user)
        }
       
    } catch (error) {
        res.status(500).send(error.message)
    }
})

//login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if(!user){
      res.status(404).send("False Password or Email!")
     }
   if(user){
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
  
   
   if (!validPassword ) {
      res.status(403).send("False Password or Email!");
    } else {
      res.status(200).json(user);
    }
  }
  } catch (error) {
    res.status(500).json(error.message);
  }
});
//ACC EDIT
router.put("/edit/acc/:id",async(req,res)=>{
  try {
   
    const user = await User.findOne({ email: req.body.email });
    const {newPassword} = req.body
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    if(!user){
      res.status(404).send("False Password or Email!")
     }
   if(user){
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
   
   if (!validPassword ) {
      res.status(403).send("False Password or Email!");
    } else {
      await User.findByIdAndUpdate(req.params.id,{
        email:req.body.email,
        password:hashedPassword
      })

      const updatedUser = await User.findById(req.params.id)

      res.status(200).send(updatedUser)
    }
  }
  } catch (error) {
    res.status(500).json(error.message);
  }
})
module.exports = router;