const express =require('express')
const cookieparser =require('cookie-parser')
const authMiddelware =requrie("../middelware/auth.middelware")


const app =express()
app.use(express.json())
app.use(cookieparser())
const authRouter =require("./route/auth.route")



app.use("/api/auth",authRouter)



module.exports =app
