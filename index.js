const express = require('express')
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req, res) =>{
    res.send("course api runing")
});


app.listen(port, ()=>{
    console.log("server corse loder")
})