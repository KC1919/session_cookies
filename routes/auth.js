const express=require("express");
const router=express.Router();
const AuthService=require("../services/auth");

let authService=new AuthService();

//Login routes
router.get("/login",authService.getLogin);
router.post("/login",authService.postLogin);

//Register routes
router.get("/register",authService.getRegister);
router.post("/register",authService.postRegister);

module.exports=router;