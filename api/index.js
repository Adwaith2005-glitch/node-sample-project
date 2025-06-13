const express=require("express");
const cors=require("cors");
const connectToDatabase=require("../mongooseconfig")
const MyUser = require("../mongo model/schema")
const app= express();
app.use(cors());
app.use(express.json());

app.get('/getdata/:id',(req,res)=>{
    console.log("request:")
    console.log(req.params.id);
    res.send("hello world");
});

app.post('/createdata',(req,res)=>{
    const data=req.body;
    console.log(data);
    const createUser=MyUser.create(data)
    console.log(createUser)
    res.send("data received")

});





const port=3001;
app.listen(port,()=>{console.log("server running")})
connectToDatabase();