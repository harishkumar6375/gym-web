const express = require("express")
const app = express()
const port = process.env.PORT || 4000;
const cors = require("cors")
require("./db/db");
const Gymuser = require("./db/db");



app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true
}))

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.get("/" , (req,res)=>{
    res.send("this is home page")
})

app.post("/contact" ,async (req,res)=>{
    try {
        const userRes = new Gymuser(req.body);
        await userRes.save();
        res.status(201).send();
        
    } catch (error) {
        res.status(500).send(error);
    }
    
})

app.listen(port , ()=>{
    console.log(`listening the part at ${port}`)
})