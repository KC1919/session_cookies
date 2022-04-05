const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

require("dotenv").config();

app.set('view engine','ejs');
app.set(express.static("public"));

const authRouter=require("./routes/auth");
const homeRouter=require("./routes/index");

app.use("/auth",authRouter);
app.use("/",homeRouter);

const connectDB=require("./middlewares/dbConnect");
connectDB();
app.listen(3000,()=>{
    console.log("Server started on port 3000");
})