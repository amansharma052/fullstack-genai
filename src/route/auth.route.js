const express =require('express')

const authController =require("../controller/auth.controller")
const authRouter =express.Router()

authRouter.post("/register",authController.registerUserController)

authRouter.post("/login",authController.loginUserController)

authRouter.get("/logout",authController.logoutUserController)
authRouter.get("./get-me",authmiddelware.authmiddelware)



module.exports =authRouter