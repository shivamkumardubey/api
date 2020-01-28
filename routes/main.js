const express=require("express");
const router=express.Router();
const myconection=require("./conection");
var login=require('./loginroutes');

router.get("/",(req,res)=>{
   res.send("hi dubey");
})
router.get("/signup",(req,res)=>{

  res.send("hi l");

})
router.post('/register/fans',login.registerfan);
router.post('/register/sartist',login.registersartist);
router.post('/login',login.login);

module.exports=router;